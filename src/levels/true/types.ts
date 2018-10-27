import { Block } from '../../nominal'
import { BarTarget, BlockStyle, Contour, Part, Rendering, RenderingFunction } from '../../types'

type ByRendering = { [z in Rendering]: Contour }
type ByBlockStyle = { [y in BlockStyle]: ByRendering }
type TrueContours = { [x in BarTarget]: ByBlockStyle }

type GetTrueContours = (
    blockStyle: BlockStyle,
    barTarget: BarTarget,
    rendering: Rendering,
) => Contour

type FormulaicTrueYaosPart = (fifteenRendering: Rendering, twentyfourRendering: Rendering) => Part

type TrueBlocks = { [x in BarTarget]: { [y in BlockStyle]: Block[] } }

interface BuildTrueContourParameters {
    barTarget: BarTarget,
    blocks: Block[],
    blockStyle: BlockStyle,
    rendering: RenderingFunction,
    renderingName: Rendering,
}

export {
    ByBlockStyle,
    ByRendering,
    TrueContours,
    GetTrueContours,
    FormulaicTrueYaosPart,
    TrueBlocks,
    BuildTrueContourParameters,
}
