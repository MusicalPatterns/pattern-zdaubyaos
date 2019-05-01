import { computeNotes } from '../../../src/indexForTest'
import { computeTotalZdaubyaosValue } from '../../support'

describe('notes', () => {
    it('is the case that they all have the same value', () => {
        const {
            subDub,
            harmSubharm,
            superDuper,
        } = computeNotes()

        const expectedTotalPatternDuration: number = 3360
        expect(computeTotalZdaubyaosValue(subDub))
            .toEqual(expectedTotalPatternDuration)
        expect(computeTotalZdaubyaosValue(superDuper))
            .toEqual(expectedTotalPatternDuration)
        expect(computeTotalZdaubyaosValue(harmSubharm))
            .toEqual(expectedTotalPatternDuration)
    })
})
