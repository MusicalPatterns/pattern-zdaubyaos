import { defaultNote } from '../../../../src/defaultNote'
import { Note, Notes } from '../../../../src/types'
import { Index } from '../../../../src/utilities/nominalTypes'
import * as to from '../../../../src/utilities/to'
import offsetPitchIndex from '../../src/notes/offsetPitchIndex'

const testNote: (pitchIndex: Index) => Note =
    (pitchIndex: Index): Note => ({...defaultNote, pitchIndex})

describe('offset pitch', () => {
    it('offsets the pitch index of every note', () => {
        const notes: Notes = [
            testNote(to.Index(1)),
            testNote(to.Index(2)),
            testNote(to.Index(4)),
        ]

        const expectedNotes: Notes = [
            testNote(to.Index(2)),
            testNote(to.Index(3)),
            testNote(to.Index(5)),
        ]

        expect(offsetPitchIndex(notes, to.Offset(1))).toEqual(expectedNotes)
    })
})
