import { NoteSpec, Scalar, to } from '../../../../../src/indexForTest'
import { applyGainScalar } from '../../../src/indexForTest'

const testNoteSpec: (gain: Scalar) => NoteSpec =
    (gain: Scalar): NoteSpec => ({ gainSpec: { scalar: gain } })

describe('scale gain', () => {
    it('scales the gain of every note', () => {
        const noteSpecs: NoteSpec[] = [
            testNoteSpec(to.Scalar(1)),
            testNoteSpec(to.Scalar(0.666)),
            testNoteSpec(to.Scalar(0.5)),
        ]

        const expectedNoteSpecs: NoteSpec[] = [
            testNoteSpec(to.Scalar(0.5)),
            testNoteSpec(to.Scalar(0.333)),
            testNoteSpec(to.Scalar(0.25)),
        ]

        expect(applyGainScalar(noteSpecs, to.Scalar(0.5)))
            .toEqual(expectedNoteSpecs)
    })
})
