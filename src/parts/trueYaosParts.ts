import repeatCall from '../../../../src/utilities/repeatCall'
import sequence from '../../../../src/utilities/sequence'
import getYaosNotes from '../notes/getYaosNotes'
import { BarDuration, YaosBlockResolution, YaosBlockStrategy, Part, YaosRendering } from '../types'

const trueYaosUmowchuwowiestSpringToSummerPart: Part = sequence([
    repeatCall(() => getYaosNotes(
        YaosBlockResolution.MIDIRREGULAR, YaosBlockStrategy.UMOWCHUWOWIEST, BarDuration.FIFTEEN, YaosRendering.SPRING,
    ),         4),
    repeatCall(() => getYaosNotes(
        YaosBlockResolution.HIGHREGULAR, YaosBlockStrategy.UMOWCHUWOWIEST, BarDuration.FIFTEEN, YaosRendering.SPRING,
    ),         1),
    repeatCall(() => getYaosNotes(
        YaosBlockResolution.LOWREGULAR, YaosBlockStrategy.UMOWCHUWOWIEST, BarDuration.FIFTEEN, YaosRendering.SPRING,
    ),         1),
    repeatCall(() => getYaosNotes(
        YaosBlockResolution.HIGHREGULAR, YaosBlockStrategy.UMOWCHUWOWIEST, BarDuration.FIFTEEN, YaosRendering.SPRING,
    ),         1),
    repeatCall(() => getYaosNotes(
        YaosBlockResolution.LOWREGULAR, YaosBlockStrategy.UMOWCHUWOWIEST, BarDuration.FIFTEEN, YaosRendering.SPRING,
    ),         1),
    repeatCall(() => getYaosNotes(
        YaosBlockResolution.MIDIRREGULAR, YaosBlockStrategy.INAIDJIYAIOUZD, BarDuration.TWENTYFOUR, YaosRendering.SUMMER,
    ),         4),
])

const trueYaosUmowchuwowiestSummerToSpringPart: Part = sequence([
    repeatCall(() => getYaosNotes(
        YaosBlockResolution.MIDIRREGULAR, YaosBlockStrategy.UMOWCHUWOWIEST, BarDuration.FIFTEEN, YaosRendering.SUMMER,
    ),         4),
    repeatCall(() => getYaosNotes(
        YaosBlockResolution.HIGHREGULAR, YaosBlockStrategy.UMOWCHUWOWIEST, BarDuration.FIFTEEN, YaosRendering.SUMMER,
    ),         1),
    repeatCall(() => getYaosNotes(
        YaosBlockResolution.LOWREGULAR, YaosBlockStrategy.UMOWCHUWOWIEST, BarDuration.FIFTEEN, YaosRendering.SUMMER,
    ),         1),
    repeatCall(() => getYaosNotes(
        YaosBlockResolution.HIGHREGULAR, YaosBlockStrategy.UMOWCHUWOWIEST, BarDuration.FIFTEEN, YaosRendering.SUMMER,
    ),         1),
    repeatCall(() => getYaosNotes(
        YaosBlockResolution.LOWREGULAR, YaosBlockStrategy.UMOWCHUWOWIEST, BarDuration.FIFTEEN, YaosRendering.SUMMER,
    ),         1),
    repeatCall(() => getYaosNotes(
        YaosBlockResolution.MIDIRREGULAR, YaosBlockStrategy.INAIDJIYAIOUZD, BarDuration.TWENTYFOUR, YaosRendering.SPRING,
    ),         4),
])

const trueYaosInaidjiyaiouzdSummerToSpringPart: Part = sequence([
    repeatCall(() => getYaosNotes(
        YaosBlockResolution.MIDIRREGULAR, YaosBlockStrategy.INAIDJIYAIOUZD, BarDuration.FIFTEEN, YaosRendering.SUMMER,
    ),         4),
    repeatCall(() => getYaosNotes(
        YaosBlockResolution.HIGHREGULAR, YaosBlockStrategy.INAIDJIYAIOUZD, BarDuration.FIFTEEN, YaosRendering.SUMMER,
    ),         1),
    repeatCall(() => getYaosNotes(
        YaosBlockResolution.LOWREGULAR, YaosBlockStrategy.INAIDJIYAIOUZD, BarDuration.FIFTEEN, YaosRendering.SUMMER,
    ),         1),
    repeatCall(() => getYaosNotes(
        YaosBlockResolution.HIGHREGULAR, YaosBlockStrategy.INAIDJIYAIOUZD, BarDuration.FIFTEEN, YaosRendering.SUMMER,
    ),         1),
    repeatCall(() => getYaosNotes(
        YaosBlockResolution.LOWREGULAR, YaosBlockStrategy.INAIDJIYAIOUZD, BarDuration.FIFTEEN, YaosRendering.SUMMER,
    ),         1),
    repeatCall(() => getYaosNotes(
        YaosBlockResolution.MIDIRREGULAR, YaosBlockStrategy.UMOWCHUWOWIEST, BarDuration.TWENTYFOUR, YaosRendering.SPRING,
    ),         4),
])

const trueYaosSpringySummerStraightIntoZdaubInaidjiyaiouzdPart: Part = sequence([
    repeatCall(() => getYaosNotes(
        YaosBlockResolution.MIDIRREGULAR, YaosBlockStrategy.INAIDJIYAIOUZD, BarDuration.FIFTEEN, YaosRendering.SPRINGY_SUMMER,
    ),         4),
    repeatCall(() => getYaosNotes(
        YaosBlockResolution.HIGHREGULAR, YaosBlockStrategy.INAIDJIYAIOUZD, BarDuration.FIFTEEN, YaosRendering.SPRINGY_SUMMER,
    ),         1),
    repeatCall(() => getYaosNotes(
        YaosBlockResolution.LOWREGULAR, YaosBlockStrategy.UMOWCHUWOWIEST, BarDuration.FIFTEEN, YaosRendering.SPRINGY_SUMMER,
    ),         1),
    repeatCall(() => getYaosNotes(
        YaosBlockResolution.HIGHREGULAR, YaosBlockStrategy.INAIDJIYAIOUZD, BarDuration.FIFTEEN, YaosRendering.SPRINGY_SUMMER,
    ),         1),
    repeatCall(() => getYaosNotes(
        YaosBlockResolution.MIDIRREGULAR, YaosBlockStrategy.INAIDJIYAIOUZD, BarDuration.FIFTEEN, YaosRendering.SPRINGY_SUMMER,
    ),         1),
    repeatCall(() => getYaosNotes(
        YaosBlockResolution.MIDIRREGULAR, YaosBlockStrategy.UMOWCHUWOWIEST, BarDuration.TWENTYFOUR, YaosRendering.SUMMERY_SPRING,
    ),         4),
])

export {
    trueYaosUmowchuwowiestSpringToSummerPart,
    trueYaosUmowchuwowiestSummerToSpringPart,
    trueYaosInaidjiyaiouzdSummerToSpringPart,
    trueYaosSpringySummerStraightIntoZdaubInaidjiyaiouzdPart,
}
