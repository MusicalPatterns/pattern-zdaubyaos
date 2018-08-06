import yaosFifteenBlocks from '../blocks/yaosFifteenBlocks'
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

interface ContoursPackage { [index: string]: { [index: string]: { [index: string]: Contour } } }

const yaosContoursByDurationBlocksThenRendering: ContoursPackage = {
    fifteen: {},
    twentyfour: {},
}

Object.entries(yaosFifteenBlocks).forEach(([blocksName, blocks]: [string, Blocks]): void => {
    Object.entries(renderings).forEach(([renderingName, rendering]: [string, Rendering]): void => {
        const contour: Contour = render(blocks, rendering)

        yaosContoursByDurationBlocksThenRendering.fifteen[blocksName] =
            yaosContoursByDurationBlocksThenRendering.fifteen[blocksName] || {}
        yaosContoursByDurationBlocksThenRendering.fifteen[blocksName][renderingName] = contour
    })
})

Object.entries(yaosTwentyfourBlocks).forEach(([blocksName, blocks]: [string, Blocks]): void => {
    Object.entries(renderings).forEach(([renderingName, rendering]: [string, Rendering]): void => {
        const contour: Contour = render(blocks, rendering)

        yaosContoursByDurationBlocksThenRendering.twentyfour[blocksName] =
            yaosContoursByDurationBlocksThenRendering.twentyfour[blocksName] || {}
        yaosContoursByDurationBlocksThenRendering.twentyfour[blocksName][renderingName] = contour
    })
})

export {
    inaiiiVariety,
    yaosContoursByDurationBlocksThenRendering,
}
