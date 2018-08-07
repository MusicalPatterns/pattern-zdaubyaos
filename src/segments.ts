import { backboneSegment } from './segments/backboneSegments'
import {
    breatherFallWhichIsGoodIntroForJigSegment,
    breatherSpringAltNiceAsABreatherToABreatherSegment,
    breatherSpringSegment,
    breatherSummerSegment,
    breatherVarietyQuiteTheReveilleSegment,
} from './segments/breatherSegments'
import {
    experimentWithIestttAndUmowwwSegment,
    polyrhythmicAllYaosSegment,
    thirtyfiveSegment,
    untrueFallAllYaosAndBothBlockStrategiesBonyJigIntroHappyGoLuckyRandomFeelingSegment,
} from './segments/otherSegments'
import { shiftySegment } from './segments/shiftySegments'
import {
    trueAllYaosAllRhythmsAtOnceSegment,
    trueSpringAllYaosUmowchuwowiestSegment,
    trueSummerAllYaosUmowchuwowiestWithSomeHarmonicallyFlippedSegment,
} from './segments/trueYaosSegments'

import {
    trueAllZdaubTriumphantAllThreeNoteTypesFlippedHarmonicallySegment,
    trueBonyJigAndNowItGetsKindaHighAndMagicSparklySegment,
    trueSpringWithZdaubSegment,
    trueSummerWithZdaubAndSeparationVariantGetsPleasantlyGnarlyHarmonicallySegment,
} from './segments/trueZdaubSegments'
import { Segment } from './types'

const START: number = 0
const END: number = 15
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

    // 6
    breatherFallWhichIsGoodIntroForJigSegment,
    untrueFallAllYaosAndBothBlockStrategiesBonyJigIntroHappyGoLuckyRandomFeelingSegment,
    trueBonyJigAndNowItGetsKindaHighAndMagicSparklySegment,
    shiftySegment, // Awkward transition STILL

    // 10
    breatherSpringAltNiceAsABreatherToABreatherSegment,
    breatherVarietyQuiteTheReveilleSegment,
    trueAllYaosAllRhythmsAtOnceSegment,
    trueAllZdaubTriumphantAllThreeNoteTypesFlippedHarmonicallySegment,

    // 14
    thirtyfiveSegment,
].slice(START, END + INCLUSIVE)

// tslint:disable-next-line:no-unused-variable
const notsureyetSegments: Segment[] = [
    // Without this we never REALLY get the 357357 or the 345354
    // Except both are hidden in the "all rhythms at once" segment, and they are kind of achieved in the pre-jig
    polyrhythmicAllYaosSegment,
    // These two sound really similar to each other and aren't good
    backboneSegment,
    experimentWithIestttAndUmowwwSegment,
]

export default segments
