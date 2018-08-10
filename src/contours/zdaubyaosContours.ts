import sequence from '../../../../src/utilities/sequence'
import { zdaubGlisVariantBlocks, zdaubyaosBlocksByBarTargetThenBlockStyle } from '../blocks/zdaubyaosBlocks'
import renderings from '../renderings/renderings'
import { BarTarget, Blocks, BlockStyle, Contour, Rendering, RenderingFunction } from '../types'
import { Block } from '../utilities/nominalTypes'
import { countUsage } from '../utilities/zdaubyaosContourUsage'

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
                Object.entries(renderings).forEach(
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

const zdaubGlisVariantContour: Contour = renderings[Rendering.GLIS](zdaubGlisVariantBlocks)

const inaiiiVarietyContour: Contour = sequence(
    zdaubyaosBlocksByBarTargetThenBlockStyle[BarTarget.TWENTYFOUR][BlockStyle.INAI].map(
        (block: Block, index: number): Contour =>
            [
                renderings[Rendering.SPRING],
                renderings[Rendering.SUMMER],
                renderings[Rendering.SPRING],
                renderings[Rendering.SUMMER],
                renderings[Rendering.SPRING],
                renderings[Rendering.SUMMER],
                renderings[Rendering.FALL],
                renderings[Rendering.FALL],
            ][index]([block])),
)

type GetZdaubyaosContours = (
    blockStyle: BlockStyle,
    barTarget: BarTarget,
    rendering: Rendering,
) => Contour

const getZdaubyaosContours: GetZdaubyaosContours =
    (blockStyle: BlockStyle, barTarget: BarTarget, rendering: Rendering): Contour => {
        countUsage(barTarget, blockStyle, rendering)

        return zdaubyaosContoursByBarTargetBlockStyleThenRendering[barTarget][blockStyle][rendering]
    }

export {
    zdaubyaosContoursByBarTargetBlockStyleThenRendering,
    zdaubGlisVariantContour,
    inaiiiVarietyContour,
    getZdaubyaosContours,
}
