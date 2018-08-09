import repeatCall from '../../../../src/utilities/repeatCall'
import sequence from '../../../../src/utilities/sequence'
import getYaosNotes from '../notes/getYaosNotes'
import { BarDuration, BlockResolution, BlockStrategy, Part, Rendering } from '../types'

const trueYaosUmowchuwowiestSpringToSummerPart: Part = sequence([
    repeatCall(() => getYaosNotes(
        BlockResolution.MIDIRREGULAR, BlockStrategy.UMOWCHUWOWIEST, BarDuration.FIFTEEN, Rendering.SPRING,
    ),         4),
    repeatCall(() => getYaosNotes(
        BlockResolution.HIGHREGULAR, BlockStrategy.UMOWCHUWOWIEST, BarDuration.FIFTEEN, Rendering.SPRING,
    ),         1),
    repeatCall(() => getYaosNotes(
        BlockResolution.LOWREGULAR, BlockStrategy.UMOWCHUWOWIEST, BarDuration.FIFTEEN, Rendering.SPRING,
    ),         1),
    repeatCall(() => getYaosNotes(
        BlockResolution.HIGHREGULAR, BlockStrategy.UMOWCHUWOWIEST, BarDuration.FIFTEEN, Rendering.SPRING,
    ),         1),
    repeatCall(() => getYaosNotes(
        BlockResolution.LOWREGULAR, BlockStrategy.UMOWCHUWOWIEST, BarDuration.FIFTEEN, Rendering.SPRING,
    ),         1),
    repeatCall(() => getYaosNotes(
        BlockResolution.MIDIRREGULAR, BlockStrategy.INAIDJIYAIOUZD, BarDuration.TWENTYFOUR, Rendering.SUMMER,
    ),         4),
])

const trueYaosUmowchuwowiestSummerToSpringPart: Part = sequence([
    repeatCall(() => getYaosNotes(
        BlockResolution.MIDIRREGULAR, BlockStrategy.UMOWCHUWOWIEST, BarDuration.FIFTEEN, Rendering.SUMMER,
    ),         4),
    repeatCall(() => getYaosNotes(
        BlockResolution.HIGHREGULAR, BlockStrategy.UMOWCHUWOWIEST, BarDuration.FIFTEEN, Rendering.SUMMER,
    ),         1),
    repeatCall(() => getYaosNotes(
        BlockResolution.LOWREGULAR, BlockStrategy.UMOWCHUWOWIEST, BarDuration.FIFTEEN, Rendering.SUMMER,
    ),         1),
    repeatCall(() => getYaosNotes(
        BlockResolution.HIGHREGULAR, BlockStrategy.UMOWCHUWOWIEST, BarDuration.FIFTEEN, Rendering.SUMMER,
    ),         1),
    repeatCall(() => getYaosNotes(
        BlockResolution.LOWREGULAR, BlockStrategy.UMOWCHUWOWIEST, BarDuration.FIFTEEN, Rendering.SUMMER,
    ),         1),
    repeatCall(() => getYaosNotes(
        BlockResolution.MIDIRREGULAR, BlockStrategy.INAIDJIYAIOUZD, BarDuration.TWENTYFOUR, Rendering.SPRING,
    ),         4),
])

const trueYaosInaidjiyaiouzdSummerToSpringPart: Part = sequence([
    repeatCall(() => getYaosNotes(
        BlockResolution.MIDIRREGULAR, BlockStrategy.INAIDJIYAIOUZD, BarDuration.FIFTEEN, Rendering.SUMMER,
    ),         4),
    repeatCall(() => getYaosNotes(
        BlockResolution.HIGHREGULAR, BlockStrategy.INAIDJIYAIOUZD, BarDuration.FIFTEEN, Rendering.SUMMER,
    ),         1),
    repeatCall(() => getYaosNotes(
        BlockResolution.LOWREGULAR, BlockStrategy.INAIDJIYAIOUZD, BarDuration.FIFTEEN, Rendering.SUMMER,
    ),         1),
    repeatCall(() => getYaosNotes(
        BlockResolution.HIGHREGULAR, BlockStrategy.INAIDJIYAIOUZD, BarDuration.FIFTEEN, Rendering.SUMMER,
    ),         1),
    repeatCall(() => getYaosNotes(
        BlockResolution.LOWREGULAR, BlockStrategy.INAIDJIYAIOUZD, BarDuration.FIFTEEN, Rendering.SUMMER,
    ),         1),
    repeatCall(() => getYaosNotes(
        BlockResolution.MIDIRREGULAR, BlockStrategy.UMOWCHUWOWIEST, BarDuration.TWENTYFOUR, Rendering.SPRING,
    ),         4),
])

const trueYaosSpringySummerStraightIntoZdaubInaidjiyaiouzdPart: Part = sequence([
    repeatCall(() => getYaosNotes(
        BlockResolution.MIDIRREGULAR, BlockStrategy.INAIDJIYAIOUZD, BarDuration.FIFTEEN, Rendering.SPRINGY_SUMMER,
    ),         4),
    repeatCall(() => getYaosNotes(
        BlockResolution.HIGHREGULAR, BlockStrategy.INAIDJIYAIOUZD, BarDuration.FIFTEEN, Rendering.SPRINGY_SUMMER,
    ),         1),
    repeatCall(() => getYaosNotes(
        BlockResolution.LOWREGULAR, BlockStrategy.UMOWCHUWOWIEST, BarDuration.FIFTEEN, Rendering.SPRINGY_SUMMER,
    ),         1),
    repeatCall(() => getYaosNotes(
        BlockResolution.HIGHREGULAR, BlockStrategy.INAIDJIYAIOUZD, BarDuration.FIFTEEN, Rendering.SPRINGY_SUMMER,
    ),         1),
    repeatCall(() => getYaosNotes(
        BlockResolution.MIDIRREGULAR, BlockStrategy.INAIDJIYAIOUZD, BarDuration.FIFTEEN, Rendering.SPRINGY_SUMMER,
    ),         1),
    repeatCall(() => getYaosNotes(
        BlockResolution.MIDIRREGULAR, BlockStrategy.UMOWCHUWOWIEST, BarDuration.TWENTYFOUR, Rendering.SUMMERY_SPRING,
    ),         4),
])

export {
    trueYaosUmowchuwowiestSpringToSummerPart,
    trueYaosUmowchuwowiestSummerToSpringPart,
    trueYaosInaidjiyaiouzdSummerToSpringPart,
    trueYaosSpringySummerStraightIntoZdaubInaidjiyaiouzdPart,
}
