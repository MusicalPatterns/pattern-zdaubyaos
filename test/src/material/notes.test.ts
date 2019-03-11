import { computeNotes } from '../../../src/indexForTest'
import { computeTotalZdaubyaosDuration } from '../../support'

describe('notes', () => {
    it('is the case that they all have the same duration', () => {
        const {
            subDub,
            harmSubharm,
            superDuper,
        } = computeNotes()

        const expectedTotalPatternDuration: number = 3360
        expect(computeTotalZdaubyaosDuration(subDub))
            .toEqual(expectedTotalPatternDuration)
        expect(computeTotalZdaubyaosDuration(superDuper))
            .toEqual(expectedTotalPatternDuration)
        expect(computeTotalZdaubyaosDuration(harmSubharm))
            .toEqual(expectedTotalPatternDuration)
    })
})
