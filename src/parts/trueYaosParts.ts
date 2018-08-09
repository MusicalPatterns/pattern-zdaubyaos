import repeatCall from '../../../../src/utilities/repeatCall'
import sequence from '../../../../src/utilities/sequence'
import { getYaosNotes } from '../notes/yaosNotes'
import { Part } from '../types'
import { BarDuration, YaosBlockResolution, YaosBlockStrategy, YaosRendering } from '../zdaubyaosTypes'

const trueFormulaicYaosPart: (
    fifteenRendering: YaosRendering, twentyfourRendering: YaosRendering, firstBlockStrategy: YaosBlockStrategy,
) => Part = (
    fifteenRendering: YaosRendering, twentyfourRendering: YaosRendering, firstBlockStrategy: YaosBlockStrategy,
): Part => {
    const secondBlockStrategy: YaosBlockStrategy = firstBlockStrategy === YaosBlockStrategy.UMOWCHUWOWIEST ?
        YaosBlockStrategy.INAIDJIYAIOUZD :
        YaosBlockStrategy.UMOWCHUWOWIEST

    return sequence([
        repeatCall(() => getYaosNotes(
            YaosBlockResolution.MIDIRREG, firstBlockStrategy, BarDuration.FIFTEEN, fifteenRendering,
        ),         4),
        repeatCall(() => getYaosNotes(
            YaosBlockResolution.HIGHREG, firstBlockStrategy, BarDuration.FIFTEEN, fifteenRendering,
        ),         1),
        repeatCall(() => getYaosNotes(
            YaosBlockResolution.LOWREG, firstBlockStrategy, BarDuration.FIFTEEN, fifteenRendering,
        ),         1),
        repeatCall(() => getYaosNotes(
            YaosBlockResolution.HIGHREG, firstBlockStrategy, BarDuration.FIFTEEN, fifteenRendering,
        ),         1),
        repeatCall(() => getYaosNotes(
            YaosBlockResolution.LOWREG, firstBlockStrategy, BarDuration.FIFTEEN, fifteenRendering,
        ),         1),
        repeatCall(() => getYaosNotes(
            YaosBlockResolution.MIDIRREG, secondBlockStrategy, BarDuration.TWENTYFOUR, twentyfourRendering,
        ),         4),
    ])
}

const trueYaosUmowchuwowiestSpringToSummerPart: Part = trueFormulaicYaosPart(
    YaosRendering.SPRING, YaosRendering.SUMMER, YaosBlockStrategy.UMOWCHUWOWIEST,
)

const trueYaosUmowchuwowiestSummerToSpringPart: Part = trueFormulaicYaosPart(
    YaosRendering.SUMMER, YaosRendering.SPRING, YaosBlockStrategy.UMOWCHUWOWIEST,
)

const trueYaosInaidjiyaiouzdSummerToSpringPart: Part = trueFormulaicYaosPart(
    YaosRendering.SUMMER, YaosRendering.SPRING, YaosBlockStrategy.INAIDJIYAIOUZD,
)

const trueYaosSpringySummerStraightIntoZdaubInaidjiyaiouzdPart: Part = sequence([
    repeatCall(() => getYaosNotes(
        YaosBlockResolution.MIDIRREG,
        YaosBlockStrategy.INAIDJIYAIOUZD,
        BarDuration.FIFTEEN,
        YaosRendering.SPRINGY_SUMMER,
    ),         4),
    repeatCall(() => getYaosNotes(
        YaosBlockResolution.HIGHREG,
        YaosBlockStrategy.INAIDJIYAIOUZD,
        BarDuration.FIFTEEN,
        YaosRendering.SPRINGY_SUMMER,
    ),         1),
    repeatCall(() => getYaosNotes(
        YaosBlockResolution.LOWREG,
        YaosBlockStrategy.UMOWCHUWOWIEST,
        BarDuration.FIFTEEN,
        YaosRendering.SPRINGY_SUMMER,
    ),         1),
    repeatCall(() => getYaosNotes(
        YaosBlockResolution.HIGHREG,
        YaosBlockStrategy.INAIDJIYAIOUZD,
        BarDuration.FIFTEEN,
        YaosRendering.SPRINGY_SUMMER,
    ),         1),
    repeatCall(() => getYaosNotes(
        YaosBlockResolution.MIDIRREG,
        YaosBlockStrategy.INAIDJIYAIOUZD,
        BarDuration.FIFTEEN,
        YaosRendering.SPRINGY_SUMMER,
    ),         1),
    repeatCall(() => getYaosNotes(
        YaosBlockResolution.MIDIRREG,
        YaosBlockStrategy.UMOWCHUWOWIEST,
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
