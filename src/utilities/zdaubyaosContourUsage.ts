import { applyOffset, Maybe, to } from '../../../../src'
import { BarTarget, BlockStyle, Rendering } from '../types'
import { UsageCount, UsageCountByRendering, UsageGrouping } from './types'

const zdaubyaosContourUsages: UsageGrouping = {
    [BarTarget.FIFTEEN]: {},
    [BarTarget.TWENTYFOUR]: {},
}

const countUsage: (barTarget: BarTarget, blockStyle: BlockStyle, rendering: Rendering) => void =
    (barTarget: BarTarget, blockStyle: BlockStyle, rendering: Rendering): void => {

        zdaubyaosContourUsages[barTarget][blockStyle] =
            zdaubyaosContourUsages[barTarget][blockStyle] || {}

        const byBlockStyle: Maybe<UsageCountByRendering> =
            zdaubyaosContourUsages[barTarget][blockStyle]

        if (byBlockStyle !== undefined) {
            let byRendering: Maybe<UsageCount> = byBlockStyle[rendering]
            if (byRendering !== undefined) {
                byRendering = applyOffset(byRendering, to.Offset(1))
                byBlockStyle[rendering] = byRendering
            }
            else {
                byBlockStyle[rendering] = to.Count(1)
            }
        }
    }

export {
    countUsage,
    zdaubyaosContourUsages,
}
