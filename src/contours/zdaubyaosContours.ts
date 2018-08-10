import sequence from '../../../../src/utilities/sequence'
import { zdaubGlisVariantBlocks, zdaubyaosBlocksByBarTargetThenBlockStyle } from '../blocks/zdaubyaosBlocks'
import zdaubyaosRenderings from '../renderings/zdaubyaosRenderings'
import { Blocks, Contour, RenderingFunction } from '../types'
import { Block } from '../utilities/nominalTypes'
import { BarTarget, BlockStyle, Rendering } from '../zdaubyaosTypes'

type ByRendering = { [z in Rendering]: Contour }
type ByBlockStyle = { [y in BlockStyle]: ByRendering }
type ZdaubyaosContours = { [x in BarTarget]: ByBlockStyle }

// @ts-ignore
const zdaubyaosContoursByBarTargetBlockStyleThenRendering: ZdaubyaosContours = {}

Object.entries(zdaubyaosBlocksByBarTargetThenBlockStyle).forEach(
// @ts-ignore
    ([barTarget, blocksBy]: [BarTarget, ByBlockStyle]): void => {
        Object.entries(blocksBy).forEach(
            // @ts-ignore
            ([blockStyle, blocks]: [BlockStyle, Blocks]): void => {
                Object.entries(zdaubyaosRenderings).forEach(
                    // @ts-ignore
                    ([renderingName, rendering]: [Rendering, RenderingFunction]): void => {
                        const contour: Contour = rendering(blocks)

                        zdaubyaosContoursByBarTargetBlockStyleThenRendering[barTarget] =
                            zdaubyaosContoursByBarTargetBlockStyleThenRendering[barTarget] || {}
                        zdaubyaosContoursByBarTargetBlockStyleThenRendering[barTarget][blockStyle] =
                            zdaubyaosContoursByBarTargetBlockStyleThenRendering[barTarget][blockStyle] || {}
                        zdaubyaosContoursByBarTargetBlockStyleThenRendering[barTarget][blockStyle][renderingName] =
                            contour
                    })
            })
    })

const zdaubGlisVariantContour: Contour = zdaubyaosRenderings[Rendering.GLIS](zdaubGlisVariantBlocks)

const inaiiiVarietyContour: Contour = sequence(
    zdaubyaosBlocksByBarTargetThenBlockStyle[BarTarget.TWENTYFOUR][BlockStyle.INAI].map(
        (block: Block, index: number): Contour =>
            [
                zdaubyaosRenderings[Rendering.SPRING],
                zdaubyaosRenderings[Rendering.SUMMER],
                zdaubyaosRenderings[Rendering.SPRING],
                zdaubyaosRenderings[Rendering.SUMMER],
                zdaubyaosRenderings[Rendering.SPRING],
                zdaubyaosRenderings[Rendering.SUMMER],
                zdaubyaosRenderings[Rendering.FALL],
                zdaubyaosRenderings[Rendering.FALL],
            ][index]([block])),
)

export {
    zdaubyaosContoursByBarTargetBlockStyleThenRendering,
    zdaubGlisVariantContour,
    inaiiiVarietyContour,
}
