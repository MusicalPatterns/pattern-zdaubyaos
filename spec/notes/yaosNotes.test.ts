import calculateDuration from '../../../../src/utilities/calculateDuration'
import { yaosNotesByBarDurationBlockStyleThenRendering } from '../../src/notes/yaosNotes'
import { BarDuration, Notes, YaosRendering } from '../../src/types'

describe('yaos notes', () => {
    describe('of length 15', () => {
        it('is true that they all have length 15', () => {
            Object.values(yaosNotesByBarDurationBlockStyleThenRendering[BarDuration.FIFTEEN]).forEach(
                (notesByRendering: { [x in YaosRendering]: Notes }) => {
                    Object.values(notesByRendering).forEach((notes: Notes) => {
                        expect(calculateDuration(notes)).toBe(15)
                    })
                })
        })
    })

    describe('of length 24', () => {
        it('is true that they all have length 24', () => {
            Object.values(yaosNotesByBarDurationBlockStyleThenRendering[BarDuration.TWENTYFOUR]).forEach(
                (notesByRendering: { [x in YaosRendering]: Notes }) => {
                    Object.values(notesByRendering).forEach((notes: Notes) => {
                        expect(calculateDuration(notes)).toBe(24)
                    })
                })
        })
    })
})
