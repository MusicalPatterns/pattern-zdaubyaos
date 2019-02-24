import { Cardinal } from '@musical-patterns/utilities'
import { RenderingName } from '../renderings'
import { BarTarget, BlockStyle } from '../types'

type UsageCount = Cardinal

type UsageCountByRendering = { [z in RenderingName]?: UsageCount }

type UsageGrouping = { [x in BarTarget]: { [y in BlockStyle]?: UsageCountByRendering } }

export {
    UsageCount,
    UsageCountByRendering,
    UsageGrouping,
}
