import repeatCall from '../../../../src/utilities/repeatCall'
import sequence from '../../../../src/utilities/sequence'
import { getYaosNotes } from '../notes/yaosNotes'
import { Part } from '../types'
import { BarDuration, YaosBlockStyle, YaosRendering } from '../zdaubyaosTypes'

type FormulaicTrueYaosPart = (fifteenRendering: YaosRendering, twentyfourRendering: YaosRendering) => Part

const trueFormulaicUmowchuwowiestToInaidjiyaiouzdPart: FormulaicTrueYaosPart = (
    fifteenRendering: YaosRendering, twentyfourRendering: YaosRendering): Part => sequence([
    repeatCall(() => getYaosNotes(YaosBlockStyle.CHUWOW, BarDuration.FIFTEEN, fifteenRendering), 4),
    repeatCall(() => getYaosNotes(YaosBlockStyle.IEST, BarDuration.FIFTEEN, fifteenRendering), 1),
    repeatCall(() => getYaosNotes(YaosBlockStyle.UMOW, BarDuration.FIFTEEN, fifteenRendering), 1),
    repeatCall(() => getYaosNotes(YaosBlockStyle.IEST, BarDuration.FIFTEEN, fifteenRendering), 1),
    repeatCall(() => getYaosNotes(YaosBlockStyle.UMOW, BarDuration.FIFTEEN, fifteenRendering), 1),
    repeatCall(() => getYaosNotes(YaosBlockStyle.DJIYAI, BarDuration.TWENTYFOUR, twentyfourRendering), 4),
])

const trueFormulaicInaidjiyaiouzdToUmowchuwowiestYaosPart: FormulaicTrueYaosPart = (
    fifteenRendering: YaosRendering, twentyfourRendering: YaosRendering): Part => sequence([
    repeatCall(() => getYaosNotes(YaosBlockStyle.DJIYAI, BarDuration.FIFTEEN, fifteenRendering), 4),
    repeatCall(() => getYaosNotes(YaosBlockStyle.OUZD, BarDuration.FIFTEEN, fifteenRendering), 1),
    repeatCall(() => getYaosNotes(YaosBlockStyle.INAI, BarDuration.FIFTEEN, fifteenRendering), 1),
    repeatCall(() => getYaosNotes(YaosBlockStyle.OUZD, BarDuration.FIFTEEN, fifteenRendering), 1),
    repeatCall(() => getYaosNotes(YaosBlockStyle.INAI, BarDuration.FIFTEEN, fifteenRendering), 1),
    repeatCall(() => getYaosNotes(YaosBlockStyle.CHUWOW, BarDuration.TWENTYFOUR, twentyfourRendering), 4),
])

const trueYaosUmowchuwowiestSpringToSummerPart: Part = trueFormulaicUmowchuwowiestToInaidjiyaiouzdPart(
    YaosRendering.SPRING, YaosRendering.SUMMER,
)

const trueYaosUmowchuwowiestSummerToSpringPart: Part = trueFormulaicUmowchuwowiestToInaidjiyaiouzdPart(
    YaosRendering.SUMMER, YaosRendering.SPRING,
)

const trueYaosInaidjiyaiouzdSummerToSpringPart: Part = trueFormulaicInaidjiyaiouzdToUmowchuwowiestYaosPart(
    YaosRendering.SUMMER, YaosRendering.SPRING,
)

const trueYaosSpringySummerStraightIntoZdaubInaidjiyaiouzdPart: Part = sequence([
    repeatCall(() => getYaosNotes(
        YaosBlockStyle.DJIYAI,
        BarDuration.FIFTEEN,
        YaosRendering.SPRINGY_SUMMER,
    ),         4),
    repeatCall(() => getYaosNotes(
        YaosBlockStyle.OUZD,
        BarDuration.FIFTEEN,
        YaosRendering.SPRINGY_SUMMER,
    ),         1),
    repeatCall(() => getYaosNotes(
        YaosBlockStyle.UMOW,
        BarDuration.FIFTEEN,
        YaosRendering.SPRINGY_SUMMER,
    ),         1),
    repeatCall(() => getYaosNotes(
        YaosBlockStyle.OUZD,
        BarDuration.FIFTEEN,
        YaosRendering.SPRINGY_SUMMER,
    ),         1),
    repeatCall(() => getYaosNotes(
        YaosBlockStyle.DJIYAI,
        BarDuration.FIFTEEN,
        YaosRendering.SPRINGY_SUMMER,
    ),         1),
    repeatCall(() => getYaosNotes(
        YaosBlockStyle.CHUWOW,
        BarDuration.TWENTYFOUR,
        YaosRendering.SUMMERY_SPRING,
    ),         4),
])

export {
    trueYaosUmowchuwowiestSpringToSummerPart,
    trueYaosUmowchuwowiestSummerToSpringPart,
    trueYaosInaidjiyaiouzdSummerToSpringPart,
    trueYaosSpringySummerStraightIntoZdaubInaidjiyaiouzdPart,
}
