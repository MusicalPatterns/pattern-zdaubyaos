import { manualNoteType } from '../src/noteTypes'

describe('note types', () => {
    describe('manual note type', () => {
        describe('when the pitch index is 0', () => {
            it('treats it as a rest, but still has the right duration', () => {
                expect(manualNoteType([0, 6])).toEqual({
                    duration: 6,
                    pitchIndex: 1,
                    gain: 0,
                    sustain: 5.9
                })
            })
        })

        describe('when the pitch is not 0', () => {
            it('has the right pitch and duration', () => {
                expect(manualNoteType([3, 4])).toEqual({
                    duration: 4,
                    pitchIndex: 3,
                    gain: 1,
                    sustain: 3.9
                })
            })
        })
    })
})
