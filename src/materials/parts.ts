import {
    applyOffset,
    dereference,
    DictionaryOf,
    from,
    INCLUSIVE,
    Index,
    INITIAL,
    PartSpec,
    Segment,
    to,
} from '../../../../src'
import { SEGMENT_A, SEGMENT_B, SEGMENT_C } from '../constants'
import { buildSegments } from './segments'

const buildParts: () => DictionaryOf<PartSpec> =
    (): DictionaryOf<PartSpec> => {
        const segments: Segment[] = buildSegments()

        const end: Index = to.Index(segments.length)

        let zdaubyaosSubparticularOrDubparticularPart: PartSpec = []
        let zdaubyaosSuperparticularOrDuperparticularPart: PartSpec = []
        let zdaubyaosHarmonicOrSubharmonicPart: PartSpec = []

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
