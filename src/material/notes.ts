import { Note } from '@musical-patterns/compiler'
import { Segment } from '@musical-patterns/pattern'
import { apply } from '@musical-patterns/utilities'
import { SEGMENT_A, SEGMENT_B, SEGMENT_C } from '../constants'
import { buildSegments } from './segments'
import { ZdaubyaosNotes } from './types'

const buildNotes: () => ZdaubyaosNotes =
    (): ZdaubyaosNotes => {
        const segments: Segment[] = buildSegments()

        let subDub: Note[] = []
        let superDuper: Note[] = []
        let harmSubharm: Note[] = []

        segments.forEach((segment: Segment): void => {
            subDub = subDub
                .concat(apply.Ordinal(segment, SEGMENT_A))
            superDuper = superDuper
                .concat(apply.Ordinal(segment, SEGMENT_B))
            harmSubharm = harmSubharm
                .concat(apply.Ordinal(segment, SEGMENT_C))
        })

        return {
            harmSubharm,
            subDub,
            superDuper,
        }
    }

export {
    buildNotes,
}
