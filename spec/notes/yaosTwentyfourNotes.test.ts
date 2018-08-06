import calculateDuration from '../../../../src/calculateDuration'
import { yaosTwentyfourNotesByBlocksThenRendering } from '../../src/notes/yaosTwentyfourNotes'
import { Notes } from '../../src/types'

describe('yaos notes of length 24', () => {
    it('is true that they all have length 24', () => {
        // tslint:disable-next-line:max-line-length
        Object.values(yaosTwentyfourNotesByBlocksThenRendering).forEach((notesByRendering: {[index: string]: Notes}) => {
            Object.values(notesByRendering).forEach((notes: Notes) => {
                expect(calculateDuration(notes)).toBe(24)
            })
        })
    })
})
