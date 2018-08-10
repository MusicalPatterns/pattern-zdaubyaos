import repeatCall from '../../../../src/utilities/repeatCall'
import sequence from '../../../../src/utilities/sequence'
import { getZdaubyaosNotes, zdaubGlisVariantNotes } from '../notes/zdaubyaosNotes'
import { Part } from '../types'
import { BarTarget, BlockStyle, Rendering } from '../zdaubyaosTypes'

const trueZdaubGlisPart: Part = sequence([
    repeatCall(() => getZdaubyaosNotes(BlockStyle.NODLE, BarTarget.FIFTEEN, Rendering.GLIS), 3),
    getZdaubyaosNotes(BlockStyle.LIMIN, BarTarget.FIFTEEN, Rendering.GLIS),
    getZdaubyaosNotes(BlockStyle.SCEND, BarTarget.FIFTEEN, Rendering.GLIS),
    getZdaubyaosNotes(BlockStyle.LIMIN, BarTarget.TWENTYFOUR, Rendering.GLIS),
    repeatCall(() => getZdaubyaosNotes(BlockStyle.NODLE, BarTarget.TWENTYFOUR, Rendering.GLIS), 3),
])

const trueZdaubGlisVariantPart: Part = sequence([
    repeatCall(() => getZdaubyaosNotes(BlockStyle.NODLE, BarTarget.FIFTEEN, Rendering.GLIS), 4),
    getZdaubyaosNotes(BlockStyle.LIMIN, BarTarget.FIFTEEN, Rendering.GLIS),
    zdaubGlisVariantNotes,
])

const trueZdaubTremPart: Part = sequence([
    repeatCall(() => getZdaubyaosNotes(BlockStyle.NODLE, BarTarget.FIFTEEN, Rendering.TREM), 3),
    getZdaubyaosNotes(BlockStyle.LIMIN, BarTarget.FIFTEEN, Rendering.TREM),
    getZdaubyaosNotes(BlockStyle.SCEND, BarTarget.FIFTEEN, Rendering.TREM),
    getZdaubyaosNotes(BlockStyle.LIMIN, BarTarget.TWENTYFOUR, Rendering.TREM),
    repeatCall(() => getZdaubyaosNotes(BlockStyle.NODLE, BarTarget.TWENTYFOUR, Rendering.TREM), 3),
])

export {
    trueZdaubTremPart,
    trueZdaubGlisPart,
    trueZdaubGlisVariantPart,
}
