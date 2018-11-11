import {
    applyOffset,
    dereference,
    DictionaryOf,
    from,
    INCLUSIVE,
    Index,
    INITIAL,
    Part,
    Segment,
    to,
} from '../../../../src'
import { SEGMENT_A, SEGMENT_B, SEGMENT_C } from '../constants'
import { buildSegments } from './segments'

const buildParts: () => DictionaryOf<Part> =
    (): DictionaryOf<Part> => {
        const segments: Segment[] = buildSegments()

        const end: Index = to.Index(segments.length)

        let zdaubyaosSubparticularOrDubparticularPart: Part = []
        let zdaubyaosSuperparticularOrDuperparticularPart: Part = []
        let zdaubyaosHarmonicOrSubharmonicPart: Part = []

        segments.slice(from.Index(INITIAL), from.Index(applyOffset(end, INCLUSIVE)))
            .forEach((segment: Segment): void => {
                zdaubyaosSubparticularOrDubparticularPart = zdaubyaosSubparticularOrDubparticularPart
                    .concat(dereference(segment, SEGMENT_A))
                zdaubyaosSuperparticularOrDuperparticularPart = zdaubyaosSuperparticularOrDuperparticularPart
                    .concat(dereference(segment, SEGMENT_B))
                zdaubyaosHarmonicOrSubharmonicPart = zdaubyaosHarmonicOrSubharmonicPart
                    .concat(dereference(segment, SEGMENT_C))
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
