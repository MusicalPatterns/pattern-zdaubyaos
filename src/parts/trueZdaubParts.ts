import repeatCall from '../../../../src/utilities/repeatCall'
import sequence from '../../../../src/utilities/sequence'
import getZdaubNotes from '../notes/getZdaubNotes'
import { zdaubGlisVariantNotes } from '../notes/zdaubNotes'
import { Part } from '../types'
import { BarDuration, ZdaubBlockStyle, ZdaubRendering } from '../zdaubyaosTypes'

const trueZdaubGlisPart: Part = sequence([
    repeatCall(() => getZdaubNotes(ZdaubBlockStyle.NODLE, BarDuration.FIFTEEN, ZdaubRendering.GLIS), 3),
    getZdaubNotes(ZdaubBlockStyle.LIMIN, BarDuration.FIFTEEN, ZdaubRendering.GLIS),
    getZdaubNotes(ZdaubBlockStyle.SCEND, BarDuration.FIFTEEN, ZdaubRendering.GLIS),
    getZdaubNotes(ZdaubBlockStyle.LIMIN, BarDuration.TWENTYFOUR, ZdaubRendering.GLIS),
    repeatCall(() => getZdaubNotes(ZdaubBlockStyle.NODLE, BarDuration.TWENTYFOUR, ZdaubRendering.GLIS), 3),
])

const trueZdaubGlisVariantPart: Part = sequence([
    repeatCall(() => getZdaubNotes(ZdaubBlockStyle.NODLE, BarDuration.FIFTEEN, ZdaubRendering.GLIS), 4),
    getZdaubNotes(ZdaubBlockStyle.LIMIN, BarDuration.FIFTEEN, ZdaubRendering.GLIS),
    zdaubGlisVariantNotes,
])

const trueZdaubTremPart: Part = sequence([
    repeatCall(() => getZdaubNotes(ZdaubBlockStyle.NODLE, BarDuration.FIFTEEN, ZdaubRendering.TREM), 3),
    getZdaubNotes(ZdaubBlockStyle.LIMIN, BarDuration.FIFTEEN, ZdaubRendering.TREM),
    getZdaubNotes(ZdaubBlockStyle.SCEND, BarDuration.FIFTEEN, ZdaubRendering.TREM),
    getZdaubNotes(ZdaubBlockStyle.LIMIN, BarDuration.TWENTYFOUR, ZdaubRendering.TREM),
    repeatCall(() => getZdaubNotes(ZdaubBlockStyle.NODLE, BarDuration.TWENTYFOUR, ZdaubRendering.TREM), 3),
])

export {
    trueZdaubTremPart,
    trueZdaubGlisPart,
    trueZdaubGlisVariantPart,
}
