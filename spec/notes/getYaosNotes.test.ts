import getYaosNotes from '../../src/notes/getYaosNotes'
import { yaosNotesByDurationBlocksThenRendering } from '../../src/notes/yaosNotes'

describe('get yaos notes', () => {
    it('gets the right set of notes out of its stash', () => {
        expect(
            getYaosNotes('midirregular', 'inaidjiyaiouzd', 'twentyfour', 'summer')
        ).toEqual(
            yaosNotesByDurationBlocksThenRendering.twentyfour.djiyai.summer,
        )
    })
})
