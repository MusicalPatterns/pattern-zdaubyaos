import { PitchDuration, Rendering } from '@musical-patterns/pattern'
import { Block, ContourPiece, entries } from '@musical-patterns/utilities'
import { BarTarget, BlockStyle } from '../../../types'
import { buildRenderings, RenderingName, Renderings } from '../../renderings'
import { countUsage } from '../contourUsage'
import { buildTrueBlocks } from './blocks'
import {
    BuildTrueContourPieceParameters,
    GetTrueContourPieces,
    TrueBlocksByBarTargetThenBlockStyle,
    TrueBlocksByBlockStyle,
    TrueContourPiecesByBarTargetThenBlockStyleThenRenderingName,
} from './types'

// @ts-ignore
const contourPiecesByBarTargetBlockStyleThenRendering: TrueContourPiecesByBarTargetThenBlockStyleThenRenderingName = {}

const buildTrueContourPiece: (parameters: BuildTrueContourPieceParameters) => void =
    (parameters: BuildTrueContourPieceParameters): void => {
        const {
            rendering,
            block,
            barTarget,
            blockStyle,
            renderingName,
        }: BuildTrueContourPieceParameters = parameters
        const contourPiece: ContourPiece<PitchDuration> = rendering(block)

        contourPiecesByBarTargetBlockStyleThenRendering[ barTarget ] =
            contourPiecesByBarTargetBlockStyleThenRendering[ barTarget ] || {}
        contourPiecesByBarTargetBlockStyleThenRendering[ barTarget ][ blockStyle ] =
            contourPiecesByBarTargetBlockStyleThenRendering[ barTarget ][ blockStyle ] || {}
        contourPiecesByBarTargetBlockStyleThenRendering[ barTarget ][ blockStyle ][ renderingName ] =
            contourPiece
    }

const buildTrueContourPieces: () => TrueContourPiecesByBarTargetThenBlockStyleThenRenderingName =
    (): TrueContourPiecesByBarTargetThenBlockStyleThenRenderingName => {
        const renderings: Renderings = buildRenderings()

        const trueBlocks: TrueBlocksByBarTargetThenBlockStyle = buildTrueBlocks()
        entries(trueBlocks)
            .forEach(
                ([ barTarget, blocksBy ]: [ BarTarget, TrueBlocksByBlockStyle ]): void => {
                    entries(blocksBy)
                        .forEach(
                            ([ blockStyle, block ]: [ BlockStyle, Block ]): void => {
                                entries(renderings)
                                    .forEach(
                                        (
                                            [ renderingName, rendering ]:
                                                [ RenderingName, Rendering<PitchDuration> ],
                                        ): void => {
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
    (blockStyle: BlockStyle, barTarget: BarTarget, renderingName: RenderingName): ContourPiece<PitchDuration> => {
        buildTrueContourPieces()

        countUsage(barTarget, blockStyle, renderingName)

        return contourPiecesByBarTargetBlockStyleThenRendering[ barTarget ][ blockStyle ][ renderingName ]
    }

export {
    buildTrueContourPieces,
    getTrueContours,
}
