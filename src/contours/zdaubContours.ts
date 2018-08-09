import { zdaubBlocksByBarDurationThenBlockStyle, zdaubGlisVariantBlocks } from '../blocks/zdaubBlocks'
import zdaubRenderings from '../renderings/zdaubRenderings'
import { Blocks, Contour, RenderingFunction } from '../types'
import { BarDuration, ZdaubBlockStyle, ZdaubRendering } from '../zdaubyaosTypes'

const zdaubGlisVariantContour: Contour = zdaubRenderings[ZdaubRendering.GLIS](zdaubGlisVariantBlocks)

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
            ([blocksName, blocks]: [ZdaubBlockStyle, Blocks]): void => {
                Object.entries(zdaubRenderings).forEach(
                    // @ts-ignore
                    ([renderingName, rendering]: [ZdaubRendering, RenderingFunction]): void => {
                        const contour: Contour = rendering(blocks)

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
    zdaubGlisVariantContour,
}
