import { NoteSpec, NoteSpecs } from '../../../../../src/compile/types'
import { Scalar } from '../../../../../src/utilities/nominalTypes'
import * as to from '../../../../../src/utilities/to'
import applyGainScalar from '../../../src/notes/applyGainScalar'

const testNoteSpec: (gain: Scalar) => NoteSpec =
    (gain: Scalar): NoteSpec => ({ gainSpec: { scalar: gain } })

describe('scale gain', () => {
    it('scales the gain of every note', () => {
        const noteSpecs: NoteSpecs = [
            testNoteSpec(to.Scalar(1)),
            testNoteSpec(to.Scalar(0.666)),
            testNoteSpec(to.Scalar(0.5)),
        ]

        const expectedNoteSpecs: NoteSpecs = [
            testNoteSpec(to.Scalar(0.5)),
            testNoteSpec(to.Scalar(0.333)),
            testNoteSpec(to.Scalar(0.25)),
        ]

        expect(applyGainScalar(noteSpecs, to.Scalar(0.5))).toEqual(expectedNoteSpecs)
    })
})
