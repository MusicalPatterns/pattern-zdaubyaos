import applyOffset from '../../../../src/utilities/applyOffset'
import { Count } from '../../../../src/utilities/nominalTypes'
import * as to from '../../../../src/utilities/to'
import { Maybe } from '../../../../src/utilities/types'
import { BarTarget, BlockStyle, Rendering } from '../types'

type UsageCount = Count

type UsageCountByRendering = { [z in Rendering]?: UsageCount }

type UsageGrouping = { [x in BarTarget]: { [y in BlockStyle]?: UsageCountByRendering } }

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
