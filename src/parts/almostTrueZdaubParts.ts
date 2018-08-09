import repeatCall from '../../../../src/utilities/repeatCall'
import sequence from '../../../../src/utilities/sequence'
import { backboneFifteenNotes, backboneTwentyfourNotes } from '../notes/otherNotes'
import { getZdaubNotes } from '../notes/zdaubNotes'
import { Part } from '../types'
import { BarDuration, ZdaubBlockStyle, ZdaubRendering } from '../zdaubyaosTypes'

const almostTrueExtendedEndingZdaubPart: (rendering: ZdaubRendering) => Part = (rendering: ZdaubRendering): Part =>
    sequence([
        repeatCall(() => getZdaubNotes(ZdaubBlockStyle.NODLE, BarDuration.FIFTEEN, rendering), 3),
        getZdaubNotes(ZdaubBlockStyle.LIMIN, BarDuration.FIFTEEN, rendering),
        getZdaubNotes(ZdaubBlockStyle.SCEND, BarDuration.FIFTEEN, rendering),
        getZdaubNotes(ZdaubBlockStyle.LIMIN, BarDuration.TWENTYFOUR, rendering),
        repeatCall(() => getZdaubNotes(ZdaubBlockStyle.NODLE, BarDuration.TWENTYFOUR, rendering), 5),
    ])
const almostTrueExtendedEndingZdaubTremPart: Part = almostTrueExtendedEndingZdaubPart(ZdaubRendering.TREM)
const almostTrueExtendedEndingZdaubBonyPart: Part = almostTrueExtendedEndingZdaubPart(ZdaubRendering.BONY)
const almostTrueExtendedEndingZdaubGlisPart: Part = almostTrueExtendedEndingZdaubPart(ZdaubRendering.GLIS)

const almostTrueYetOfBackbonePart: Part = sequence([
    repeatCall(() => backboneFifteenNotes, 8),
    repeatCall(() => backboneTwentyfourNotes, 3),
])
const almostTrueZdaubBonyWithSuperinscapePart: Part = sequence([
    repeatCall(() => getZdaubNotes(ZdaubBlockStyle.NODLE, BarDuration.FIFTEEN, ZdaubRendering.BONY), 3),
    getZdaubNotes(ZdaubBlockStyle.LIMIN, BarDuration.FIFTEEN, ZdaubRendering.BONY),
    getZdaubNotes(ZdaubBlockStyle.SCEND, BarDuration.FIFTEEN, ZdaubRendering.BONY),
    getZdaubNotes(ZdaubBlockStyle.SCEND, BarDuration.TWENTYFOUR, ZdaubRendering.BONY),
    getZdaubNotes(ZdaubBlockStyle.LIMIN, BarDuration.TWENTYFOUR, ZdaubRendering.BONY),
    getZdaubNotes(ZdaubBlockStyle.NODLE, BarDuration.TWENTYFOUR, ZdaubRendering.BONY),
])

export {
    almostTrueExtendedEndingZdaubTremPart,
    almostTrueExtendedEndingZdaubBonyPart,
    almostTrueExtendedEndingZdaubGlisPart,
    almostTrueYetOfBackbonePart,
    almostTrueZdaubBonyWithSuperinscapePart,
}
