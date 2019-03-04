import { NotePropertySpec, NoteSpec } from '@musical-patterns/compiler'
import { PitchDuration, SILENT } from '@musical-patterns/pattern'
import { Ordinal, to } from '@musical-patterns/utilities'
import { buildNoteSpec } from '../../../src/indexForTest'

const DURATIONS_SCALE_INDEX: Ordinal = to.Ordinal(1)

describe('note specs', () => {
    describe('when the pitch index is negative 1', () => {
        let noteSpec: NoteSpec
        beforeEach(() => {
            noteSpec = buildNoteSpec(to.ContourElement<PitchDuration>([ -1, 6 ]))
        })

        describe('duration', () => {
            let durationSpec: NotePropertySpec
            beforeEach(() => {
                durationSpec = noteSpec.durationSpec || {}
            })

            it('uses the durations scale', () => {
                expect(durationSpec.scaleIndex)
                    .toBe(DURATIONS_SCALE_INDEX)
            })

            it('uses the duration index, shifted by one to be zero-indexed, for the index', () => {
                expect(durationSpec.index)
                    .toBe(to.Ordinal(5))
            })
        })

        describe('gain', () => {
            let gainSpec: NotePropertySpec
            beforeEach(() => {
                gainSpec = noteSpec.gainSpec || {}
            })

            it('scales the gain to zero', () => {
                expect(gainSpec.scalar)
                    .toBe(to.Scalar(0))
            })
        })
    })

    describe('when the pitch index is not zero', () => {
        let noteSpec: NoteSpec
        beforeEach(() => {
            noteSpec = buildNoteSpec(to.ContourElement<PitchDuration>([ 3, 6 ]))
        })

        describe('duration', () => {
            let durationSpec: NotePropertySpec
            beforeEach(() => {
                durationSpec = noteSpec.durationSpec || {}
            })

            it('uses the durations scale', () => {
                expect(durationSpec.scaleIndex)
                    .toBe(DURATIONS_SCALE_INDEX)
            })

            it('uses the duration index, shifted by one to be zero-indexed, for the index', () => {
                expect(durationSpec.index)
                    .toBe(to.Ordinal(5))
            })
        })

        describe('gain', () => {
            let gainSpec: NotePropertySpec
            beforeEach(() => {
                gainSpec = noteSpec.gainSpec || {}
            })

            it('scales the gain to full power (so that it can potentially be adjusted later when style is mapped over)', () => {
                expect(gainSpec.scalar)
                    .toBe(to.Scalar(1))
            })
        })

        describe('pitch', () => {
            let pitchSpec: NotePropertySpec
            beforeEach(() => {
                pitchSpec = noteSpec.pitchSpec || {}
            })

            it('uses the pitch index, shifted by one to be zero-indexed, for the index', () => {
                expect(pitchSpec.index)
                    .toBe(to.Ordinal(2))
            })
        })
    })
})
