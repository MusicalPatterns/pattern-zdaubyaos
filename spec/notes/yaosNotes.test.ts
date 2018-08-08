import calculateDuration from '../../../../src/utilities/calculateDuration'
import { yaosNotesByBarDurationBlockStyleThenRendering } from '../../src/notes/yaosNotes'
import { Notes } from '../../src/types'

describe('yaos notes', () => {
    describe('of length 15', () => {
        it('is true that they all have length 15', () => {
            Object.values(yaosNotesByBarDurationBlockStyleThenRendering.fifteen).forEach(
                (notesByRendering: { [index: string]: Notes }) => {
                    Object.values(notesByRendering).forEach((notes: Notes) => {
                        expect(calculateDuration(notes)).toBe(15)
                    })
                })
        })
    })

    describe('of length 24', () => {
        it('is true that they all have length 24', () => {
            Object.values(yaosNotesByBarDurationBlockStyleThenRendering.twentyfour).forEach(
                (notesByRendering: { [index: string]: Notes }) => {
                    Object.values(notesByRendering).forEach((notes: Notes) => {
                        expect(calculateDuration(notes)).toBe(24)
                    })
                })
        })
    })
})
