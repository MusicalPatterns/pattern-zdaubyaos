import { BarTarget, BlockStyle, Contour, Part, Rendering } from '../../types'

type ByRendering = { [z in Rendering]: Contour }
type ByBlockStyle = { [y in BlockStyle]: ByRendering }
type ZdaubyaosContours = { [x in BarTarget]: ByBlockStyle }

type GetZdaubyaosContours = (
    blockStyle: BlockStyle,
    barTarget: BarTarget,
    rendering: Rendering,
) => Contour

type FormulaicTrueYaosPart = (fifteenRendering: Rendering, twentyfourRendering: Rendering) => Part

export {
    ByBlockStyle,
    ByRendering,
    ZdaubyaosContours,
    GetZdaubyaosContours,
    FormulaicTrueYaosPart,
}
