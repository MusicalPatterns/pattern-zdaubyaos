import getYaosNotes from '../../src/notes/getYaosNotes'
import { yaosNotesByDurationBlocksThenRendering } from '../../src/notes/yaosNotes'
import { BarDuration, BlockResolution, BlockStrategy, Rendering } from '../../src/types'

describe('get yaos notes', () => {
    it('gets the right set of notes out of its stash', () => {
        expect(
            getYaosNotes(BlockResolution.MIDIRREGULAR, BlockStrategy.INAIDJIYAIOUZD, BarDuration.TWENTYFOUR, Rendering.SUMMER)
        ).toEqual(
            yaosNotesByDurationBlocksThenRendering.twentyfour.djiyai.summer,
        )
    })
})
