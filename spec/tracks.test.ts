import calculateDuration from '../../../src/utilities/calculateDuration'
import { Time } from '../../../src/utilities/nominalTypes'
import * as to from '../../../src/utilities/to'
import { zdaubyaosSubparticularOrDubparticularTrack, zdaubyaosSuperparticularOrDuperparticularTrack, zdaubyaosHarmonicOrSubharmonicTrack } from '../src/convertSegmentsToTracks'

describe('tracks', () => {
    it('is the case that they all have the same duration', () => {
        const expectedTotalSongDuration: Time = to.Time(3360)
        expect(calculateDuration(zdaubyaosSubparticularOrDubparticularTrack)).toEqual(expectedTotalSongDuration)
        expect(calculateDuration(zdaubyaosSuperparticularOrDuperparticularTrack)).toEqual(expectedTotalSongDuration)
        expect(calculateDuration(zdaubyaosHarmonicOrSubharmonicTrack)).toEqual(expectedTotalSongDuration)
    })
})
