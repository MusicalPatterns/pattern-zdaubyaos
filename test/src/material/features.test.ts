import { Note, NoteFeature, PitchDuration, Scale } from '@musical-patterns/material'
import { Ordinal, Scalar, to } from '@musical-patterns/utilities'
import { computeNote } from '../../../src/indexForTest'

const DURATIONS_SCALE_INDEX: Ordinal<Scale> = to.Ordinal<Scale>(1)

describe('features', () => {
    describe('when the pitch index is negative 1', () => {
        let note: Note
        beforeEach(() => {
            note = computeNote(to.ContourElement<PitchDuration>([ -1, 6 ]))
        })

        describe('duration', () => {
            let duration: NoteFeature
            beforeEach(() => {
                duration = note.duration!
            })

            it('uses the durations scale', () => {
                expect(duration.scaleIndex)
                    .toBe(DURATIONS_SCALE_INDEX)
            })

            it('uses the duration index, shifted by one to be zero-indexed, for the index', () => {
                expect(duration.index)
                    .toBe(to.Ordinal<Scalar>(5))
            })
        })

        describe('gain', () => {
            let gain: NoteFeature
            beforeEach(() => {
                gain = note.gain!
            })

            it('scales the gain to zero', () => {
                expect(gain.scalar)
                    .toBe(to.Scalar<Scalar>(0))
            })
        })
    })

    describe('when the pitch index is not zero', () => {
        let note: Note
        beforeEach(() => {
            note = computeNote(to.ContourElement<PitchDuration>([ 3, 6 ]))
        })

        describe('duration', () => {
            let duration: NoteFeature
            beforeEach(() => {
                duration = note.duration!
            })

            it('uses the durations scale', () => {
                expect(duration.scaleIndex)
                    .toBe(DURATIONS_SCALE_INDEX)
            })

            it('uses the duration index, shifted by one to be zero-indexed, for the index', () => {
                expect(duration.index)
                    .toBe(to.Ordinal<Scalar>(5))
            })
        })

        describe('gain', () => {
            let gain: NoteFeature
            beforeEach(() => {
                gain = note.gain!
            })

            it('scales the gain to full power (so that it can potentially be adjusted later when style is mapped over)', () => {
                expect(gain.scalar)
                    .toBe(to.Scalar<Scalar>(1))
            })
        })

        describe('pitch', () => {
            let pitch: NoteFeature
            beforeEach(() => {
                pitch = note.pitch!
            })

            it('uses the pitch index, shifted by one to be zero-indexed, for the index', () => {
                expect(pitch.index)
                    .toBe(to.Ordinal<Scalar>(2))
            })
        })
    })
})
