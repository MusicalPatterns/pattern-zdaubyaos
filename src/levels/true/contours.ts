import { sequence } from '../../../../../src'
import { Block } from '../../nominal'
import { renderings } from '../../renderings'
import { BarTarget, BlockStyle, Contour, Rendering, RenderingFunction } from '../../types'
import { countUsage } from '../../utilities'
import { trueBlocksByBarTargetThenBlockStyle, trueGlisVariantBlocks } from './blocks'
import { ByBlockStyle, GetZdaubyaosContours, ZdaubyaosContours } from './types'

// @ts-ignore
const zdaubyaosContoursByBarTargetBlockStyleThenRendering: ZdaubyaosContours = {}

Object.entries(trueBlocksByBarTargetThenBlockStyle).forEach(
// @ts-ignore
    ([ barTarget, blocksBy ]: [BarTarget, ByBlockStyle]): void => {
        Object.entries(blocksBy).forEach(
            // @ts-ignore
            ([ blockStyle, blocks ]: [BlockStyle, Block[]]): void => {
                Object.entries(renderings).forEach(
                    // @ts-ignore
                    ([ renderingName, rendering ]: [Rendering, RenderingFunction]): void => {
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

const zdaubGlisVariantContour: Contour = renderings[Rendering.GLIS](trueGlisVariantBlocks)

const inaiiiVarietyContour: Contour = sequence(
    trueBlocksByBarTargetThenBlockStyle[BarTarget.TWENTYFOUR][BlockStyle.INAI].map(
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
            ][index]([ block ])),
)

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
