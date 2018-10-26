import { SumOfIndices, to } from '../../../../src/indexForTest'
import { buildZdaubyaosTracks } from '../../src/indexForTest'
import { calculateTotalZdaubyaosDuration } from '../support'

describe('tracks', () => {
    it('is the case that they all have the same duration', () => {
        const {
            zdaubyaosSubparticularOrDubparticularTrack,
            zdaubyaosHarmonicOrSubharmonicTrack,
            zdaubyaosSuperparticularOrDuperparticularTrack,
        } = buildZdaubyaosTracks(to.Scalar(1))

        const expectedTotalSongDuration: SumOfIndices = to.SumOfIndices(3360)
        expect(calculateTotalZdaubyaosDuration(zdaubyaosSubparticularOrDubparticularTrack)).toEqual(expectedTotalSongDuration)
        expect(calculateTotalZdaubyaosDuration(zdaubyaosSuperparticularOrDuperparticularTrack)).toEqual(expectedTotalSongDuration)
        expect(calculateTotalZdaubyaosDuration(zdaubyaosHarmonicOrSubharmonicTrack)).toEqual(expectedTotalSongDuration)
    })
})
