import { Note } from '@musical-patterns/material'
import { Amplitude, as, Scalar } from '@musical-patterns/utilities'
import { applyGainScalar } from '../../../../src/indexForTest'

const testNote: (gain: Scalar<Amplitude>) => Note =
    (gain: Scalar<Amplitude>): Note => ({ gain: { scalar: gain } })

describe('apply gain scalar', () => {
    it('scales the gain of every note', () => {
        const notes: Note[] = [
            testNote(as.Scalar<Amplitude>(1)),
            testNote(as.Scalar<Amplitude>(0.666)),
            testNote(as.Scalar<Amplitude>(0.5)),
        ]

        const expectedNotes: Note[] = [
            testNote(as.Scalar<Amplitude>(0.5)),
            testNote(as.Scalar<Amplitude>(0.333)),
            testNote(as.Scalar<Amplitude>(0.25)),
        ]

        expect(applyGainScalar(notes, as.NormalScalar<Amplitude>(0.5)))
            .toEqual(expectedNotes)
    })
})
