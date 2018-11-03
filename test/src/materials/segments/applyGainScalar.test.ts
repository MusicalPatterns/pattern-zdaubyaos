import { NoteSpec, Part, Scalar, to } from '../../../../../../src/indexForTest'
import { applyGainScalar } from '../../../../src/indexForTest'

const testNoteSpec: (gain: Scalar) => NoteSpec =
    (gain: Scalar): NoteSpec => ({ gainSpec: { scalar: gain } })

describe('apply gain scalar', () => {
    it('scales the gain of every note', () => {
        const part: Part = [
            testNoteSpec(to.Scalar(1)),
            testNoteSpec(to.Scalar(0.666)),
            testNoteSpec(to.Scalar(0.5)),
        ]

        const expectedPart: Part = [
            testNoteSpec(to.Scalar(0.5)),
            testNoteSpec(to.Scalar(0.333)),
            testNoteSpec(to.Scalar(0.25)),
        ]

        expect(applyGainScalar(part, to.Scalar(0.5)))
            .toEqual(expectedPart)
    })
})