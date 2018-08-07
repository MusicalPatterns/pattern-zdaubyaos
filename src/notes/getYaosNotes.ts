import { Notes } from '../types'
import { yaosNotesByDurationBlocksThenRendering } from './yaosNotes'

const BLOCKS_BY_STRATEGY_THEN_RESOLUTION: {[index: string]: {[index: string]: string}} = {
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

interface UsageGrouping {
    [index: string]: {[index: string]: {[index: string]: number}}
}

export const yaosNoteUsagesByDurationBlocksThenRendering: UsageGrouping = {
    fifteen: {},
    twentyfour: {},
}

const getYaosNotes: (blockResolution: string, blockStrategy: string, duration: string, rendering: string) => Notes =
    (blockResolution: string, blockStrategy: string, duration: string, rendering: string): Notes => {
        const blocks: string = BLOCKS_BY_STRATEGY_THEN_RESOLUTION[blockStrategy][blockResolution]

        yaosNoteUsagesByDurationBlocksThenRendering[duration][blocks] =
            yaosNoteUsagesByDurationBlocksThenRendering[duration][blocks] || {}
        yaosNoteUsagesByDurationBlocksThenRendering[duration][blocks][rendering] =
            yaosNoteUsagesByDurationBlocksThenRendering[duration][blocks][rendering] || 0
        yaosNoteUsagesByDurationBlocksThenRendering[duration][blocks][rendering] += 1

        return yaosNotesByDurationBlocksThenRendering[duration][blocks][rendering]
    }

export default getYaosNotes
