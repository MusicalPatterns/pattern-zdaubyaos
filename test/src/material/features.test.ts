import { Feature, Note, PitchValue } from '@musical-patterns/material'
import { as, Intensity, Pitch, Scalar, Value } from '@musical-patterns/utilities'
import { computeNote } from '../../../src/indexForTest'

describe('features', () => {
    describe('when the pitch index is negative 1', () => {
        let note: Note
        beforeEach(() => {
            note = computeNote(as.ContourElement<PitchValue>([ -1, 6 ]))
        })

        describe('value', () => {
            let value: Feature<Value>
            beforeEach(() => {
                value = note.value!
            })

            it('uses the value index, shifted by one to be zero-indexed, for the index', () => {
                expect(value.index)
                    .toBe(as.Ordinal<Array<Scalar<Value>>>(5))
            })
        })

        describe('intensity', () => {
            let intensity: Feature<Intensity>
            beforeEach(() => {
                intensity = note.intensity!
            })

            it('scales the intensity to zero', () => {
                expect(intensity.scalar)
                    .toBe(as.Scalar<Intensity>(0))
            })
        })
    })

    describe('when the pitch index is not zero', () => {
        let note: Note
        beforeEach(() => {
            note = computeNote(as.ContourElement<PitchValue>([ 3, 6 ]))
        })

        describe('value', () => {
            let value: Feature<Value>
            beforeEach(() => {
                value = note.value!
            })

            it('uses the value index, shifted by one to be zero-indexed, for the index', () => {
                expect(value.index)
                    .toBe(as.Ordinal<Array<Scalar<Value>>>(5))
            })
        })

        describe('intensity', () => {
            let intensity: Feature<Intensity>
            beforeEach(() => {
                intensity = note.intensity!
            })

            it('scales the intensity to full power (so that it can potentially be adjusted later when style is mapped over)', () => {
                expect(intensity.scalar)
                    .toBe(as.Scalar<Intensity>(1))
            })
        })

        describe('pitch', () => {
            let pitch: Feature<Pitch>
            beforeEach(() => {
                pitch = note.pitch!
            })

            it('uses the pitch index, shifted by one to be zero-indexed, for the index', () => {
                expect(pitch.index)
                    .toBe(as.Ordinal<Array<Scalar<Pitch>>>(2))
            })
        })
    })
})
