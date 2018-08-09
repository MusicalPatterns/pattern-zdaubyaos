import sequence from '../../../../src/utilities/sequence'
import { yaosBlocksByBarDurationThenBlockStyle } from '../blocks/yaosBlocks'
import yaosRenderings from '../renderings/yaosRenderings'
import { Blocks, Contour, RenderingFunction } from '../types'
import { Block } from '../utilities/nominalTypes'
import { BarDuration, YaosBlockStyle, YaosRendering } from '../zdaubyaosTypes'

const inaiiiVarietyContour: Contour = sequence(
    yaosBlocksByBarDurationThenBlockStyle[BarDuration.TWENTYFOUR][YaosBlockStyle.INAI].map(
        (block: Block, index: number): Contour =>
            [
                yaosRenderings[YaosRendering.SPRING],
                yaosRenderings[YaosRendering.SUMMER],
                yaosRenderings[YaosRendering.SPRING],
                yaosRenderings[YaosRendering.SUMMER],
                yaosRenderings[YaosRendering.SPRING],
                yaosRenderings[YaosRendering.SUMMER],
                yaosRenderings[YaosRendering.FALL],
                yaosRenderings[YaosRendering.FALL],
            ][index]([block])),
)

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
    inaiiiVarietyContour,
    yaosContoursByBarDurationBlockStyleThenRendering,
}
