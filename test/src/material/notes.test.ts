import { computeNotes } from '../../../src/indexForTest'
import { computeTotalZdaubyaosValue } from '../../support'

describe('notes', () => {
    it('is the case that they all have the same value', () => {
        const {
            dubpartDuperpart,
            harmSubharm,
            subpartSuperpart,
        } = computeNotes()

        const expectedTotalPatternDuration: number = 3360
        expect(computeTotalZdaubyaosValue(subpartSuperpart))
            .toEqual(expectedTotalPatternDuration)
        expect(computeTotalZdaubyaosValue(dubpartDuperpart))
            .toEqual(expectedTotalPatternDuration)
        expect(computeTotalZdaubyaosValue(harmSubharm))
            .toEqual(expectedTotalPatternDuration)
    })
})
