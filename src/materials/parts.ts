import { applyOffset, DictionaryOf, from, INCLUSIVE, Index, INITIAL, Part, Segment, to } from '../../../../src'
import { SEGMENT_A, SEGMENT_B, SEGMENT_C } from '../constants'
import { buildZdaubyaosSegments } from './segments'

const buildZdaubyaosParts: () => DictionaryOf<Part> =
    (): DictionaryOf<Part> => {
        const segments: Segment[] = buildZdaubyaosSegments()

        const end: Index = to.Index(segments.length)

        let zdaubyaosSubparticularOrDubparticularPart: Part = []
        let zdaubyaosSuperparticularOrDuperparticularPart: Part = []
        let zdaubyaosHarmonicOrSubharmonicPart: Part = []

        segments.slice(from.Index(INITIAL), from.Index(applyOffset(end, INCLUSIVE)))
            .forEach((segment: Segment): void => {
                zdaubyaosSubparticularOrDubparticularPart = zdaubyaosSubparticularOrDubparticularPart
                    .concat(segment[ from.Index(SEGMENT_A) ])
                zdaubyaosSuperparticularOrDuperparticularPart = zdaubyaosSuperparticularOrDuperparticularPart
                    .concat(segment[ from.Index(SEGMENT_B) ])
                zdaubyaosHarmonicOrSubharmonicPart = zdaubyaosHarmonicOrSubharmonicPart
                    .concat(segment[ from.Index(SEGMENT_C) ])
            })

        return {
            zdaubyaosHarmonicOrSubharmonicPart,
            zdaubyaosSubparticularOrDubparticularPart,
            zdaubyaosSuperparticularOrDuperparticularPart,
        }
    }

export {
    buildZdaubyaosParts,
}
