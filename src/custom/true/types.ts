import { PitchDuration, Rendering } from '@musical-patterns/pattern'
import { Block, ContourPiece, ContourWhole } from '@musical-patterns/utilities'
import { RenderingName } from '../../material'
import { BarTarget, BlockStyle } from '../../types'

type TrueContourPiecesByRenderingName = { [z in RenderingName]: ContourPiece<2> }
type TrueContourPeicesByBlockStyleThenRenderingName = { [y in BlockStyle]: TrueContourPiecesByRenderingName }
type TrueContourPiecesByBarTargetThenBlockStyleThenRenderingName =
    { [x in BarTarget]: TrueContourPeicesByBlockStyleThenRenderingName }

type GetTrueContourPieces = (
    blockStyle: BlockStyle,
    barTarget: BarTarget,
    renderingName: RenderingName,
) => ContourPiece<2>

type FormulaicTrueYaosContourWhole = (
    fifteenRenderingName: RenderingName,
    twentyfourRenderingName: RenderingName,
) => ContourWhole<2>

type TrueBlocksByBlockStyle = { [y in BlockStyle]: Block }
type TrueBlocksByBarTargetThenBlockStyle = { [x in BarTarget]: TrueBlocksByBlockStyle }

interface BuildTrueContourPieceParameters {
    barTarget: BarTarget,
    block: Block,
    blockStyle: BlockStyle,
    rendering: Rendering<PitchDuration>,
    renderingName: RenderingName,
}

export {
    TrueContourPeicesByBlockStyleThenRenderingName,
    TrueContourPiecesByRenderingName,
    TrueContourPiecesByBarTargetThenBlockStyleThenRenderingName,
    GetTrueContourPieces,
    FormulaicTrueYaosContourWhole,
    TrueBlocksByBlockStyle,
    TrueBlocksByBarTargetThenBlockStyle,
    BuildTrueContourPieceParameters,
}
