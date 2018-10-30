import { Block } from '../../../../../../src'
import { BarTarget, BlockStyle, ContourPiece } from '../../../types'
import { countUsage } from '../../../utilities'
import { buildZdaubyaosRenderings, Rendering, RenderingName, Renderings } from '../../renderings'
import { buildTrueBlocks } from './blocks'
import {
    BuildTrueContourPieceParameters,
    ByBlockStyle,
    GetTrueContourPieces,
    TrueBlocks,
    TrueContourPieces,
} from './types'

// @ts-ignore
const zdaubyaosContourPiecesByBarTargetBlockStyleThenRendering: TrueContourPieces = {}

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

        zdaubyaosContourPiecesByBarTargetBlockStyleThenRendering[ barTarget ] =
            zdaubyaosContourPiecesByBarTargetBlockStyleThenRendering[ barTarget ] || {}
        zdaubyaosContourPiecesByBarTargetBlockStyleThenRendering[ barTarget ][ blockStyle ] =
            zdaubyaosContourPiecesByBarTargetBlockStyleThenRendering[ barTarget ][ blockStyle ] || {}
        zdaubyaosContourPiecesByBarTargetBlockStyleThenRendering[ barTarget ][ blockStyle ][ renderingName ] =
            contourPiece
    }

const buildTrueContourPieces: () => TrueContourPieces =
    (): TrueContourPieces => {
        const renderings: Renderings = buildZdaubyaosRenderings()

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

        return zdaubyaosContourPiecesByBarTargetBlockStyleThenRendering
    }

const getTrueContours: GetTrueContourPieces =
    (blockStyle: BlockStyle, barTarget: BarTarget, renderingName: RenderingName): ContourPiece => {
        buildTrueContourPieces()

        countUsage(barTarget, blockStyle, renderingName)

        return zdaubyaosContourPiecesByBarTargetBlockStyleThenRendering[ barTarget ][ blockStyle ][ renderingName ]
    }

export {
    buildTrueContourPieces,
    getTrueContours,
}
