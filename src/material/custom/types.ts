import { Cardinal } from '@musical-patterns/utilities'
import { RenderingName } from '../rendering'
import { BarTarget, BlockStyle } from '../types'

type UsageCount = Cardinal

type UsageCountByRendering = { [Index in RenderingName]?: UsageCount }

type UsageCountByBlockStyle = { [Index in BlockStyle]?: UsageCountByRendering }

type UsageGrouping = { [Index in BarTarget]: UsageCountByBlockStyle }

export {
    UsageCount,
    UsageCountByRendering,
    UsageGrouping,
}
