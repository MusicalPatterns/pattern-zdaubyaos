import { NoteSpec, NoteSpecs } from '../../../../../src/compile/types'
import { Index } from '../../../../../src/utilities/nominalTypes'
import * as to from '../../../../../src/utilities/to'
import applyPitchIndexOffset from '../../../src/notes/applyPitchIndexOffset'

const testNoteSpec: (pitch: Index) => NoteSpec =
    (pitch: Index): NoteSpec => ({ pitchSpec: { index: pitch } })

describe('apply pitch index offset', () => {
    it('offsets the pitch index of every note', () => {
        const notes: NoteSpecs = [
            testNoteSpec(to.Index(1)),
            testNoteSpec(to.Index(2)),
            testNoteSpec(to.Index(4)),
        ]

        const expectedNoteSpecs: NoteSpecs = [
            testNoteSpec(to.Index(2)),
            testNoteSpec(to.Index(3)),
            testNoteSpec(to.Index(5)),
        ]

        expect(applyPitchIndexOffset(notes, to.Offset(1))).toEqual(expectedNoteSpecs)
    })
})
