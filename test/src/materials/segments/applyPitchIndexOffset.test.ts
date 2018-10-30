import { Index, NoteSpec, Part, to } from '../../../../../../src/indexForTest'
import { applyPitchIndexOffset } from '../../../../src/indexForTest'

const testNoteSpec: (pitch: Index) => NoteSpec =
    (pitch: Index): NoteSpec => ({ pitchSpec: { index: pitch } })

describe('apply pitch index offset', () => {
    it('offsets the pitch index of every note', () => {
        const part: Part = [
            testNoteSpec(to.Index(1)),
            testNoteSpec(to.Index(2)),
            testNoteSpec(to.Index(4)),
        ]

        const expectedPart: Part = [
            testNoteSpec(to.Index(2)),
            testNoteSpec(to.Index(3)),
            testNoteSpec(to.Index(5)),
        ]

        expect(applyPitchIndexOffset(part, to.Offset(1)))
            .toEqual(expectedPart)
    })
})
