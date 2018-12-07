import { NoteSpec } from '@musical-patterns/compiler'
import { Segment } from '@musical-patterns/pattern'
import { apply, DictionaryOf, from, INCLUSIVE, Index, INITIAL, to } from '@musical-patterns/utilities'
import { SEGMENT_A, SEGMENT_B, SEGMENT_C } from '../constants'
import { buildSegments } from './segments'

const buildParts: () => DictionaryOf<NoteSpec[]> =
    (): DictionaryOf<NoteSpec[]> => {
        const segments: Segment[] = buildSegments()

        const end: Index = to.Index(segments.length)

        let zdaubyaosSubparticularOrDubparticularPart: NoteSpec[] = []
        let zdaubyaosSuperparticularOrDuperparticularPart: NoteSpec[] = []
        let zdaubyaosHarmonicOrSubharmonicPart: NoteSpec[] = []

        segments.slice(from.Index(INITIAL), from.Index(apply.Offset(end, INCLUSIVE)))
            .forEach((segment: Segment): void => {
                zdaubyaosSubparticularOrDubparticularPart = zdaubyaosSubparticularOrDubparticularPart
                    .concat(apply.Index(segment, SEGMENT_A))
                zdaubyaosSuperparticularOrDuperparticularPart = zdaubyaosSuperparticularOrDuperparticularPart
                    .concat(apply.Index(segment, SEGMENT_B))
                zdaubyaosHarmonicOrSubharmonicPart = zdaubyaosHarmonicOrSubharmonicPart
                    .concat(apply.Index(segment, SEGMENT_C))
            })

        return {
            zdaubyaosHarmonicOrSubharmonicPart,
            zdaubyaosSubparticularOrDubparticularPart,
            zdaubyaosSuperparticularOrDuperparticularPart,
        }
    }

export {
    buildParts,
}
