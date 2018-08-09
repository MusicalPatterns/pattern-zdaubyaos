import getYaosNotes from '../../src/notes/getYaosNotes'
import { yaosNotesByBarDurationBlockStyleThenRendering } from '../../src/notes/yaosNotes'
import { BarDuration, YaosBlockResolution, YaosBlockStrategy, YaosBlockStyle, YaosRendering } from '../../src/zdaubyaosTypes'

describe('get yaos notes', () => {
    it('gets the right set of notes out of its stash', () => {
        expect(
            getYaosNotes(YaosBlockResolution.MIDIRREG, YaosBlockStrategy.INAIDJIYAIOUZD, BarDuration.TWENTYFOUR, YaosRendering.SUMMER),
        ).toEqual(
            yaosNotesByBarDurationBlockStyleThenRendering[BarDuration.TWENTYFOUR][YaosBlockStyle.DJIYAI][YaosRendering.SUMMER],
        )
    })
})
