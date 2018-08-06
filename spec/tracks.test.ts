import calculateDuration from '../../../src/calculateDuration'
import { zdaubyaosTrackA, zdaubyaosTrackB, zdaubyaosTrackC } from '../src/tracks'

describe('tracks', () => {
    it('is the case that they all have the same duration', () => {
        const expectedTotalSongDuration: number = 2712
        expect(calculateDuration(zdaubyaosTrackA)).toEqual(expectedTotalSongDuration)
        expect(calculateDuration(zdaubyaosTrackB)).toEqual(expectedTotalSongDuration)
        expect(calculateDuration(zdaubyaosTrackC)).toEqual(expectedTotalSongDuration)
    })
})
