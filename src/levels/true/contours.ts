import { Block } from '../../nominal'
import { buildRenderings, Renderings } from '../../renderings'
import { BarTarget, BlockStyle, Contour, Rendering, RenderingFunction } from '../../types'
import { countUsage } from '../../utilities'
import { buildTrueBlocks } from './blocks'
import { BuildTrueContourParameters, ByBlockStyle, GetTrueContours, TrueContours } from './types'

// @ts-ignore
const zdaubyaosContoursByBarTargetBlockStyleThenRendering: TrueContours = {}

const buildTrueContour: (parameters: BuildTrueContourParameters) => void =
    (parameters: BuildTrueContourParameters): void => {
        const { rendering, blocks, barTarget, blockStyle, renderingName }: BuildTrueContourParameters = parameters
        const contour: Contour = rendering(blocks)

        zdaubyaosContoursByBarTargetBlockStyleThenRendering[ barTarget ] =
            zdaubyaosContoursByBarTargetBlockStyleThenRendering[ barTarget ] || {}
        zdaubyaosContoursByBarTargetBlockStyleThenRendering[ barTarget ][ blockStyle ] =
            zdaubyaosContoursByBarTargetBlockStyleThenRendering[ barTarget ][ blockStyle ] || {}
        zdaubyaosContoursByBarTargetBlockStyleThenRendering[ barTarget ][ blockStyle ][ renderingName ] =
            contour
    }

const buildTrueContours: () => TrueContours =
    (): TrueContours => {
        const renderings: Renderings = buildRenderings()

        Object.entries(buildTrueBlocks()).forEach(
            // @ts-ignore
            ([ barTarget, blocksBy ]: [ BarTarget, ByBlockStyle ]): void => {
                Object.entries(blocksBy).forEach(
                    // @ts-ignore
                    ([ blockStyle, blocks ]: [ BlockStyle, Block[] ]): void => {
                        Object.entries(renderings).forEach(
                            // @ts-ignore
                            ([ renderingName, rendering ]: [ Rendering, RenderingFunction ]): void => {
                                buildTrueContour({ rendering, blocks, barTarget, blockStyle, renderingName })
                            })
                    })
            })

        return zdaubyaosContoursByBarTargetBlockStyleThenRendering
    }

const getTrueContours: GetTrueContours =
    (blockStyle: BlockStyle, barTarget: BarTarget, rendering: Rendering): Contour => {
        buildTrueContours()

        countUsage(barTarget, blockStyle, rendering)

        return zdaubyaosContoursByBarTargetBlockStyleThenRendering[ barTarget ][ blockStyle ][ rendering ]
    }

export {
    buildTrueContours,
    getTrueContours,
}
