import { apply, INCREMENT, Maybe, to } from '@musical-patterns/utilities'
import { RenderingName } from '../material'
import { BarTarget, BlockStyle } from '../types'
import { UsageCount, UsageCountByRendering, UsageGrouping } from './types'

const contourUsages: UsageGrouping = {
    [ BarTarget.FIFTEEN ]: {},
    [ BarTarget.TWENTYFOUR ]: {},
}

const countUsage: (barTarget: BarTarget, blockStyle: BlockStyle, renderingName: RenderingName) => void =
    (barTarget: BarTarget, blockStyle: BlockStyle, renderingName: RenderingName): void => {

        contourUsages[ barTarget ][ blockStyle ] =
            contourUsages[ barTarget ][ blockStyle ] || {}

        const byBlockStyle: Maybe<UsageCountByRendering> =
            contourUsages[ barTarget ][ blockStyle ]

        if (byBlockStyle !== undefined) {
            let byRenderingName: Maybe<UsageCount> = byBlockStyle[ renderingName ]
            if (byRenderingName !== undefined) {
                byRenderingName = apply.Translation(byRenderingName, INCREMENT)
                byBlockStyle[ renderingName ] = byRenderingName
            }
            else {
                byBlockStyle[ renderingName ] = to.Cardinal(1)
            }
        }
    }

export {
    countUsage,
    contourUsages,
}
