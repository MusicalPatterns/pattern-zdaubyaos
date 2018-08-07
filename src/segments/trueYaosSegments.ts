import alterSegmentParts from '../alterations/alterSegmentParts'
import {
    trueYaosInaidjiyaiouzdSummerToSpringComplementyPart,
    trueYaosInaidjiyaiouzdSummerToSpringPart, trueYaosUmowchuwowiestAndInaidjiyaiouzdFallAndPitchAdjustmentPart,
    trueYaosUmowchuwowiestSpringToSummerPart,
    trueYaosUmowchuwowiestSummerToSpringPart,
} from '../parts/trueYaosParts'
import { Segment } from '../types'

const trueSpringAllYaosUmowchuwowiestSegment: Segment = alterSegmentParts(
    [
        trueYaosUmowchuwowiestSpringToSummerPart,
        trueYaosUmowchuwowiestSpringToSummerPart,
        trueYaosUmowchuwowiestSpringToSummerPart,
    ],
    [{}, {}, {}],
)

const trueSummerAllYaosUmowchuwowiestWithSomeHarmonicallyFlippedSegment: Segment = alterSegmentParts(
    [
        trueYaosUmowchuwowiestSummerToSpringPart,
        trueYaosUmowchuwowiestSummerToSpringPart,
        trueYaosUmowchuwowiestSummerToSpringPart,
    ],
    [{flipHarmonically: true}, {}, {}],
)

const trueSummerAllYaosInaidjiyaiouzdSegment: Segment = alterSegmentParts(
    [
        trueYaosInaidjiyaiouzdSummerToSpringPart,
        trueYaosInaidjiyaiouzdSummerToSpringComplementyPart,
        trueYaosInaidjiyaiouzdSummerToSpringComplementyPart,
    ],
    [{flipHarmonically: true}, {flipHarmonically: true}, {flipHarmonically: true}],
)

const trueFallAllYaosAndBothBlockStrategiesBonyJigIntroHappyGoLuckyRandomFeelingSegment: Segment = alterSegmentParts(
    [
        trueYaosUmowchuwowiestAndInaidjiyaiouzdFallAndPitchAdjustmentPart,
        trueYaosUmowchuwowiestAndInaidjiyaiouzdFallAndPitchAdjustmentPart,
        trueYaosUmowchuwowiestAndInaidjiyaiouzdFallAndPitchAdjustmentPart,
    ],
    [{flipHarmonically: true}, {flipHarmonically: true}, {flipHarmonically: true}],
)

const trueAllYaosAllRhythmsAtOnceSegment: Segment = alterSegmentParts(
    [
        trueYaosUmowchuwowiestSpringToSummerPart,
        trueYaosUmowchuwowiestSummerToSpringPart,
        trueYaosInaidjiyaiouzdSummerToSpringPart,
    ],
    [{flipHarmonically: true}, {flipHarmonically: true}, {}],
)

export {
    trueSpringAllYaosUmowchuwowiestSegment,
    trueSummerAllYaosUmowchuwowiestWithSomeHarmonicallyFlippedSegment,
    trueSummerAllYaosInaidjiyaiouzdSegment,
    trueFallAllYaosAndBothBlockStrategiesBonyJigIntroHappyGoLuckyRandomFeelingSegment,
    trueAllYaosAllRhythmsAtOnceSegment,
}
