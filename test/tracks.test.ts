import calculateNotesDuration from '../../../src/utilities/calculateNotesDuration'
import { Time } from '../../../src/utilities/nominalTypes'
import * as to from '../../../src/utilities/to'
import { zdaubyaosHarmonicOrSubharmonicTrack, zdaubyaosSubparticularOrDubparticularTrack, zdaubyaosSuperparticularOrDuperparticularTrack } from '../src/tracks'

describe('tracks', () => {
    it('is the case that they all have the same duration', () => {
        const expectedTotalSongDuration: Time = to.Time(3360)
        expect(calculateNotesDuration(zdaubyaosSubparticularOrDubparticularTrack)).toEqual(expectedTotalSongDuration)
        expect(calculateNotesDuration(zdaubyaosSuperparticularOrDuperparticularTrack)).toEqual(expectedTotalSongDuration)
        expect(calculateNotesDuration(zdaubyaosHarmonicOrSubharmonicTrack)).toEqual(expectedTotalSongDuration)
    })
})
