import repeatCall from '../../../../src/utilities/repeatCall'
import sequence from '../../../../src/utilities/sequence'
import * as to from '../../../../src/utilities/to'
import { getZdaubyaosContours, zdaubGlisVariantContour } from '../contours/zdaubyaosContours'
import { BarTarget, BlockStyle, Part, Rendering } from '../types'

type FormulaicTrueYaosPart = (fifteenRendering: Rendering, twentyfourRendering: Rendering) => Part

const trueFormulaicUmowchuwowiestToInaidjiyaiouzdPart: FormulaicTrueYaosPart = (
    fifteenRendering: Rendering, twentyfourRendering: Rendering): Part => sequence([
    repeatCall(() => getZdaubyaosContours(BlockStyle.CHUWOW, BarTarget.FIFTEEN, fifteenRendering), to.Count(4)),
    repeatCall(() => getZdaubyaosContours(BlockStyle.IEST, BarTarget.FIFTEEN, fifteenRendering), to.Count(1)),
    repeatCall(() => getZdaubyaosContours(BlockStyle.UMOW, BarTarget.FIFTEEN, fifteenRendering), to.Count(1)),
    repeatCall(() => getZdaubyaosContours(BlockStyle.IEST, BarTarget.FIFTEEN, fifteenRendering), to.Count(1)),
    repeatCall(() => getZdaubyaosContours(BlockStyle.UMOW, BarTarget.FIFTEEN, fifteenRendering), to.Count(1)),
    repeatCall(() => getZdaubyaosContours(BlockStyle.DJIYAI, BarTarget.TWENTYFOUR, twentyfourRendering), to.Count(4)),
])

const trueFormulaicInaidjiyaiouzdToUmowchuwowiestYaosPart: FormulaicTrueYaosPart = (
    fifteenRendering: Rendering, twentyfourRendering: Rendering): Part => sequence([
    repeatCall(() => getZdaubyaosContours(BlockStyle.DJIYAI, BarTarget.FIFTEEN, fifteenRendering), to.Count(4)),
    repeatCall(() => getZdaubyaosContours(BlockStyle.OUZD, BarTarget.FIFTEEN, fifteenRendering), to.Count(1)),
    repeatCall(() => getZdaubyaosContours(BlockStyle.INAI, BarTarget.FIFTEEN, fifteenRendering), to.Count(1)),
    repeatCall(() => getZdaubyaosContours(BlockStyle.OUZD, BarTarget.FIFTEEN, fifteenRendering), to.Count(1)),
    repeatCall(() => getZdaubyaosContours(BlockStyle.INAI, BarTarget.FIFTEEN, fifteenRendering), to.Count(1)),
    repeatCall(() => getZdaubyaosContours(BlockStyle.CHUWOW, BarTarget.TWENTYFOUR, twentyfourRendering), to.Count(4)),
])

const trueYaosUmowchuwowiestSpringToSummerPart: Part = trueFormulaicUmowchuwowiestToInaidjiyaiouzdPart(
    Rendering.SPRING, Rendering.SUMMER,
)

const trueYaosUmowchuwowiestSummerToSpringPart: Part = trueFormulaicUmowchuwowiestToInaidjiyaiouzdPart(
    Rendering.SUMMER, Rendering.SPRING,
)

const trueYaosInaidjiyaiouzdSummerToSpringPart: Part = trueFormulaicInaidjiyaiouzdToUmowchuwowiestYaosPart(
    Rendering.SUMMER, Rendering.SPRING,
)

const trueYaosSpringySummerStraightIntoZdaubInaidjiyaiouzdPart: Part = sequence([
    repeatCall(() => getZdaubyaosContours(BlockStyle.DJIYAI, BarTarget.FIFTEEN, Rendering.SPRINGY_SUMMER), to.Count(4)),
    repeatCall(() => getZdaubyaosContours(BlockStyle.OUZD, BarTarget.FIFTEEN, Rendering.SPRINGY_SUMMER), to.Count(1)),
    repeatCall(() => getZdaubyaosContours(BlockStyle.UMOW, BarTarget.FIFTEEN, Rendering.SPRINGY_SUMMER), to.Count(1)),
    repeatCall(() => getZdaubyaosContours(BlockStyle.OUZD, BarTarget.FIFTEEN, Rendering.SPRINGY_SUMMER), to.Count(1)),
    repeatCall(() => getZdaubyaosContours(BlockStyle.DJIYAI, BarTarget.FIFTEEN, Rendering.SPRINGY_SUMMER), to.Count(1)),
    repeatCall(() => getZdaubyaosContours(
        BlockStyle.CHUWOW,
        BarTarget.TWENTYFOUR,
        Rendering.SUMMERY_SPRING,
    ),         to.Count(4)),
])

const trueZdaubGlisPart: Part = sequence([
    repeatCall(() => getZdaubyaosContours(BlockStyle.NODLE, BarTarget.FIFTEEN, Rendering.GLIS), to.Count(3)),
    getZdaubyaosContours(BlockStyle.LIMIN, BarTarget.FIFTEEN, Rendering.GLIS),
    getZdaubyaosContours(BlockStyle.SCEND, BarTarget.FIFTEEN, Rendering.GLIS),
    getZdaubyaosContours(BlockStyle.LIMIN, BarTarget.TWENTYFOUR, Rendering.GLIS),
    repeatCall(() => getZdaubyaosContours(BlockStyle.NODLE, BarTarget.TWENTYFOUR, Rendering.GLIS), to.Count(3)),
])

const trueZdaubGlisVariantPart: Part = sequence([
    repeatCall(() => getZdaubyaosContours(BlockStyle.NODLE, BarTarget.FIFTEEN, Rendering.GLIS), to.Count(4)),
    getZdaubyaosContours(BlockStyle.LIMIN, BarTarget.FIFTEEN, Rendering.GLIS),
    zdaubGlisVariantContour,
])

const trueZdaubTremPart: Part = sequence([
    repeatCall(() => getZdaubyaosContours(BlockStyle.NODLE, BarTarget.FIFTEEN, Rendering.TREM), to.Count(3)),
    getZdaubyaosContours(BlockStyle.LIMIN, BarTarget.FIFTEEN, Rendering.TREM),
    getZdaubyaosContours(BlockStyle.SCEND, BarTarget.FIFTEEN, Rendering.TREM),
    getZdaubyaosContours(BlockStyle.LIMIN, BarTarget.TWENTYFOUR, Rendering.TREM),
    repeatCall(() => getZdaubyaosContours(BlockStyle.NODLE, BarTarget.TWENTYFOUR, Rendering.TREM), to.Count(3)),
])

export {
    trueYaosUmowchuwowiestSpringToSummerPart,
    trueYaosUmowchuwowiestSummerToSpringPart,
    trueYaosInaidjiyaiouzdSummerToSpringPart,
    trueYaosSpringySummerStraightIntoZdaubInaidjiyaiouzdPart,
    trueZdaubTremPart,
    trueZdaubGlisPart,
    trueZdaubGlisVariantPart,
}
