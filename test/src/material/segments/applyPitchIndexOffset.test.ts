import { Note } from '@musical-patterns/compiler'
import { Ordinal, to } from '@musical-patterns/utilities'
import { applyPitchIndexTranslation } from '../../../../src/indexForTest'

const testNote: (pitch: Ordinal) => Note =
    (pitch: Ordinal): Note => ({ pitch: { index: pitch } })

describe('apply pitch index translation', () => {
    it('translates the pitch index of every note', () => {
        const notes: Note[] = [
            testNote(to.Ordinal(1)),
            testNote(to.Ordinal(2)),
            testNote(to.Ordinal(4)),
        ]

        const expectedPart: Note[] = [
            testNote(to.Ordinal(7)),
            testNote(to.Ordinal(8)),
            testNote(to.Ordinal(10)),
        ]

        expect(applyPitchIndexTranslation(notes, to.Translation(6)))
            .toEqual(expectedPart)
    })
})
