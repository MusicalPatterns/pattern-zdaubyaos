import { NoteSpec } from '@musical-patterns/compiler'
import { Ordinal, to } from '@musical-patterns/utilities'
import { applyPitchIndexTranslation } from '../../../../src/indexForTest'

const testNoteSpec: (pitch: Ordinal) => NoteSpec =
    (pitch: Ordinal): NoteSpec => ({ pitchSpec: { index: pitch } })

describe('apply pitch index translation', () => {
    it('translates the pitch index of every note', () => {
        const part: NoteSpec[] = [
            testNoteSpec(to.Ordinal(1)),
            testNoteSpec(to.Ordinal(2)),
            testNoteSpec(to.Ordinal(4)),
        ]

        const expectedPart: NoteSpec[] = [
            testNoteSpec(to.Ordinal(2)),
            testNoteSpec(to.Ordinal(3)),
            testNoteSpec(to.Ordinal(5)),
        ]

        expect(applyPitchIndexTranslation(part, to.Translation(1)))
            .toEqual(expectedPart)
    })
})
