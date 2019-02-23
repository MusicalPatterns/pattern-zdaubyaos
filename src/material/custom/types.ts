import { Cardinal } from '@musical-patterns/utilities'
import { BarTarget, BlockStyle } from '../../types'
import { RenderingName } from '../renderings'

type UsageCount = Cardinal

type UsageCountByRendering = { [z in RenderingName]?: UsageCount }

type UsageGrouping = { [x in BarTarget]: { [y in BlockStyle]?: UsageCountByRendering } }

export {
    UsageCount,
    UsageCountByRendering,
    UsageGrouping,
}
