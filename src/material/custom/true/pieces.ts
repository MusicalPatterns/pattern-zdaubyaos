import { PitchValue, Rendering } from '@musical-patterns/material'
import { Block, ContourPiece, entries, Thunk } from '@musical-patterns/utilities'
import { RenderingName, Renderings, thunkRenderings } from '../../rendering'
import { BarTarget, BlockStyle } from '../../types'
import { countUsage } from '../contourUsage'
import { thunkTrueBlocks } from './blocks'
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
    rendering: Rendering<PitchValue>,
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
        const contourPiece: ContourPiece<PitchValue> = rendering(block)

        contourPiecesByBarTargetBlockStyleThenRendering[ barTarget ] =
            contourPiecesByBarTargetBlockStyleThenRendering[ barTarget ] || {}
        contourPiecesByBarTargetBlockStyleThenRendering[ barTarget ][ blockStyle ] =
            contourPiecesByBarTargetBlockStyleThenRendering[ barTarget ][ blockStyle ] || {}
        contourPiecesByBarTargetBlockStyleThenRendering[ barTarget ][ blockStyle ][ renderingName ] =
            contourPiece
    }

const thunkTrueContourPieces: Thunk<TrueContourPiecesByBarTargetThenBlockStyleThenRenderingName> =
    (): TrueContourPiecesByBarTargetThenBlockStyleThenRenderingName => {
        const renderings: Renderings = thunkRenderings()

        const trueBlocks: TrueBlocksByBarTargetThenBlockStyle = thunkTrueBlocks()
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
                                                [ RenderingName, Rendering<PitchValue> ],
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
    (blockStyle: BlockStyle, barTarget: BarTarget, renderingName: RenderingName): ContourPiece<PitchValue> => {
        thunkTrueContourPieces()

        countUsage(barTarget, blockStyle, renderingName)

        return contourPiecesByBarTargetBlockStyleThenRendering[ barTarget ][ blockStyle ][ renderingName ]
    }

export {
    thunkTrueContourPieces,
    getTrueContours,
}
