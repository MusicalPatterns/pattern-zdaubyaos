import { SumOfIndices, to } from '../../../../../src/indexForTest'
import { buildZdaubyaosParts } from '../../../src/indexForTest'
import { calculateTotalZdaubyaosDuration } from '../../support'

describe('zdaubyaos parts', () => {
    it('is the case that they all have the same duration', () => {
        const {
            zdaubyaosSubparticularOrDubparticularPart,
            zdaubyaosHarmonicOrSubharmonicPart,
            zdaubyaosSuperparticularOrDuperparticularPart,
        } = buildZdaubyaosParts()

        const expectedTotalSongDuration: SumOfIndices = to.SumOfIndices(3360)
        expect(calculateTotalZdaubyaosDuration(zdaubyaosSubparticularOrDubparticularPart))
            .toEqual(expectedTotalSongDuration)
        expect(calculateTotalZdaubyaosDuration(zdaubyaosSuperparticularOrDuperparticularPart))
            .toEqual(expectedTotalSongDuration)
        expect(calculateTotalZdaubyaosDuration(zdaubyaosHarmonicOrSubharmonicPart))
            .toEqual(expectedTotalSongDuration)
    })
})
