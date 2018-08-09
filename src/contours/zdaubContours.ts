import {
    BarDuration,
    Contour,
    ZdaubRendering,
    ZdaubBlockStyle,
    YaosBlockStyle,
    Blocks,
    YaosRendering,
    RenderingFunction
} from '../types'
import { zdaubBlocksByBarDurationThenBlockStyle } from '../blocks/zdaubBlocks'
import renderings from '../renderings'
import render from '../render'

type ByRendering = { [z in ZdaubRendering]: Contour }
type ByBlockStyle = { [y in ZdaubBlockStyle]: ByRendering }
type ZdaubContours = { [x in BarDuration]: ByBlockStyle }

// @ts-ignore
const zdaubContoursByBarDurationBlockStyleThenRendering: ZdaubContours = {}

Object.entries(zdaubBlocksByBarDurationThenBlockStyle).forEach(
// @ts-ignore
    ([barDuration, blocksBy]: [BarDuration, ByBlockStyle]): void => {
        Object.entries(blocksBy).forEach(
            // @ts-ignore
            ([blocksName, blocks]: [YaosBlockStyle, Blocks]): void => {
                Object.entries(renderings).forEach(
                    // @ts-ignore
                    ([renderingName, rendering]: [YaosRendering, RenderingFunction]): void => {
                        const contour: Contour = render(blocks, rendering)

                        zdaubContoursByBarDurationBlockStyleThenRendering[barDuration] =
                            zdaubContoursByBarDurationBlockStyleThenRendering[barDuration] || {}
                        zdaubContoursByBarDurationBlockStyleThenRendering[barDuration][blocksName] =
                            zdaubContoursByBarDurationBlockStyleThenRendering[barDuration][blocksName] || {}
                        zdaubContoursByBarDurationBlockStyleThenRendering[barDuration][blocksName][renderingName] =
                            contour
                    })
            })
    })


export {
    zdaubContoursByBarDurationBlockStyleThenRendering,
}
