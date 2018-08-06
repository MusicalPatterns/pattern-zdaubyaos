import { Notes } from '../types'
import { yaosNotesByDurationBlocksThenRendering } from './yaosNotes'

interface YaosNotesQuery {
    blockresolution: string,
    blockstrategy: string,
    duration: string,
    rendering: string,
}

const BLOCKS_BY_STRATEGY_THEN_RESOLUTION: { [index: string]: { [index: string]: string } } = {
    inaidjiyaiouzd: {
        highregular: 'ouzd',
        lowregular: 'inai',
        midirregular: 'djiyai',
    },
    umowchuwowiest: {
        highregular: 'iest',
        lowregular: 'umow',
        midirregular: 'chuwow',
    },
}

interface UsageGrouping { [index: string]: { [index: string]: { [index: string]: number } } }

export const yaosNoteUsagesByDurationBlocksThenRendering: UsageGrouping = {
    fifteen: {},
    twentyfour: {},
}

const getYaosNotes: (_: YaosNotesQuery) => Notes =
    ({duration, blockresolution, blockstrategy, rendering}: YaosNotesQuery): Notes => {
        const blocks: string = BLOCKS_BY_STRATEGY_THEN_RESOLUTION[blockstrategy][blockresolution]

        yaosNoteUsagesByDurationBlocksThenRendering[duration][blocks] =
            yaosNoteUsagesByDurationBlocksThenRendering[duration][blocks] || {}
        yaosNoteUsagesByDurationBlocksThenRendering[duration][blocks][rendering] =
            yaosNoteUsagesByDurationBlocksThenRendering[duration][blocks][rendering] || 0
        yaosNoteUsagesByDurationBlocksThenRendering[duration][blocks][rendering] += 1

        return yaosNotesByDurationBlocksThenRendering[duration][blocks][rendering]
    }

export default getYaosNotes
