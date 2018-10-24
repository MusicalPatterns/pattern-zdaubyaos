import { Index } from '../../../../src/utilities/nominalTypes'
import * as to from '../../../../src/utilities/to'
import { buildZdaubyaosTracks } from '../../src/tracks'
import calculateTotalZdaubyaosDuration from '../support/calculateTotalZdaubyaosDuration'

describe('tracks', () => {
    it('is the case that they all have the same duration', () => {
        const {
            zdaubyaosSubparticularOrDubparticularTrack,
            zdaubyaosHarmonicOrSubharmonicTrack,
            zdaubyaosSuperparticularOrDuperparticularTrack,
        } = buildZdaubyaosTracks(to.Scalar(1))

        const expectedTotalSongDuration: Index = to.Index(3360)
        expect(calculateTotalZdaubyaosDuration(zdaubyaosSubparticularOrDubparticularTrack)).toEqual(expectedTotalSongDuration)
        expect(calculateTotalZdaubyaosDuration(zdaubyaosSuperparticularOrDuperparticularTrack)).toEqual(expectedTotalSongDuration)
        expect(calculateTotalZdaubyaosDuration(zdaubyaosHarmonicOrSubharmonicTrack)).toEqual(expectedTotalSongDuration)
    })
})
