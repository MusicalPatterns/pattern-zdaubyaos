import { Note } from '@musical-patterns/material'
import { as, Gain, Scalar } from '@musical-patterns/utilities'
import { applyGainScalar } from '../../../../src/indexForTest'

const testNote: (gain: Scalar<Gain>) => Note =
    (gain: Scalar<Gain>): Note => ({ gain: { scalar: gain } })

describe('apply gain scalar', () => {
    it('scales the gain of every note', () => {
        const notes: Note[] = [
            testNote(as.Scalar<Gain>(1)),
            testNote(as.Scalar<Gain>(0.666)),
            testNote(as.Scalar<Gain>(0.5)),
        ]

        const expectedNotes: Note[] = [
            testNote(as.Scalar<Gain>(0.5)),
            testNote(as.Scalar<Gain>(0.333)),
            testNote(as.Scalar<Gain>(0.25)),
        ]

        expect(applyGainScalar(notes, as.UnitScalar<Gain>(0.5)))
            .toEqual(expectedNotes)
    })
})
