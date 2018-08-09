import { yaosBlocksByBarDurationThenBlockStyle } from '../blocks/yaosBlocks'
import yaosRenderings from '../renderings/yaosRenderings'
import { Blocks, Contour, RenderingFunction } from '../types'
import * as to from '../utilities/to'
import { BarDuration, YaosBlockStyle, YaosRendering } from '../zdaubyaosTypes'

const inaiiiVariety: Contour = to.Contour([
    [0, 1], [2, 1], [3, 1],
    [1, 1], [0, 1], [3, 1],
    [0, 1], [2, 1], [3, 1],
    [1, 1], [0, 1], [3, 1],
    [0, 1], [2, 1], [3, 1],
    [1, 1], [0, 1], [3, 1],
    [1, 1], [2, 2],
    [1, 1], [2, 2],
])

type ByRendering = { [z in YaosRendering]: Contour }
type ByBlockStyle = { [y in YaosBlockStyle]: ByRendering }
type YaosContours = { [x in BarDuration]: ByBlockStyle }

// @ts-ignore
const yaosContoursByBarDurationBlockStyleThenRendering: YaosContours = {}

Object.entries(yaosBlocksByBarDurationThenBlockStyle).forEach(
// @ts-ignore
    ([barDuration, blocksBy]: [BarDuration, ByBlockStyle]): void => {
        Object.entries(blocksBy).forEach(
            // @ts-ignore
            ([blocksName, blocks]: [YaosBlockStyle, Blocks]): void => {
                Object.entries(yaosRenderings).forEach(
                    // @ts-ignore
                    ([renderingName, rendering]: [YaosRendering, RenderingFunction]): void => {
                        const contour: Contour = rendering(blocks)

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
