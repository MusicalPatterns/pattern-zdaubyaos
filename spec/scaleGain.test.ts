import { Notes } from '../src/types'
import scaleGain from '../src/alterations/scaleGain'
import * as to from '../../../src/utilities/to'

describe('scale gain', () => {
    it('scales the gain of every note', () => {
        const notes: Notes = [
            {
                duration: 1,
                pitchIndex: 1,
                sustain: 1,
                gain: 1,
            },
            {
                duration: 1,
                pitchIndex: 1,
                sustain: 1,
                gain: 0.5,
            },
            {
                duration: 1,
                pitchIndex: 1,
                sustain: 1,
                gain: 0.25,
            },
        ]

        const expectedNotes: Notes = [
            {
                duration: 1,
                pitchIndex: 1,
                sustain: 1,
                gain: 0.5,
            },
            {
                duration: 1,
                pitchIndex: 1,
                sustain: 1,
                gain: 0.25,
            },
            {
                duration: 1,
                pitchIndex: 1,
                sustain: 1,
                gain: 0.125,
            },
        ]

        expect(scaleGain(notes, to.Scalar(0.5))).toEqual(expectedNotes)
    })
})
