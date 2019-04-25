import { Note, NoteFeature, PitchDuration, STANDARD_DURATION_SCALE_INDEX } from '@musical-patterns/material'
import { as, Duration, Gain, Pitch, Scalar } from '@musical-patterns/utilities'
import { computeNote } from '../../../src/indexForTest'

describe('features', () => {
    describe('when the pitch index is negative 1', () => {
        let note: Note
        beforeEach(() => {
            note = computeNote(as.ContourElement<PitchDuration>([ -1, 6 ]))
        })

        describe('duration', () => {
            let duration: NoteFeature<Duration>
            beforeEach(() => {
                duration = note.duration!
            })

            it('uses the durations scale', () => {
                expect(duration.scaleIndex)
                    .toBe(STANDARD_DURATION_SCALE_INDEX)
            })

            it('uses the duration index, shifted by one to be zero-indexed, for the index', () => {
                expect(duration.index)
                    .toBe(as.Ordinal<Array<Scalar<Duration>>>(5))
            })
        })

        describe('gain', () => {
            let gain: NoteFeature<Gain>
            beforeEach(() => {
                gain = note.gain!
            })

            it('scales the gain to zero', () => {
                expect(gain.scalar)
                    .toBe(as.Scalar<Gain>(0))
            })
        })
    })

    describe('when the pitch index is not zero', () => {
        let note: Note
        beforeEach(() => {
            note = computeNote(as.ContourElement<PitchDuration>([ 3, 6 ]))
        })

        describe('duration', () => {
            let duration: NoteFeature<Duration>
            beforeEach(() => {
                duration = note.duration!
            })

            it('uses the durations scale', () => {
                expect(duration.scaleIndex)
                    .toBe(STANDARD_DURATION_SCALE_INDEX)
            })

            it('uses the duration index, shifted by one to be zero-indexed, for the index', () => {
                expect(duration.index)
                    .toBe(as.Ordinal<Array<Scalar<Duration>>>(5))
            })
        })

        describe('gain', () => {
            let gain: NoteFeature<Gain>
            beforeEach(() => {
                gain = note.gain!
            })

            it('scales the gain to full power (so that it can potentially be adjusted later when style is mapped over)', () => {
                expect(gain.scalar)
                    .toBe(as.Scalar<Gain>(1))
            })
        })

        describe('pitch', () => {
            let pitch: NoteFeature<Pitch>
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
