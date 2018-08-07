import flipEntities from '../flipEntities'
import {
    trueYaosInaidjiyaiouzdSummerToSpringComplementyPart,
    trueYaosInaidjiyaiouzdSummerToSpringPart, trueYaosUmowchuwowiestAndInaidjiyaiouzdFallAndPitchAdjustmentPart,
    trueYaosUmowchuwowiestSpringToSummerPart,
    trueYaosUmowchuwowiestSummerToSpringPart,
} from '../parts/trueYaosParts'
import { Segment } from '../types'

const trueSpringAllYaosUmowchuwowiestSegment: Segment = flipEntities(
    [
        trueYaosUmowchuwowiestSpringToSummerPart,
        trueYaosUmowchuwowiestSpringToSummerPart,
        trueYaosUmowchuwowiestSpringToSummerPart,
    ],
    [false, false, false],
)

const trueSummerAllYaosUmowchuwowiestWithSomeHarmonicallyFlippedSegment: Segment = flipEntities(
    [
        trueYaosUmowchuwowiestSummerToSpringPart,
        trueYaosUmowchuwowiestSummerToSpringPart,
        trueYaosUmowchuwowiestSummerToSpringPart,
    ],
    [true, false, false],
)

const trueSummerAllYaosInaidjiyaiouzdSegment: Segment = flipEntities(
    [
        trueYaosInaidjiyaiouzdSummerToSpringPart,
        trueYaosInaidjiyaiouzdSummerToSpringComplementyPart,
        trueYaosInaidjiyaiouzdSummerToSpringComplementyPart,
    ],
    [true, true, true],
)

const trueFallAllYaosAndBothBlockStrategiesBonyJigIntroHappyGoLuckyRandomFeelingSegment: Segment = flipEntities(
    [
        trueYaosUmowchuwowiestAndInaidjiyaiouzdFallAndPitchAdjustmentPart,
        trueYaosUmowchuwowiestAndInaidjiyaiouzdFallAndPitchAdjustmentPart,
        trueYaosUmowchuwowiestAndInaidjiyaiouzdFallAndPitchAdjustmentPart,
    ],
    [true, true, true],
)

const trueAllYaosAllRhythmsAtOnceSegment: Segment = flipEntities(
    [
        trueYaosUmowchuwowiestSpringToSummerPart,
        trueYaosUmowchuwowiestSummerToSpringPart,
        trueYaosInaidjiyaiouzdSummerToSpringPart,
    ],
    [true, true, false],
)

export {
    trueSpringAllYaosUmowchuwowiestSegment,
    trueSummerAllYaosUmowchuwowiestWithSomeHarmonicallyFlippedSegment,
    trueSummerAllYaosInaidjiyaiouzdSegment,
    trueFallAllYaosAndBothBlockStrategiesBonyJigIntroHappyGoLuckyRandomFeelingSegment,
    trueAllYaosAllRhythmsAtOnceSegment,
}
