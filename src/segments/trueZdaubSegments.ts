import alterSegmentParts from '../alterations/alterSegmentParts'
import { trueYetOfBackbonePart } from '../parts/otherParts'
import {
    trueYaosSpringySummerStraightIntoZdaubInaidjiyaiouzdPart,
    trueYaosUmowchuwowiestSpringToSummerPart,
    trueYaosUmowchuwowiestSummerToSpringPart,
} from '../parts/trueYaosParts'
import {
    trueZdaubBonyWithSuperinscapePart,
    trueZdaubGlisPart,
    trueZdaubGlisVariantPart,
    trueZdaubTremPart,
} from '../parts/trueZdaubParts'
import { Segment } from '../types'

const trueSpringWithZdaubSegment: Segment = alterSegmentParts(
    [
        trueZdaubGlisPart,
        trueYaosUmowchuwowiestSpringToSummerPart,
        trueZdaubTremPart,
    ],
    [{}, {}, {}],
)

const trueSummerWithZdaubAndSeparationVariantGetsPleasantlyGnarlyHarmonicallySegment: Segment = alterSegmentParts(
    [
        trueYaosUmowchuwowiestSummerToSpringPart,
        trueZdaubGlisPart,
        trueZdaubGlisVariantPart,
    ],
    [{flipHarmonically: true, pitchIndexOffset: 2}, {}, {}],
)

const trueBonyJigAndNowItGetsKindaHighAndMagicSparklySegment: Segment = alterSegmentParts(
    [
        trueYetOfBackbonePart,
        trueYetOfBackbonePart,
        trueZdaubBonyWithSuperinscapePart,
    ],
    [{gainAdjust: 0.33, flipHarmonically: true}, {gainAdjust: 0.33, flipHarmonically: true}, {gainAdjust: 0.33}],
)

const trueSpringySummerTotallyOutThereSegment: Segment = alterSegmentParts(
    [
        trueYaosSpringySummerStraightIntoZdaubInaidjiyaiouzdPart,
        trueZdaubGlisPart,
        trueYaosSpringySummerStraightIntoZdaubInaidjiyaiouzdPart,
    ],
    [
        {pitchIndexOffset: 2},
        {pitchIndexOffset: -2, flipHarmonically: false},
        {pitchIndexOffset: -3},
    ],
)

export {
    trueSpringWithZdaubSegment,
    trueSummerWithZdaubAndSeparationVariantGetsPleasantlyGnarlyHarmonicallySegment,
    trueBonyJigAndNowItGetsKindaHighAndMagicSparklySegment,
    trueSpringySummerTotallyOutThereSegment,
}
