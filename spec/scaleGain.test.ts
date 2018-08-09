import { Notes } from '../src/types'
import scaleGain from '../src/alterations/scaleGain'
import * as to from '../../../src/utilities/to'

describe('scale gain', () => {
    it('scales the gain of every note', () => {
        const notes: Notes = [
            {
                duration: to.Time(1),
                pitchIndex: to.Index(1),
                sustain: to.Time(1),
                gain: to.Scalar(1),
            },
            {
                duration: to.Time(1),
                pitchIndex: to.Index(1),
                sustain: to.Time(1),
                gain: to.Scalar(0.5,)
            },
            {
                duration: to.Time(1),
                pitchIndex: to.Index(1),
                sustain: to.Time(1),
                gain: to.Scalar(0.25),
            },
        ]

        const expectedNotes: Notes = [
            {
                duration: to.Time(1),
                pitchIndex: to.Index(1),
                sustain: to.Time(1),
                gain: to.Scalar(0.5,)
            },
            {
                duration: to.Time(1),
                pitchIndex: to.Index(1),
                sustain: to.Time(1),
                gain: to.Scalar(0.25),
            },
            {
                duration: to.Time(1),
                pitchIndex: to.Index(1),
                sustain: to.Time(1),
                gain: to.Scalar(0.125),
            },
        ]

        expect(scaleGain(notes, to.Scalar(0.5))).toEqual(expectedNotes)
    })
})
