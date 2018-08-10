import repeatCall from '../../../../src/utilities/repeatCall'
import sequence from '../../../../src/utilities/sequence'
import { backboneFifteenNotes, backboneTwentyfourNotes } from '../notes/otherNotes'
import { getZdaubyaosNotes } from '../notes/zdaubyaosNotes'
import { Part } from '../types'
import { BarTarget, BlockStyle, Rendering } from '../zdaubyaosTypes'

const almostTrueExtendedEndingZdaubPart:
    (rendering: Rendering) => Part = (rendering: Rendering): Part =>
    sequence([
        repeatCall(() => getZdaubyaosNotes(BlockStyle.NODLE, BarTarget.FIFTEEN, rendering), 3),
        getZdaubyaosNotes(BlockStyle.LIMIN, BarTarget.FIFTEEN, rendering),
        getZdaubyaosNotes(BlockStyle.SCEND, BarTarget.FIFTEEN, rendering),
        getZdaubyaosNotes(BlockStyle.LIMIN, BarTarget.TWENTYFOUR, rendering),
        repeatCall(() => getZdaubyaosNotes(BlockStyle.NODLE, BarTarget.TWENTYFOUR, rendering), 5),
    ])
const almostTrueExtendedEndingZdaubTremPart: Part = almostTrueExtendedEndingZdaubPart(Rendering.TREM)
const almostTrueExtendedEndingZdaubBonyPart: Part = almostTrueExtendedEndingZdaubPart(Rendering.BONY)
const almostTrueExtendedEndingZdaubGlisPart: Part = almostTrueExtendedEndingZdaubPart(Rendering.GLIS)

const almostTrueYetOfBackbonePart: Part = sequence([
    repeatCall(() => backboneFifteenNotes, 8),
    repeatCall(() => backboneTwentyfourNotes, 3),
])
const almostTrueZdaubBonyWithSuperinscapePart: Part = sequence([
    repeatCall(() => getZdaubyaosNotes(BlockStyle.NODLE, BarTarget.FIFTEEN, Rendering.BONY), 3),
    getZdaubyaosNotes(BlockStyle.LIMIN, BarTarget.FIFTEEN, Rendering.BONY),
    getZdaubyaosNotes(BlockStyle.SCEND, BarTarget.FIFTEEN, Rendering.BONY),
    getZdaubyaosNotes(BlockStyle.SCEND, BarTarget.TWENTYFOUR, Rendering.BONY),
    getZdaubyaosNotes(BlockStyle.LIMIN, BarTarget.TWENTYFOUR, Rendering.BONY),
    getZdaubyaosNotes(BlockStyle.NODLE, BarTarget.TWENTYFOUR, Rendering.BONY),
])

export {
    almostTrueExtendedEndingZdaubTremPart,
    almostTrueExtendedEndingZdaubBonyPart,
    almostTrueExtendedEndingZdaubGlisPart,
    almostTrueYetOfBackbonePart,
    almostTrueZdaubBonyWithSuperinscapePart,
}
