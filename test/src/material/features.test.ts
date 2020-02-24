import { Feature, Note, PitchValue } from '@musical-patterns/material'
import { as, Intensity, Pitch, Scalar, Value } from '@musical-patterns/utilities'
import { computeNote } from '../../../src/indexForTest'

describe('features', (): void => {
    describe('when the pitch index is negative 1', (): void => {
        let note: Note
        beforeEach((): void => {
            note = computeNote(as.ContourElement<PitchValue>([ -1, 6 ]))
        })

        describe('value', (): void => {
            let value: Feature<Value>
            beforeEach((): void => {
                value = note.value!
            })

            it('uses the value index, shifted by one to be zero-indexed, for the index', (): void => {
                expect(value.index)
                    .toBe(as.Ordinal<Array<Scalar<Value>>>(5))
            })
        })

        describe('intensity', (): void => {
            let intensity: Feature<Intensity>
            beforeEach((): void => {
                intensity = note.intensity!
            })

            it('scales the intensity to zero', (): void => {
                expect(intensity.scalar)
                    .toBe(as.Scalar<Intensity>(0))
            })
        })
    })

    describe('when the pitch index is not zero', (): void => {
        let note: Note
        beforeEach((): void => {
            note = computeNote(as.ContourElement<PitchValue>([ 3, 6 ]))
        })

        describe('value', (): void => {
            let value: Feature<Value>
            beforeEach((): void => {
                value = note.value!
            })

            it('uses the value index, shifted by one to be zero-indexed, for the index', (): void => {
                expect(value.index)
                    .toBe(as.Ordinal<Array<Scalar<Value>>>(5))
            })
        })

        describe('intensity', (): void => {
            let intensity: Feature<Intensity>
            beforeEach((): void => {
                intensity = note.intensity!
            })

            it('scales the intensity to full power (so that it can potentially be adjusted later when style is mapped over)', (): void => {
                expect(intensity.scalar)
                    .toBe(as.Scalar<Intensity>(1))
            })
        })

        describe('pitch', (): void => {
            let pitch: Feature<Pitch>
            beforeEach((): void => {
                pitch = note.pitch!
            })

            it('uses the pitch index, shifted by one to be zero-indexed, for the index', (): void => {
                expect(pitch.index)
                    .toBe(as.Ordinal<Array<Scalar<Pitch>>>(2))
            })
        })
    })
})
