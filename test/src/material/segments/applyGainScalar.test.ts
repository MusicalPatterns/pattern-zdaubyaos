import { Note } from '@musical-patterns/material'
import { Amplitude, as, Scalar } from '@musical-patterns/utilities'
import { applyGainScalar } from '../../../../src/indexForTest'

const testNote: (gain: Scalar<Scalar>) => Note =
    (gain: Scalar<Scalar>): Note => ({ gain: { scalar: gain } })

describe('apply gain scalar', () => {
    it('scales the gain of every note', () => {
        const notes: Note[] = [
            testNote(as.Scalar<Scalar>(1)),
            testNote(as.Scalar<Scalar>(0.666)),
            testNote(as.Scalar<Scalar>(0.5)),
        ]

        const expectedNotes: Note[] = [
            testNote(as.Scalar<Scalar>(0.5)),
            testNote(as.Scalar<Scalar>(0.333)),
            testNote(as.Scalar<Scalar>(0.25)),
        ]

        expect(applyGainScalar(notes, as.NormalScalar<Amplitude>(0.5)))
            .toEqual(expectedNotes)
    })
})
