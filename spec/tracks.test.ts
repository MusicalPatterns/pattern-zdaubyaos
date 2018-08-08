import calculateDuration from '../../../src/utilities/calculateDuration'
import { zdaubyaosTrackA, zdaubyaosTrackB, zdaubyaosTrackC } from '../src/convertSegmentsToTracks'

describe('tracks', () => {
    it('is the case that they all have the same duration', () => {
        const expectedTotalSongDuration: number = 3367
        expect(calculateDuration(zdaubyaosTrackA)).toEqual(expectedTotalSongDuration)
        expect(calculateDuration(zdaubyaosTrackB)).toEqual(expectedTotalSongDuration)
        expect(calculateDuration(zdaubyaosTrackC)).toEqual(expectedTotalSongDuration)
    })
})
