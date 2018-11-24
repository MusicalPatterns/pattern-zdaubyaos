import { apply, Maybe, to } from '@musical-patterns/utilities'
import { RenderingName } from '../custom'
import { BarTarget, BlockStyle } from '../types'
import { UsageCount, UsageCountByRendering, UsageGrouping } from './types'

const zdaubyaosContourUsages: UsageGrouping = {
    [ BarTarget.FIFTEEN ]: {},
    [ BarTarget.TWENTYFOUR ]: {},
}

const countUsage: (barTarget: BarTarget, blockStyle: BlockStyle, renderingName: RenderingName) => void =
    (barTarget: BarTarget, blockStyle: BlockStyle, renderingName: RenderingName): void => {

        zdaubyaosContourUsages[ barTarget ][ blockStyle ] =
            zdaubyaosContourUsages[ barTarget ][ blockStyle ] || {}

        const byBlockStyle: Maybe<UsageCountByRendering> =
            zdaubyaosContourUsages[ barTarget ][ blockStyle ]

        if (byBlockStyle !== undefined) {
            let byRenderingName: Maybe<UsageCount> = byBlockStyle[ renderingName ]
            if (byRenderingName !== undefined) {
                byRenderingName = apply.Offset(byRenderingName, to.Offset(1))
                byBlockStyle[ renderingName ] = byRenderingName
            }
            else {
                byBlockStyle[ renderingName ] = to.Count(1)
            }
        }
    }

export {
    countUsage,
    zdaubyaosContourUsages,
}
