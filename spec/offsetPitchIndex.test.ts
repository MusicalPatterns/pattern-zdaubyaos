import * as to from '../../../src/utilities/to'
import offsetPitchIndex from '../src/alterations/offsetPitchIndex'
import { Notes } from '../src/types'

describe('offset pitch', () => {
    it('offsets the pitch of every note', () => {
        const notes: Notes = [
            {
                duration: to.Time(1),
                gain: to.Scalar(1),
                pitchIndex: to.Index(1),
                sustain: to.Time(1),
            },
            {
                duration: to.Time(1),
                gain: to.Scalar(1),
                pitchIndex: to.Index(2),
                sustain: to.Time(1),
            },
            {
                duration: to.Time(1),
                gain: to.Scalar(1),
                pitchIndex: to.Index(4),
                sustain: to.Time(1),
            },
        ]

        const expectedNotes: Notes = [
            {
                duration: to.Time(1),
                gain: to.Scalar(1),
                pitchIndex: to.Index(2),
                sustain: to.Time(1),
            },
            {
                duration: to.Time(1),
                gain: to.Scalar(1),
                pitchIndex: to.Index(3),
                sustain: to.Time(1),
            },
            {
                duration: to.Time(1),
                gain: to.Scalar(1),
                pitchIndex: to.Index(5),
                sustain: to.Time(1),
            },
        ]

        expect(offsetPitchIndex(notes, to.Offset(1))).toEqual(expectedNotes)
    })
})
