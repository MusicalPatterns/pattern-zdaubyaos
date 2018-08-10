import * as to from '../../../../src/utilities/to'
import scaleGain from '../../src/notes/scaleGain'
import { Notes } from '../../src/types'

describe('scale gain', () => {
    it('scales the gain of every note', () => {
        const notes: Notes = [
            {
                duration: to.Time(1),
                gain: to.Scalar(1),
                pitchIndex: to.Index(1),
                sustain: to.Time(1),
            },
            {
                duration: to.Time(1),
                gain: to.Scalar(0.5),
                pitchIndex: to.Index(1),
                sustain: to.Time(1),
            },
            {
                duration: to.Time(1),
                gain: to.Scalar(0.25),
                pitchIndex: to.Index(1),
                sustain: to.Time(1),
            },
        ]

        const expectedNotes: Notes = [
            {
                duration: to.Time(1),
                gain: to.Scalar(0.5),
                pitchIndex: to.Index(1),
                sustain: to.Time(1),
            },
            {
                duration: to.Time(1),
                gain: to.Scalar(0.25),
                pitchIndex: to.Index(1),
                sustain: to.Time(1),
            },
            {
                duration: to.Time(1),
                gain: to.Scalar(0.125),
                pitchIndex: to.Index(1),
                sustain: to.Time(1),
            },
        ]

        expect(scaleGain(notes, to.Scalar(0.5))).toEqual(expectedNotes)
    })
})
