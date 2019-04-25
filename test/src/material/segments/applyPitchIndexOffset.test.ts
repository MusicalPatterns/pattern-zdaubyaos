import { Note } from '@musical-patterns/material'
import { as, Ordinal, Pitch, Scalar } from '@musical-patterns/utilities'
import { applyPitchIndexShift } from '../../../../src/indexForTest'

const testNote: (pitch: Ordinal<Array<Scalar<Pitch>>>) => Note =
    (pitch: Ordinal<Array<Scalar<Pitch>>>): Note => ({ pitch: { index: pitch } })

describe('apply pitch index shift', () => {
    it('shifts the pitch index of every note', () => {
        const notes: Note[] = [
            testNote(as.Ordinal<Array<Scalar<Pitch>>>(1)),
            testNote(as.Ordinal<Array<Scalar<Pitch>>>(2)),
            testNote(as.Ordinal<Array<Scalar<Pitch>>>(4)),
        ]

        const expectedPart: Note[] = [
            testNote(as.Ordinal<Array<Scalar<Pitch>>>(7)),
            testNote(as.Ordinal<Array<Scalar<Pitch>>>(8)),
            testNote(as.Ordinal<Array<Scalar<Pitch>>>(10)),
        ]

        expect(applyPitchIndexShift(notes, as.Cardinal<Ordinal<Array<Scalar<Pitch>>>>(6)))
            .toEqual(expectedPart)
    })
})
