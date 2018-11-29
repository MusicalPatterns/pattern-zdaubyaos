import { SumOfIndices, to } from '@musical-patterns/utilities'
import { buildParts } from '../../../src/indexForTest'
import { calculateTotalZdaubyaosDuration } from '../../support'

describe('zdaubyaos parts', () => {
    it('is the case that they all have the same duration', () => {
        const {
            zdaubyaosSubparticularOrDubparticularPart,
            zdaubyaosHarmonicOrSubharmonicPart,
            zdaubyaosSuperparticularOrDuperparticularPart,
        } = buildParts()

        const expectedTotalPatternDuration: SumOfIndices = to.SumOfIndices(3360)
        expect(calculateTotalZdaubyaosDuration(zdaubyaosSubparticularOrDubparticularPart))
            .toEqual(expectedTotalPatternDuration)
        expect(calculateTotalZdaubyaosDuration(zdaubyaosSuperparticularOrDuperparticularPart))
            .toEqual(expectedTotalPatternDuration)
        expect(calculateTotalZdaubyaosDuration(zdaubyaosHarmonicOrSubharmonicPart))
            .toEqual(expectedTotalPatternDuration)
    })
})
