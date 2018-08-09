import calculateDuration from '../../../src/utilities/calculateDuration'
import { Time } from '../../../src/utilities/nominalTypes'
import * as to from '../../../src/utilities/to'
import { zdaubyaosTrackA, zdaubyaosTrackB, zdaubyaosTrackC } from '../src/convertSegmentsToTracks'

describe('tracks', () => {
    it('is the case that they all have the same duration', () => {
        const expectedTotalSongDuration: Time = to.Time(3360)
        expect(calculateDuration(zdaubyaosTrackA)).toEqual(expectedTotalSongDuration)
        expect(calculateDuration(zdaubyaosTrackB)).toEqual(expectedTotalSongDuration)
        expect(calculateDuration(zdaubyaosTrackC)).toEqual(expectedTotalSongDuration)
    })
})
