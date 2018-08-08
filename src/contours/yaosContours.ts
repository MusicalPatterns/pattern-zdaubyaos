import { yaosBlocksByBarDurationThenBlockStyle } from '../blocks/yaosBlocks'
import render from '../render'
import renderings from '../renderings'
import { BarDuration, Blocks, BlockStyle, Contour, ManualContour, Rendering, RenderingFunction } from '../types'
import * as to from '../utilities/to'

const inaiiiVariety: ManualContour = to.ManualContour([
    [0, 1], [2, 1], [3, 1],
    [1, 1], [0, 1], [3, 1],
    [0, 1], [2, 1], [3, 1],
    [1, 1], [0, 1], [3, 1],
    [0, 1], [2, 1], [3, 1],
    [1, 1], [0, 1], [3, 1],
    [1, 1], [2, 2],
    [1, 1], [2, 2],
])

type ByRendering = { [z in Rendering]: Contour }
type ByBlockStyle = { [y in BlockStyle]: ByRendering }
type YaosContours = { [x in BarDuration]: ByBlockStyle }

// @ts-ignore
const yaosContoursByBarDurationBlockStyleThenRendering: YaosContours = {}

Object.entries(yaosBlocksByBarDurationThenBlockStyle).forEach(
// @ts-ignore
    ([barDuration, blocksBy]: [BarDuration, ByBlockStyle]): void => {
        Object.entries(blocksBy).forEach(
            // @ts-ignore
            ([blocksName, blocks]: [BlockStyle, Blocks]): void => {
                Object.entries(renderings).forEach(
                    // @ts-ignore
                    ([renderingName, rendering]: [Rendering, RenderingFunction]): void => {
                        const contour: Contour = render(blocks, rendering)

                        yaosContoursByBarDurationBlockStyleThenRendering[barDuration] =
                            yaosContoursByBarDurationBlockStyleThenRendering[barDuration] || {}
                        yaosContoursByBarDurationBlockStyleThenRendering[barDuration][blocksName] =
                            yaosContoursByBarDurationBlockStyleThenRendering[barDuration][blocksName] || {}
                        yaosContoursByBarDurationBlockStyleThenRendering[barDuration][blocksName][renderingName] =
                            contour
                    })
            })
    })

export {
    inaiiiVariety,
    yaosContoursByBarDurationBlockStyleThenRendering,
}
