import { yaosBlocksByBarDurationThenBlockStyle } from '../blocks/yaosBlocks'
import render from '../render'
import renderings from '../renderings'
import { Blocks, Contour, RenderingFunction, BarDuration, BlockStyle, Rendering } from '../types'

const inaiiiVariety: number[][] = [
    [0, 1], [2, 1], [3, 1],
    [1, 1], [0, 1], [3, 1],
    [0, 1], [2, 1], [3, 1],
    [1, 1], [0, 1], [3, 1],
    [0, 1], [2, 1], [3, 1],
    [1, 1], [0, 1], [3, 1],
    [1, 1], [2, 2],
    [1, 1], [2, 2],
]

type ByRendering = { [z in Rendering]: Contour }
type ByBlockStyle = { [y in BlockStyle]: ByRendering }
type YaosContours = { [x in BarDuration]: ByBlockStyle }

// @ts-ignore
const yaosContoursByBarDurationBlockStyleThenRendering: YaosContours = {}

// @ts-ignore
Object.entries(yaosBlocksByBarDurationThenBlockStyle).forEach(([barDuration, blocksBy]: [BarDuration, ByBlockStyle]): void => {
    // @ts-ignore
    Object.entries(blocksBy).forEach(([blocksName, blocks]: [BlockStyle, Blocks]): void => {
        // @ts-ignore
        Object.entries(renderings).forEach(([renderingName, rendering]: [Rendering, RenderingFunction]): void => {
            const contour: Contour = render(blocks, rendering)

            yaosContoursByBarDurationBlockStyleThenRendering[barDuration] =
                yaosContoursByBarDurationBlockStyleThenRendering[barDuration] || {}
            yaosContoursByBarDurationBlockStyleThenRendering[barDuration][blocksName] =
                yaosContoursByBarDurationBlockStyleThenRendering[barDuration][blocksName] || {}
            yaosContoursByBarDurationBlockStyleThenRendering[barDuration][blocksName][renderingName] = contour
        })

    })
})

export {
    inaiiiVariety,
    yaosContoursByBarDurationBlockStyleThenRendering,
}
