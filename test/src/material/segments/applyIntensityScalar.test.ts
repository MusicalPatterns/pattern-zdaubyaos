import { Note } from '@musical-patterns/material'
import { as, Intensity, Scalar } from '@musical-patterns/utilities'
import { applyIntensityScalar } from '../../../../src/indexForTest'

const testNote: (intensity: Scalar<Intensity>) => Note =
    (intensity: Scalar<Intensity>): Note => ({ intensity: { scalar: intensity } })

describe('apply intensity scalar', () => {
    it('scales the intensity of every note', () => {
        const notes: Note[] = [
            testNote(as.Scalar<Intensity>(1)),
            testNote(as.Scalar<Intensity>(0.666)),
            testNote(as.Scalar<Intensity>(0.5)),
        ]

        const expectedNotes: Note[] = [
            testNote(as.Scalar<Intensity>(0.5)),
            testNote(as.Scalar<Intensity>(0.333)),
            testNote(as.Scalar<Intensity>(0.25)),
        ]

        expect(applyIntensityScalar(notes, as.NormalScalar<Intensity>(0.5)))
            .toEqual(expectedNotes)
    })
})
