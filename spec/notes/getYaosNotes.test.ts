import getYaosNotes from '../../src/notes/getYaosNotes'
import { yaosNotesByDurationBlocksThenRendering } from '../../src/notes/yaosNotes'

describe('get yaos notes', () => {
    it('gets the right set of notes out of its stash', () => {
        expect(getYaosNotes({
            blockresolution: 'midirregular',
            blockstrategy: 'inaidjiyaiouzd',
            duration: 'twentyfour',
            rendering: 'summer',
        })).toEqual(
            yaosNotesByDurationBlocksThenRendering.twentyfour.djiyai.summer,
        )
    })
})
