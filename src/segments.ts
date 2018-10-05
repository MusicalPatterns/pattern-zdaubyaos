import * as from from '../../../src/utilities/from'
import { Index, Offset } from '../../../src/utilities/nominalTypes'
import offset from '../../../src/utilities/offset'
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

// tslint:disable-next-line:no-any no-magic-numbers
const START: Index = 0 as any
// tslint:disable-next-line:no-any no-magic-numbers
const END: Index = 17 as any
// tslint:disable-next-line:no-any no-magic-numbers
const INCLUSIVE: Offset = 1 as any

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
].slice(from.Index(START), from.Index(offset(END, INCLUSIVE)))

export default segments
