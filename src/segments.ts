import {
    almostTrueBonyJigAndNowItGetsKindaHighAndMagicSparklySegment,
    almostTrueExtendedEndingAllZdaubTriumphantAllNoteTypesFlippedHarmonicallySegment,
    almostTrueFallAllYaosBothBlockStrategiesBonyJigIntroHappyGoLuckyRandomFeelingSegment,
    almostTrueSummerAllYaosUmowchuwowiestWithSomeHarmonicallyFlippedSegmentAndFun,
} from './segments/almostTrueSegments'
import { backboneSegment } from './segments/backboneSegments'
import {
    breatherSpringAltNiceAsABreatherToABreatherSegment,
    breatherSpringSegment,
    breatherSummerSegment,
    breatherVarietyQuiteTheReveilleSegment,
    doubleBreatherFallWhichIsGoodIntroForJigSegment,
} from './segments/breatherSegments'
import {
    experimentWithIestttAndUmowwwSegment,
    polyrhythmicAllYaosSegment,
    polyrhythmicAscent,
    secretLongChordSegment,
    totallyOutThereIntroSegment,
} from './segments/otherSegments'
import { shiftySegment } from './segments/shiftySegments'
import { thirtyfiveSegment } from './segments/thirtyfiveSegments'
import {
    trueAllYaosAllRhythmsAtOnceSegment,
    trueSpringAllYaosUmowchuwowiestSegment,
} from './segments/trueYaosSegments'
import {
    trueSpringWithZdaubSegment,
    trueSpringySummerTotallyOutThereSegment,
    trueSummerWithZdaubAndSeparationVariantGetsPleasantlyGnarlyHarmonicallySegment,
} from './segments/trueZdaubSegments'
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
    almostTrueSummerAllYaosUmowchuwowiestWithSomeHarmonicallyFlippedSegmentAndFun,
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

// tslint:disable-next-line:no-unused-variable
const segmentsWhichIHaveNotFoundAHomeForYetAndMayNever: Segment[] = [
    // Without this we never REALLY get the 357 or the 345354
    // Except both are hidden in the "all rhythms at once" segment, and they are kind of achieved in the pre-jig
    // Though is this really much less hidden than in the "all at once" bc its still a 2-layered polyrhythm
    polyrhythmicAllYaosSegment,

    // These two sound really similar to each other and aren't good
    backboneSegment,
    experimentWithIestttAndUmowwwSegment,

    // I was trying to solve the transition INTO shifty, but this does naturally fit after it
    // But that that still doesn't help much and it's not super inspiring
    polyrhythmicAscent,

    // I mean couldn't you really just solve the shifty transition problem with like a big dumb chord
    // That lasts like 39 or something? or 8 times 6? which is 2x 24? so how about 9x 7's?
    // Answer is nope... this is nice but I can't fit in anywhere
    secretLongChordSegment,

    // Man I really like the 'tude of this thing but I can't fit in anywhere
    trueSpringySummerTotallyOutThereSegment,
]

export default segments
