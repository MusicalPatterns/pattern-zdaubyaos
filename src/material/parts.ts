import { NoteSpec } from '@musical-patterns/compiler'
import { Segment } from '@musical-patterns/pattern'
import { apply } from '@musical-patterns/utilities'
import { SEGMENT_A, SEGMENT_B, SEGMENT_C } from '../constants'
import { buildSegments } from './segments'
import { ZdaubyaosParts } from './types'

const buildParts: () => ZdaubyaosParts =
    (): ZdaubyaosParts => {
        const segments: Segment[] = buildSegments()

        let subDub: NoteSpec[] = []
        let superDuper: NoteSpec[] = []
        let harmSubharm: NoteSpec[] = []

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
    buildParts,
}
