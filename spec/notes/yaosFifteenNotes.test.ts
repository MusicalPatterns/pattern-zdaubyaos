import calculateDuration from '../../../../src/calculateDuration'
import { yaosFifteenNotesByBlocksThenRendering } from '../../src/notes/yaosFifteenNotes'
import { Notes } from '../../src/types'

describe('yaos notes of length 15', () => {
    it('is true that they all have length 15', () => {
        Object.values(yaosFifteenNotesByBlocksThenRendering).forEach((notesByRendering: {[index: string]: Notes}) => {
            Object.values(notesByRendering).forEach((notes: Notes) => {
                expect(calculateDuration(notes)).toBe(15)
            })
        })
    })
})
