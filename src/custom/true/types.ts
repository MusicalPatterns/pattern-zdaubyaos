import { Rendering, StandardContour } from '@musical-patterns/pattern'
import { Block, ContourPiece, ContourWhole } from '@musical-patterns/utilities'
import { RenderingName } from '../../material'
import { BarTarget, BlockStyle } from '../../types'

type ByRenderingName = { [z in RenderingName]: ContourPiece<2> }
type ByBlockStyle = { [y in BlockStyle]: ByRenderingName }
type TrueContourPieces = { [x in BarTarget]: ByBlockStyle }

type GetTrueContourPieces = (
    blockStyle: BlockStyle,
    barTarget: BarTarget,
    renderingName: RenderingName,
) => ContourPiece<2>

type FormulaicTrueYaosContourWhole = (
    fifteenRenderingName: RenderingName,
    twentyfourRenderingName: RenderingName,
) => ContourWhole<2>

type TrueBlocks = { [x in BarTarget]: { [y in BlockStyle]: Block } }

interface BuildTrueContourPieceParameters {
    barTarget: BarTarget,
    block: Block,
    blockStyle: BlockStyle,
    rendering: Rendering<StandardContour>,
    renderingName: RenderingName,
}

export {
    ByBlockStyle,
    ByRenderingName,
    TrueContourPieces,
    GetTrueContourPieces,
    FormulaicTrueYaosContourWhole,
    TrueBlocks,
    BuildTrueContourPieceParameters,
}
