import repeatCall from '../../../../src/utilities/repeatCall'
import sequence from '../../../../src/utilities/sequence'
import { getZdaubyaosContours, zdaubGlisVariantContour } from '../contours/zdaubyaosContours'
import { Part } from '../types'
import { BarTarget, BlockStyle, Rendering } from '../zdaubyaosTypes'

const trueZdaubGlisPart: Part = sequence([
    repeatCall(() => getZdaubyaosContours(BlockStyle.NODLE, BarTarget.FIFTEEN, Rendering.GLIS), 3),
    getZdaubyaosContours(BlockStyle.LIMIN, BarTarget.FIFTEEN, Rendering.GLIS),
    getZdaubyaosContours(BlockStyle.SCEND, BarTarget.FIFTEEN, Rendering.GLIS),
    getZdaubyaosContours(BlockStyle.LIMIN, BarTarget.TWENTYFOUR, Rendering.GLIS),
    repeatCall(() => getZdaubyaosContours(BlockStyle.NODLE, BarTarget.TWENTYFOUR, Rendering.GLIS), 3),
])

const trueZdaubGlisVariantPart: Part = sequence([
    repeatCall(() => getZdaubyaosContours(BlockStyle.NODLE, BarTarget.FIFTEEN, Rendering.GLIS), 4),
    getZdaubyaosContours(BlockStyle.LIMIN, BarTarget.FIFTEEN, Rendering.GLIS),
    zdaubGlisVariantContour,
])

const trueZdaubTremPart: Part = sequence([
    repeatCall(() => getZdaubyaosContours(BlockStyle.NODLE, BarTarget.FIFTEEN, Rendering.TREM), 3),
    getZdaubyaosContours(BlockStyle.LIMIN, BarTarget.FIFTEEN, Rendering.TREM),
    getZdaubyaosContours(BlockStyle.SCEND, BarTarget.FIFTEEN, Rendering.TREM),
    getZdaubyaosContours(BlockStyle.LIMIN, BarTarget.TWENTYFOUR, Rendering.TREM),
    repeatCall(() => getZdaubyaosContours(BlockStyle.NODLE, BarTarget.TWENTYFOUR, Rendering.TREM), 3),
])

export {
    trueZdaubTremPart,
    trueZdaubGlisPart,
    trueZdaubGlisVariantPart,
}
