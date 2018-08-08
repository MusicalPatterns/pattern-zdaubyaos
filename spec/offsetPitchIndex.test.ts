import { Notes } from '../src/types'
import offsetPitchIndex from '../src/alterations/offsetPitchIndex'
import * as to from '../../../src/utilities/to'

describe('offset pitch', () => {
    it('offsets the pitch of every note', () => {
        const notes: Notes = [
            {
                duration: 1,
                pitchIndex: 1,
                sustain: 1,
                gain: 1,
            },
            {
                duration: 1,
                pitchIndex: 2,
                sustain: 1,
                gain: 1,
            },
            {
                duration: 1,
                pitchIndex: 4,
                sustain: 1,
                gain: 1,
            },
        ]

        const expectedNotes: Notes = [
            {
                duration: 1,
                pitchIndex: 2,
                sustain: 1,
                gain: 1,
            },
            {
                duration: 1,
                pitchIndex: 3,
                sustain: 1,
                gain: 1,
            },
            {
                duration: 1,
                pitchIndex: 5,
                sustain: 1,
                gain: 1,
            },
        ]

        expect(offsetPitchIndex(notes, to.Offset(1))).toEqual(expectedNotes)
    })
})
