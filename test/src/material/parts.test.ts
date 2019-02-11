import { buildParts } from '../../../src/indexForTest'
import { calculateTotalZdaubyaosDuration } from '../../support'

describe('parts', () => {
    it('is the case that they all have the same duration', () => {
        const {
            subparticularOrDubparticularPart,
            harmonicOrSubharmonicPart,
            superparticularOrDuperparticularPart,
        } = buildParts()

        const expectedTotalPatternDuration: number = 3360
        expect(calculateTotalZdaubyaosDuration(subparticularOrDubparticularPart))
            .toEqual(expectedTotalPatternDuration)
        expect(calculateTotalZdaubyaosDuration(superparticularOrDuperparticularPart))
            .toEqual(expectedTotalPatternDuration)
        expect(calculateTotalZdaubyaosDuration(harmonicOrSubharmonicPart))
            .toEqual(expectedTotalPatternDuration)
    })
})
