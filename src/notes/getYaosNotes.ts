import { YAOS_BLOCK_STYLES_BY_STRATEGY_THEN_RESOLUTION } from '../constants'
import { BarDuration, YaosBlockResolution, YaosBlockStrategy, YaosBlockStyle, Notes, YaosRendering } from '../types'
import { yaosNotesByBarDurationBlockStyleThenRendering } from './yaosNotes'

type UsageCount = number

type UsageGrouping = {
    [x in BarDuration]: {[y in YaosBlockStyle]?: UsageCountByRendering}
}

type UsageCountByRendering = {[z in YaosRendering]?: UsageCount}

export const yaosNoteUsagesByDurationBlocksThenRendering: UsageGrouping = {
    fifteen: {},
    twentyfour: {},
}

type GetYaosNotes = (
    blockResolution: YaosBlockResolution,
    blockStrategy: YaosBlockStrategy,
    barDuration: BarDuration,
    rendering: YaosRendering,
) => Notes

const getYaosNotes: GetYaosNotes =
    (
        blockResolution: YaosBlockResolution,
        blockStrategy: YaosBlockStrategy,
        barDuration: BarDuration,
        rendering: YaosRendering,
    ): Notes => {
        const blockStyle: YaosBlockStyle = YAOS_BLOCK_STYLES_BY_STRATEGY_THEN_RESOLUTION[blockStrategy][blockResolution]

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

        return yaosNotesByBarDurationBlockStyleThenRendering[barDuration][blockStyle][rendering]
    }

export default getYaosNotes
