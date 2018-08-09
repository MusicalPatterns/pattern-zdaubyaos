import { manualNoteType } from '../src/noteTypes'
import * as to from '../../../src/utilities/to'

describe('note types', () => {
    describe('manual note type', () => {
        describe('when the pitch index is 0', () => {
            it('treats it as a rest, but still has the right duration', () => {
                expect(manualNoteType([to.Index(0), to.Time(6)])).toEqual({
                    duration: to.Time(6),
                    pitchIndex: to.Index(1),
                    gain: to.Scalar(0),
                    sustain: to.Time(5.9)
                })
            })
        })

        describe('when the pitch is not 0', () => {
            it('has the right pitch and duration', () => {
                expect(manualNoteType([to.Index(3), to.Time(4)])).toEqual({
                    duration: to.Time(4),
                    pitchIndex: to.Index(3),
                    gain: to.Scalar(1),
                    sustain: to.Time(3.9)
                })
            })
        })
    })
})
