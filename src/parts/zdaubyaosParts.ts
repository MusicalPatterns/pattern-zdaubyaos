import repeatCall from '../../../../src/utilities/repeatCall'
import sequence from '../../../../src/utilities/sequence'
import { getZdaubyaosContours, zdaubGlisVariantContour } from '../contours/zdaubyaosContours'
import { BarTarget, BlockStyle, Part, Rendering } from '../types'

type FormulaicTrueYaosPart = (fifteenRendering: Rendering, twentyfourRendering: Rendering) => Part

const trueFormulaicUmowchuwowiestToInaidjiyaiouzdPart: FormulaicTrueYaosPart = (
    fifteenRendering: Rendering, twentyfourRendering: Rendering): Part => sequence([
    repeatCall(() => getZdaubyaosContours(BlockStyle.CHUWOW, BarTarget.FIFTEEN, fifteenRendering), 4),
    repeatCall(() => getZdaubyaosContours(BlockStyle.IEST, BarTarget.FIFTEEN, fifteenRendering), 1),
    repeatCall(() => getZdaubyaosContours(BlockStyle.UMOW, BarTarget.FIFTEEN, fifteenRendering), 1),
    repeatCall(() => getZdaubyaosContours(BlockStyle.IEST, BarTarget.FIFTEEN, fifteenRendering), 1),
    repeatCall(() => getZdaubyaosContours(BlockStyle.UMOW, BarTarget.FIFTEEN, fifteenRendering), 1),
    repeatCall(() => getZdaubyaosContours(BlockStyle.DJIYAI, BarTarget.TWENTYFOUR, twentyfourRendering), 4),
])

const trueFormulaicInaidjiyaiouzdToUmowchuwowiestYaosPart: FormulaicTrueYaosPart = (
    fifteenRendering: Rendering, twentyfourRendering: Rendering): Part => sequence([
    repeatCall(() => getZdaubyaosContours(BlockStyle.DJIYAI, BarTarget.FIFTEEN, fifteenRendering), 4),
    repeatCall(() => getZdaubyaosContours(BlockStyle.OUZD, BarTarget.FIFTEEN, fifteenRendering), 1),
    repeatCall(() => getZdaubyaosContours(BlockStyle.INAI, BarTarget.FIFTEEN, fifteenRendering), 1),
    repeatCall(() => getZdaubyaosContours(BlockStyle.OUZD, BarTarget.FIFTEEN, fifteenRendering), 1),
    repeatCall(() => getZdaubyaosContours(BlockStyle.INAI, BarTarget.FIFTEEN, fifteenRendering), 1),
    repeatCall(() => getZdaubyaosContours(BlockStyle.CHUWOW, BarTarget.TWENTYFOUR, twentyfourRendering), 4),
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
    repeatCall(() => getZdaubyaosContours(BlockStyle.DJIYAI, BarTarget.FIFTEEN, Rendering.SPRINGY_SUMMER), 4),
    repeatCall(() => getZdaubyaosContours(BlockStyle.OUZD, BarTarget.FIFTEEN, Rendering.SPRINGY_SUMMER), 1),
    repeatCall(() => getZdaubyaosContours(BlockStyle.UMOW, BarTarget.FIFTEEN, Rendering.SPRINGY_SUMMER), 1),
    repeatCall(() => getZdaubyaosContours(BlockStyle.OUZD, BarTarget.FIFTEEN, Rendering.SPRINGY_SUMMER), 1),
    repeatCall(() => getZdaubyaosContours(BlockStyle.DJIYAI, BarTarget.FIFTEEN, Rendering.SPRINGY_SUMMER), 1),
    repeatCall(() => getZdaubyaosContours(
        BlockStyle.CHUWOW,
        BarTarget.TWENTYFOUR,
        Rendering.SUMMERY_SPRING,
    ),         4),
])

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
    trueYaosUmowchuwowiestSpringToSummerPart,
    trueYaosUmowchuwowiestSummerToSpringPart,
    trueYaosInaidjiyaiouzdSummerToSpringPart,
    trueYaosSpringySummerStraightIntoZdaubInaidjiyaiouzdPart,
    trueZdaubTremPart,
    trueZdaubGlisPart,
    trueZdaubGlisVariantPart,
}
