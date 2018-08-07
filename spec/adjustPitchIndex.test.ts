import { Notes } from '../src/types'
import adjustPitchIndex from '../src/alterations/adjustPitchIndex'

describe('adjust pitch', () => {
    it('adjusts the pitch of every note', () => {
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

        expect(adjustPitchIndex(notes, 1)).toEqual(expectedNotes)
    })
})
