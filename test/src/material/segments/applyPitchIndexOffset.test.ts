import { Note } from '@musical-patterns/material'
import { Ordinal, Scalar, to } from '@musical-patterns/utilities'
import { applyPitchIndexTranslation } from '../../../../src/indexForTest'

const testNote: (pitch: Ordinal<Scalar>) => Note =
    (pitch: Ordinal<Scalar>): Note => ({ pitch: { index: pitch } })

describe('apply pitch index translation', () => {
    it('translates the pitch index of every note', () => {
        const notes: Note[] = [
            testNote(to.Ordinal<Scalar>(1)),
            testNote(to.Ordinal<Scalar>(2)),
            testNote(to.Ordinal<Scalar>(4)),
        ]

        const expectedPart: Note[] = [
            testNote(to.Ordinal<Scalar>(7)),
            testNote(to.Ordinal<Scalar>(8)),
            testNote(to.Ordinal<Scalar>(10)),
        ]

        expect(applyPitchIndexTranslation(notes, to.Translation<Ordinal<Scalar>>(6)))
            .toEqual(expectedPart)
    })
})
