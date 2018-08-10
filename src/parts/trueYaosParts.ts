import repeatCall from '../../../../src/utilities/repeatCall'
import sequence from '../../../../src/utilities/sequence'
import { getZdaubyaosNotes } from '../notes/zdaubyaosNotes'
import { Part } from '../types'
import { BarTarget, BlockStyle, Rendering } from '../zdaubyaosTypes'

type FormulaicTrueYaosPart = (fifteenRendering: Rendering, twentyfourRendering: Rendering) => Part

const trueFormulaicUmowchuwowiestToInaidjiyaiouzdPart: FormulaicTrueYaosPart = (
    fifteenRendering: Rendering, twentyfourRendering: Rendering): Part => sequence([
    repeatCall(() => getZdaubyaosNotes(BlockStyle.CHUWOW, BarTarget.FIFTEEN, fifteenRendering), 4),
    repeatCall(() => getZdaubyaosNotes(BlockStyle.IEST, BarTarget.FIFTEEN, fifteenRendering), 1),
    repeatCall(() => getZdaubyaosNotes(BlockStyle.UMOW, BarTarget.FIFTEEN, fifteenRendering), 1),
    repeatCall(() => getZdaubyaosNotes(BlockStyle.IEST, BarTarget.FIFTEEN, fifteenRendering), 1),
    repeatCall(() => getZdaubyaosNotes(BlockStyle.UMOW, BarTarget.FIFTEEN, fifteenRendering), 1),
    repeatCall(() => getZdaubyaosNotes(BlockStyle.DJIYAI, BarTarget.TWENTYFOUR, twentyfourRendering), 4),
])

const trueFormulaicInaidjiyaiouzdToUmowchuwowiestYaosPart: FormulaicTrueYaosPart = (
    fifteenRendering: Rendering, twentyfourRendering: Rendering): Part => sequence([
    repeatCall(() => getZdaubyaosNotes(BlockStyle.DJIYAI, BarTarget.FIFTEEN, fifteenRendering), 4),
    repeatCall(() => getZdaubyaosNotes(BlockStyle.OUZD, BarTarget.FIFTEEN, fifteenRendering), 1),
    repeatCall(() => getZdaubyaosNotes(BlockStyle.INAI, BarTarget.FIFTEEN, fifteenRendering), 1),
    repeatCall(() => getZdaubyaosNotes(BlockStyle.OUZD, BarTarget.FIFTEEN, fifteenRendering), 1),
    repeatCall(() => getZdaubyaosNotes(BlockStyle.INAI, BarTarget.FIFTEEN, fifteenRendering), 1),
    repeatCall(() => getZdaubyaosNotes(BlockStyle.CHUWOW, BarTarget.TWENTYFOUR, twentyfourRendering), 4),
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
    repeatCall(() => getZdaubyaosNotes(
        BlockStyle.DJIYAI,
        BarTarget.FIFTEEN,
        Rendering.SPRINGY_SUMMER,
    ),         4),
    repeatCall(() => getZdaubyaosNotes(
        BlockStyle.OUZD,
        BarTarget.FIFTEEN,
        Rendering.SPRINGY_SUMMER,
    ),         1),
    repeatCall(() => getZdaubyaosNotes(
        BlockStyle.UMOW,
        BarTarget.FIFTEEN,
        Rendering.SPRINGY_SUMMER,
    ),         1),
    repeatCall(() => getZdaubyaosNotes(
        BlockStyle.OUZD,
        BarTarget.FIFTEEN,
        Rendering.SPRINGY_SUMMER,
    ),         1),
    repeatCall(() => getZdaubyaosNotes(
        BlockStyle.DJIYAI,
        BarTarget.FIFTEEN,
        Rendering.SPRINGY_SUMMER,
    ),         1),
    repeatCall(() => getZdaubyaosNotes(
        BlockStyle.CHUWOW,
        BarTarget.TWENTYFOUR,
        Rendering.SUMMERY_SPRING,
    ),         4),
])

export {
    trueYaosUmowchuwowiestSpringToSummerPart,
    trueYaosUmowchuwowiestSummerToSpringPart,
    trueYaosInaidjiyaiouzdSummerToSpringPart,
    trueYaosSpringySummerStraightIntoZdaubInaidjiyaiouzdPart,
}
