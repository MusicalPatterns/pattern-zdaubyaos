import { PitchDuration, Rendering } from '@musical-patterns/material'
import { Block, ContourPiece, entries } from '@musical-patterns/utilities'
import { computeRenderings, RenderingName, Renderings } from '../../rendering'
import { BarTarget, BlockStyle } from '../../types'
import { countUsage } from '../contourUsage'
import { computeTrueBlocks } from './blocks'
import {
    ComputeTrueContourPieceParameters,
    GetTrueContourPieces,
    TrueBlocksByBarTargetThenBlockStyle,
    TrueBlocksByBlockStyle,
    TrueContourPiecesByBarTargetThenBlockStyleThenRenderingName,
} from './types'

const contourPiecesByBarTargetBlockStyleThenRendering: TrueContourPiecesByBarTargetThenBlockStyleThenRenderingName =
    // tslint:disable-next-line no-object-literal-type-assertion
    {} as TrueContourPiecesByBarTargetThenBlockStyleThenRenderingName

const computeTrueContourPiece: (parameters: {
    barTarget: BarTarget,
    block: Block,
    blockStyle: BlockStyle,
    rendering: Rendering<PitchDuration>,
    renderingName: RenderingName,
}) => void =
    (
        {
            rendering,
            block,
            barTarget,
            blockStyle,
            renderingName,
        }: ComputeTrueContourPieceParameters,
    ): void => {
        const contourPiece: ContourPiece<PitchDuration> = rendering(block)

        contourPiecesByBarTargetBlockStyleThenRendering[ barTarget ] =
            contourPiecesByBarTargetBlockStyleThenRendering[ barTarget ] || {}
        contourPiecesByBarTargetBlockStyleThenRendering[ barTarget ][ blockStyle ] =
            contourPiecesByBarTargetBlockStyleThenRendering[ barTarget ][ blockStyle ] || {}
        contourPiecesByBarTargetBlockStyleThenRendering[ barTarget ][ blockStyle ][ renderingName ] =
            contourPiece
    }

const computeTrueContourPieces: () => TrueContourPiecesByBarTargetThenBlockStyleThenRenderingName =
    (): TrueContourPiecesByBarTargetThenBlockStyleThenRenderingName => {
        const renderings: Renderings = computeRenderings()

        const trueBlocks: TrueBlocksByBarTargetThenBlockStyle = computeTrueBlocks()
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
                                            computeTrueContourPiece({
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
        computeTrueContourPieces()

        countUsage(barTarget, blockStyle, renderingName)

        return contourPiecesByBarTargetBlockStyleThenRendering[ barTarget ][ blockStyle ][ renderingName ]
    }

export {
    computeTrueContourPieces,
    getTrueContours,
}
