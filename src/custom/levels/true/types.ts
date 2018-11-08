import { Block } from '../../../../../../src'
import { ContourPiece, ContourWhole } from '../../../nominal'
import { BarTarget, BlockStyle } from '../../../types'
import { Rendering, RenderingName } from '../../renderings'

type ByRenderingName = { [z in RenderingName]: ContourPiece }
type ByBlockStyle = { [y in BlockStyle]: ByRenderingName }
type TrueContourPieces = { [x in BarTarget]: ByBlockStyle }

type GetTrueContourPieces = (
    blockStyle: BlockStyle,
    barTarget: BarTarget,
    renderingName: RenderingName,
) => ContourPiece

type FormulaicTrueYaosContourWhole = (
    fifteenRenderingName: RenderingName,
    twentyfourRenderingName: RenderingName,
) => ContourWhole

type TrueBlocks = { [x in BarTarget]: { [y in BlockStyle]: Block } }

interface BuildTrueContourPieceParameters {
    barTarget: BarTarget,
    block: Block,
    blockStyle: BlockStyle,
    rendering: Rendering,
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
