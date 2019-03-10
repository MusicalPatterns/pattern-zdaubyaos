import { buildNotes } from '../../../src/indexForTest'
import { calculateTotalZdaubyaosDuration } from '../../support'

describe('notes', () => {
    it('is the case that they all have the same duration', () => {
        const {
            subDub,
            harmSubharm,
            superDuper,
        } = buildNotes()

        const expectedTotalPatternDuration: number = 3360
        expect(calculateTotalZdaubyaosDuration(subDub))
            .toEqual(expectedTotalPatternDuration)
        expect(calculateTotalZdaubyaosDuration(superDuper))
            .toEqual(expectedTotalPatternDuration)
        expect(calculateTotalZdaubyaosDuration(harmSubharm))
            .toEqual(expectedTotalPatternDuration)
    })
})
