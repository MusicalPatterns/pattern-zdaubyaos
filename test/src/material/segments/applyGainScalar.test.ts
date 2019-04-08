import { Note } from '@musical-patterns/material'
import { Scalar, to } from '@musical-patterns/utilities'
import { applyGainScalar } from '../../../../src/indexForTest'

const testNote: (gain: Scalar) => Note =
    (gain: Scalar): Note => ({ gain: { scalar: gain } })

describe('apply gain scalar', () => {
    it('scales the gain of every note', () => {
        const notes: Note[] = [
            testNote(to.Scalar(1)),
            testNote(to.Scalar(0.666)),
            testNote(to.Scalar(0.5)),
        ]

        const expectedNotes: Note[] = [
            testNote(to.Scalar(0.5)),
            testNote(to.Scalar(0.333)),
            testNote(to.Scalar(0.25)),
        ]

        expect(applyGainScalar(notes, to.Scalar(to.Amplitude(0.5))))
            .toEqual(expectedNotes)
    })
})
