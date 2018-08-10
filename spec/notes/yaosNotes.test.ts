import { BarTarget, BlockStyle, Rendering } from '../../src/zdaubyaosTypes'
import { getZdaubyaosNotes, zdaubyaosNotesByBarTargetBlockStyleThenRendering } from '../../src/notes/zdaubyaosNotes'

describe('yaos notes', () => {
    it('gets the right set of notes out of its stash', () => {
        expect(getZdaubyaosNotes(BlockStyle.DJIYAI, BarTarget.TWENTYFOUR, Rendering.SUMMER)).toEqual(
            zdaubyaosNotesByBarTargetBlockStyleThenRendering[BarTarget.TWENTYFOUR][BlockStyle.DJIYAI][Rendering.SUMMER],
        )
    })
})
