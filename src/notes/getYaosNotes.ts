import { BLOCKS_BY_STRATEGY_THEN_RESOLUTION } from '../constants'
import { BarDuration, BlockResolution, BlockStrategy, BlockStyle, Notes, Rendering } from '../types'
import { yaosNotesByDurationBlocksThenRendering } from './yaosNotes'

type UsageCount = number

type UsageGrouping = {
    [x in BarDuration]: {[y in BlockStyle]?: UsageCountByRendering}
}

type UsageCountByRendering = {[z in Rendering]?: UsageCount}

export const yaosNoteUsagesByDurationBlocksThenRendering: UsageGrouping = {
    fifteen: {},
    twentyfour: {},
}

type GetYaosNotes = (
    blockResolution: BlockResolution,
    blockStrategy: BlockStrategy,
    barDuration: BarDuration,
    rendering: Rendering,
) => Notes

const getYaosNotes: GetYaosNotes =
    (
        blockResolution: BlockResolution,
        blockStrategy: BlockStrategy,
        barDuration: BarDuration,
        rendering: Rendering,
    ): Notes => {
        const blockStyle: BlockStyle = BLOCKS_BY_STRATEGY_THEN_RESOLUTION[blockStrategy][blockResolution]

        yaosNoteUsagesByDurationBlocksThenRendering[barDuration][blockStyle] =
            yaosNoteUsagesByDurationBlocksThenRendering[barDuration][blockStyle] || {}
        const byBlockStyle: UsageCountByRendering | undefined =
            yaosNoteUsagesByDurationBlocksThenRendering[barDuration][blockStyle]
        if (byBlockStyle !== undefined) {
            let byRendering: UsageCount | undefined = byBlockStyle[rendering]
            if (byRendering !== undefined) {
                byRendering += 1
                byBlockStyle[rendering] = byRendering
            } else {
                byBlockStyle[rendering] = 1
            }
        }

        return yaosNotesByDurationBlocksThenRendering[barDuration][blockStyle][rendering]
    }

export default getYaosNotes
