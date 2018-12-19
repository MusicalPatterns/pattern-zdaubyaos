import { Block, ContourPiece, Rendering } from '@musical-patterns/pattern'
import { BarTarget, BlockStyle } from '../../../types'
import { countUsage } from '../../../utilities'
import { buildRenderings, RenderingName, Renderings } from '../../renderings'
import { buildTrueBlocks } from './blocks'
import {
    BuildTrueContourPieceParameters,
    ByBlockStyle,
    GetTrueContourPieces,
    TrueBlocks,
    TrueContourPieces,
} from './types'

// @ts-ignore
const contourPiecesByBarTargetBlockStyleThenRendering: TrueContourPieces = {}

const buildTrueContourPiece: (parameters: BuildTrueContourPieceParameters) => void =
    (parameters: BuildTrueContourPieceParameters): void => {
        const {
            rendering,
            block,
            barTarget,
            blockStyle,
            renderingName,
        }: BuildTrueContourPieceParameters = parameters
        const contourPiece: ContourPiece = rendering(block)

        contourPiecesByBarTargetBlockStyleThenRendering[ barTarget ] =
            contourPiecesByBarTargetBlockStyleThenRendering[ barTarget ] || {}
        contourPiecesByBarTargetBlockStyleThenRendering[ barTarget ][ blockStyle ] =
            contourPiecesByBarTargetBlockStyleThenRendering[ barTarget ][ blockStyle ] || {}
        contourPiecesByBarTargetBlockStyleThenRendering[ barTarget ][ blockStyle ][ renderingName ] =
            contourPiece
    }

const buildTrueContourPieces: () => TrueContourPieces =
    (): TrueContourPieces => {
        const renderings: Renderings = buildRenderings()

        const trueBlocks: TrueBlocks = buildTrueBlocks()
        Object.entries(trueBlocks)
            .forEach(
                // @ts-ignore
                ([ barTarget, blocksBy ]: [ BarTarget, ByBlockStyle ]): void => {
                    Object.entries(blocksBy)
                        .forEach(
                            // @ts-ignore
                            ([ blockStyle, block ]: [ BlockStyle, Block ]): void => {
                                Object.entries(renderings)
                                    .forEach(
                                        // @ts-ignore
                                        ([ renderingName, rendering ]: [ RenderingName, Rendering ]): void => {
                                            buildTrueContourPiece({
                                                barTarget,
                                                block,
                                                blockStyle,
                                                rendering,
                                                renderingName,
                                            })
                                        })
                            })
                })

        return contourPiecesByBarTargetBlockStyleThenRendering
    }

const getTrueContours: GetTrueContourPieces =
    (blockStyle: BlockStyle, barTarget: BarTarget, renderingName: RenderingName): ContourPiece => {
        buildTrueContourPieces()

        countUsage(barTarget, blockStyle, renderingName)

        return contourPiecesByBarTargetBlockStyleThenRendering[ barTarget ][ blockStyle ][ renderingName ]
    }

export {
    buildTrueContourPieces,
    getTrueContours,
}
