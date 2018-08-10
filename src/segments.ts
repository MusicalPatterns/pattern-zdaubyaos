import {
    almostTrueBonyJigAndNowItGetsKindaHighAndMagicSparklySegment,
    almostTrueExtendedEndingAllZdaubTriumphantAllNoteTypesFlippedHarmonicallySegment,
    almostTrueFallAllYaosBothBlockStrategiesBonyJigIntroHappyGoLuckyRandomFeelingSegment,
} from './segments/almostZdaubyaosSegments'
import {
    breatherSpringAltNiceAsABreatherToABreatherSegment,
    breatherSpringSegment,
    breatherSummerSegment,
    breatherVarietyQuiteTheReveilleSegment,
    doubleBreatherFallWhichIsGoodIntroForJigSegment,
} from './segments/breatherSegments'
import { secretLongChordSegment, shiftySegment, totallyOutThereIntroSegment } from './segments/otherSegments'
import { thirtyfiveSegment } from './segments/thirtyfiveSegments'
import {
    trueAllYaosAllRhythmsAtOnceSegment,
    trueSpringAllYaosUmowchuwowiestSegment,
    trueSpringWithZdaubSegment, trueSpringySummerTotallyOutThereSegment,
    trueSummerAllYaosUmowchuwowiestWithSomeHarmonicallyFlippedSegment,
    trueSummerWithZdaubAndSeparationVariantGetsPleasantlyGnarlyHarmonicallySegment,
} from './segments/zdaubyaosSegments'
import { Segment } from './types'

const START: number = 0
const END: number = 17
const INCLUSIVE: number = 1

const segments: Segment[] = [
    // 0
    breatherSpringSegment,
    trueSpringAllYaosUmowchuwowiestSegment,
    trueSpringWithZdaubSegment,

    // 3
    breatherSummerSegment,
    trueSummerAllYaosUmowchuwowiestWithSomeHarmonicallyFlippedSegment,
    trueSummerWithZdaubAndSeparationVariantGetsPleasantlyGnarlyHarmonicallySegment,
    secretLongChordSegment,
    shiftySegment,

    // 8
    doubleBreatherFallWhichIsGoodIntroForJigSegment,
    almostTrueFallAllYaosBothBlockStrategiesBonyJigIntroHappyGoLuckyRandomFeelingSegment,
    almostTrueBonyJigAndNowItGetsKindaHighAndMagicSparklySegment,
    totallyOutThereIntroSegment,
    trueSpringySummerTotallyOutThereSegment,

    // 13
    breatherSpringAltNiceAsABreatherToABreatherSegment,
    breatherVarietyQuiteTheReveilleSegment,
    trueAllYaosAllRhythmsAtOnceSegment,
    almostTrueExtendedEndingAllZdaubTriumphantAllNoteTypesFlippedHarmonicallySegment,

    // 17
    thirtyfiveSegment,
].slice(START, END + INCLUSIVE)

export default segments
