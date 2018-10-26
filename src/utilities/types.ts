import { Count } from '../../../../src'
import { BarTarget, BlockStyle, Rendering } from '../types'

type UsageCount = Count

type UsageCountByRendering = { [z in Rendering]?: UsageCount }

type UsageGrouping = { [x in BarTarget]: { [y in BlockStyle]?: UsageCountByRendering } }

export {
    UsageCount,
    UsageCountByRendering,
    UsageGrouping,
}
