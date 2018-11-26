import { apply, DictionaryOf, from, Index, to } from '@musical-patterns/shared'
import { PartSpec } from '../../../../compile'
import { INCLUSIVE, INITIAL } from '../../../../constants'
import { Segment } from '../../../../patternMaterial'
import { SEGMENT_A, SEGMENT_B, SEGMENT_C } from '../constants'
import { buildSegments } from './segments'

const buildParts: () => DictionaryOf<PartSpec> =
    (): DictionaryOf<PartSpec> => {
        const segments: Segment[] = buildSegments()

        const end: Index = to.Index(segments.length)

        let zdaubyaosSubparticularOrDubparticularPart: PartSpec = []
        let zdaubyaosSuperparticularOrDuperparticularPart: PartSpec = []
        let zdaubyaosHarmonicOrSubharmonicPart: PartSpec = []

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
