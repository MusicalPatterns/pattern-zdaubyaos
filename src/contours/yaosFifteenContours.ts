import yaosFifteenBlocks from '../blocks/yaosFifteenBlocks'
import render from '../render'
import renderings from '../renderings'
import { Blocks, Contour, Rendering } from '../types'

const yaosFifteenContoursByBlocksThenRendering: { [index: string]: { [index: string]: Contour } } = {}

Object.entries(yaosFifteenBlocks).forEach(([blocksName, blocks]: [string, Blocks]): void => {
    Object.entries(renderings).forEach(([renderingName, rendering]: [string, Rendering]): void => {
        const contour: Contour = render(blocks, rendering)

        yaosFifteenContoursByBlocksThenRendering[blocksName] =
            yaosFifteenContoursByBlocksThenRendering[blocksName] || {}
        yaosFifteenContoursByBlocksThenRendering[blocksName][renderingName] = contour
    })
})

export {
    yaosFifteenContoursByBlocksThenRendering,
}
