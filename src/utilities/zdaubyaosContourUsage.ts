import { BarTarget, BlockStyle, Rendering } from '../types'

type UsageCount = number

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

        const byBlockStyle: UsageCountByRendering | undefined =
            zdaubyaosContourUsages[barTarget][blockStyle]

        if (byBlockStyle !== undefined) {
            let byRendering: UsageCount | undefined = byBlockStyle[rendering]
            if (byRendering !== undefined) {
                byRendering += 1
                byBlockStyle[rendering] = byRendering
            } else {
                byBlockStyle[rendering] = 1
            }
        }
    }

export {
    countUsage,
    zdaubyaosContourUsages,
}
