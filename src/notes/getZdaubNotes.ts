import { Notes } from '../types'
import { BarDuration, ZdaubBlockStyle, ZdaubRendering } from '../zdaubyaosTypes'
import { zdaubNotesByBarDurationBlockStyleThenRendering } from './zdaubNotes'

type UsageCount = number

type UsageGrouping = {
    [x in BarDuration]: {[y in ZdaubBlockStyle]?: UsageCountByRendering}
}

type UsageCountByRendering = {[z in ZdaubRendering]?: UsageCount}

export const zdaubNoteUsagesByDurationBlocksThenRendering: UsageGrouping = {
    fifteen: {},
    twentyfour: {},
}

type GetZdaubNotes = (blockStyle: ZdaubBlockStyle, barDuration: BarDuration, rendering: ZdaubRendering) => Notes

const getZdaubNotes: GetZdaubNotes =
    (blockStyle: ZdaubBlockStyle, barDuration: BarDuration, rendering: ZdaubRendering): Notes => {
        zdaubNoteUsagesByDurationBlocksThenRendering[barDuration][blockStyle] =
            zdaubNoteUsagesByDurationBlocksThenRendering[barDuration][blockStyle] || {}
        const byBlockStyle: UsageCountByRendering | undefined =
            zdaubNoteUsagesByDurationBlocksThenRendering[barDuration][blockStyle]
        if (byBlockStyle !== undefined) {
            let byRendering: UsageCount | undefined = byBlockStyle[rendering]
            if (byRendering !== undefined) {
                byRendering += 1
                byBlockStyle[rendering] = byRendering
            } else {
                byBlockStyle[rendering] = 1
            }
        }

        return zdaubNotesByBarDurationBlockStyleThenRendering[barDuration][blockStyle][rendering]
    }

export default getZdaubNotes
