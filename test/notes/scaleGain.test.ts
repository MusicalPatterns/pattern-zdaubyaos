import { defaultNote } from '../../../../src/defaultNote'
import { Note, Notes } from '../../../../src/types'
import { Scalar } from '../../../../src/utilities/nominalTypes'
import * as to from '../../../../src/utilities/to'
import scaleGain from '../../src/notes/scaleGain'

const testNote: (gain: Scalar) => Note =
    (gain: Scalar): Note => ({ ...defaultNote, gain })

describe('scale gain', () => {
    it('scales the gain of every note', () => {
        const notes: Notes = [
            testNote(to.Scalar(1)),
            testNote(to.Scalar(0.666)),
            testNote(to.Scalar(0.5)),
        ]

        const expectedNotes: Notes = [
            testNote(to.Scalar(0.5)),
            testNote(to.Scalar(0.333)),
            testNote(to.Scalar(0.25)),
        ]

        expect(scaleGain(notes, to.Scalar(0.5))).toEqual(expectedNotes)
    })
})
