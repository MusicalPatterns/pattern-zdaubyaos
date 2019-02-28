import { buildParts } from '../../../src/indexForTest'
import { calculateTotalZdaubyaosDuration } from '../../support'

describe('parts', () => {
    it('is the case that they all have the same duration', () => {
        const {
            subDub,
            harmSubharm,
            superDuper,
        } = buildParts()

        const expectedTotalPatternDuration: number = 3360
        expect(calculateTotalZdaubyaosDuration(subDub))
            .toEqual(expectedTotalPatternDuration)
        expect(calculateTotalZdaubyaosDuration(superDuper))
            .toEqual(expectedTotalPatternDuration)
        expect(calculateTotalZdaubyaosDuration(harmSubharm))
            .toEqual(expectedTotalPatternDuration)
    })
})
