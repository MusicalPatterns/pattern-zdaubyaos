import { NoteSpec } from '@musical-patterns/compiler'
import { Segment } from '@musical-patterns/pattern'
import { apply, DictionaryOf, from, INCLUSIVE, Index, INITIAL, to } from '@musical-patterns/utilities'
import { SEGMENT_A, SEGMENT_B, SEGMENT_C } from '../constants'
import { buildSegments } from './segments'

const buildParts: () => DictionaryOf<NoteSpec[]> =
    (): DictionaryOf<NoteSpec[]> => {
        const segments: Segment[] = buildSegments()

        const end: Index = to.Index(segments.length)

        let subparticularOrDubparticularPart: NoteSpec[] = []
        let superparticularOrDuperparticularPart: NoteSpec[] = []
        let harmonicOrSubharmonicPart: NoteSpec[] = []

        segments.slice(from.Index(INITIAL), from.Index(apply.Offset(end, INCLUSIVE)))
            .forEach((segment: Segment): void => {
                subparticularOrDubparticularPart = subparticularOrDubparticularPart
                    .concat(apply.Index(segment, SEGMENT_A))
                superparticularOrDuperparticularPart = superparticularOrDuperparticularPart
                    .concat(apply.Index(segment, SEGMENT_B))
                harmonicOrSubharmonicPart = harmonicOrSubharmonicPart
                    .concat(apply.Index(segment, SEGMENT_C))
            })

        return {
            harmonicOrSubharmonicPart,
            subparticularOrDubparticularPart,
            superparticularOrDuperparticularPart,
        }
    }

export {
    buildParts,
}
