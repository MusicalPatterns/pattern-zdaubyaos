import { Notes } from '../src/types'
import adjustGain from '../src/adjustGain'

describe('adjust gain', () => {
    it('adjusts the gain of every note', () => {
        const notes: Notes = [
            {
                duration: 1,
                pitch: 1,
                sustain: 1,
                gain: 1,
            },
            {
                duration: 1,
                pitch: 1,
                sustain: 1,
                gain: 0.5,
            },
            {
                duration: 1,
                pitch: 1,
                sustain: 1,
                gain: 0.25,
            },
        ]

        const expectedNotes: Notes = [
            {
                duration: 1,
                pitch: 1,
                sustain: 1,
                gain: 0.5,
            },
            {
                duration: 1,
                pitch: 1,
                sustain: 1,
                gain: 0.25,
            },
            {
                duration: 1,
                pitch: 1,
                sustain: 1,
                gain: 0.125,
            },
        ]

        expect(adjustGain(notes, 0.5)).toEqual(expectedNotes)
    })
})
