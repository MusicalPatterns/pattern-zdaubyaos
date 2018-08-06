import yaosFifteenBlocks from '../blocks/yaosFifteenBlocks'
import render from '../render'
import renderings from '../renderings'
import { Blocks, Contour, Rendering } from '../types'

const contoursByRenderingThenBlocks: { [index: string]: {[index: string]: Contour} } = {}
const contoursByBlocksThenRendering: { [index: string]: {[index: string]: Contour} } = {}

Object.entries(yaosFifteenBlocks).forEach(([blocksName, blocks]: [string, Blocks]): void => {
    Object.entries(renderings).forEach(([renderingName, rendering]: [string, Rendering]): void => {
        const contour: Contour = render(blocks, rendering)

        contoursByRenderingThenBlocks[renderingName] = contoursByRenderingThenBlocks[renderingName] || {}
        contoursByRenderingThenBlocks[renderingName][blocksName] = contour

        contoursByBlocksThenRendering[blocksName] = contoursByBlocksThenRendering[blocksName] || {}
        contoursByBlocksThenRendering[blocksName][renderingName] = contour
    })
})

export {
    contoursByRenderingThenBlocks,
    contoursByBlocksThenRendering,
}
