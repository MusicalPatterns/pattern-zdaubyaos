import { Count } from '@musical-patterns/shared'
import { RenderingName } from '../custom'
import { BarTarget, BlockStyle } from '../types'

type UsageCount = Count

type UsageCountByRendering = { [z in RenderingName]?: UsageCount }

type UsageGrouping = { [x in BarTarget]: { [y in BlockStyle]?: UsageCountByRendering } }

export {
    UsageCount,
    UsageCountByRendering,
    UsageGrouping,
}
