import { thunkNotes } from '../../../src/indexForTest'
import { computeTotalZdaubyaosValue } from '../../support'

describe('notes', (): void => {
    it('is the case that they all have the same value', (): void => {
        const {
            dubpartDuperpart,
            harmSubharm,
            subpartSuperpart,
        } = thunkNotes()

        const expectedTotalPatternDuration: number = 3360
        expect(computeTotalZdaubyaosValue(subpartSuperpart))
            .toEqual(expectedTotalPatternDuration)
        expect(computeTotalZdaubyaosValue(dubpartDuperpart))
            .toEqual(expectedTotalPatternDuration)
        expect(computeTotalZdaubyaosValue(harmSubharm))
            .toEqual(expectedTotalPatternDuration)
    })
})
