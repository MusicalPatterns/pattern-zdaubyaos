import { Index, NotePropertySpec, NoteSpec, to } from '../../../../../src/indexForTest'
import { buildNoteSpec } from '../../../src/indexForTest'

const DURATIONS_AND_GAIN_SCALE_INDEX: Index = to.Index(6)

describe('build note spec', () => {
    describe('when the pitch index is zero', () => {
        let noteSpec: NoteSpec
        beforeEach(() => {
            noteSpec = buildNoteSpec([ to.Index(0), to.Index(6) ])
        })

        describe('duration', () => {
            let durationSpec: NotePropertySpec
            beforeEach(() => {
                durationSpec = noteSpec.durationSpec || {}
            })

            it('uses the flat scale', () => {
                expect(durationSpec.scaleIndex)
                    .toBe(DURATIONS_AND_GAIN_SCALE_INDEX)
            })

            it('uses the duration index, shifted by one to be zero-indexed, for the index', () => {
                expect(durationSpec.index)
                    .toBe(to.Index(5))
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

        describe('sustain', () => {
            let sustainSpec: NotePropertySpec
            beforeEach(() => {
                sustainSpec = noteSpec.sustainSpec || {}
            })

            it('uses the flat scale', () => {
                expect(sustainSpec.scaleIndex)
                    .toBe(DURATIONS_AND_GAIN_SCALE_INDEX)
            })

            it('uses the duration index, shifted by one to be zero-indexed, for the index', () => {
                expect(sustainSpec.index)
                    .toBe(to.Index(5))
            })

            it('offsets slightly (from total duration)', () => {
                expect(sustainSpec.offset)
                    .toBe(to.Offset(-0.1))
            })
        })
    })

    describe('when the pitch index is not zero', () => {
        let noteSpec: NoteSpec
        beforeEach(() => {
            noteSpec = buildNoteSpec([ to.Index(3), to.Index(6) ])
        })

        describe('duration', () => {
            let durationSpec: NotePropertySpec
            beforeEach(() => {
                durationSpec = noteSpec.durationSpec || {}
            })

            it('uses the flat scale', () => {
                expect(durationSpec.scaleIndex)
                    .toBe(DURATIONS_AND_GAIN_SCALE_INDEX)
            })

            it('uses the duration index, shifted by one to be zero-indexed, for the index', () => {
                expect(durationSpec.index)
                    .toBe(to.Index(5))
            })
        })

        describe('gain', () => {
            let gainSpec: NotePropertySpec
            beforeEach(() => {
                gainSpec = noteSpec.gainSpec || {}
            })

            it('scales the gain to full power', () => {
                expect(gainSpec.scalar)
                    .toBe(to.Scalar(1))
            })

            it('uses the flat scale', () => {
                expect(gainSpec.scaleIndex)
                    .toBe(DURATIONS_AND_GAIN_SCALE_INDEX)
            })
        })

        describe('pitch', () => {
            let pitchSpec: NotePropertySpec
            beforeEach(() => {
                pitchSpec = noteSpec.pitchSpec || {}
            })

            it('uses the pitch index, shifted by one to be zero-indexed, for the index', () => {
                expect(pitchSpec.index)
                    .toBe(to.Index(2))
            })
        })

        describe('sustain', () => {
            let sustainSpec: NotePropertySpec
            beforeEach(() => {
                sustainSpec = noteSpec.sustainSpec || {}
            })

            it('uses the flat scale', () => {
                expect(sustainSpec.scaleIndex)
                    .toBe(DURATIONS_AND_GAIN_SCALE_INDEX)
            })

            it('uses the duration index, shifted by one to be zero-indexed, for the index', () => {
                expect(sustainSpec.index)
                    .toBe(to.Index(5))
            })

            it('offsets slightly (from total duration)', () => {
                expect(sustainSpec.offset)
                    .toBe(to.Offset(-0.1))
            })
        })
    })
})
