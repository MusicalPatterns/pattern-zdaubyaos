import yaosTwentyfourBlocks from '../blocks/yaosTwentyfourBlocks'
import render from '../render'
import renderings from '../renderings'
import { Blocks, Contour, Rendering } from '../types'

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

const yaosTwentyfourContoursByBlocksThenRendering: { [index: string]: { [index: string]: Contour } } = {}

Object.entries(yaosTwentyfourBlocks).forEach(([blocksName, blocks]: [string, Blocks]): void => {
    Object.entries(renderings).forEach(([renderingName, rendering]: [string, Rendering]): void => {
        const contour: Contour = render(blocks, rendering)

        yaosTwentyfourContoursByBlocksThenRendering[blocksName] =
            yaosTwentyfourContoursByBlocksThenRendering[blocksName] || {}
        yaosTwentyfourContoursByBlocksThenRendering[blocksName][renderingName] = contour
    })
})

export {
    inaiiiVariety,
    yaosTwentyfourContoursByBlocksThenRendering,
}
