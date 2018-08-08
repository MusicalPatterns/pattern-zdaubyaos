import alterSegmentParts from '../alterations/alterSegmentParts'
import {
    trueYaosSpringySummerStraightIntoZdaubInaidjiyaiouzdPart,
    trueYaosUmowchuwowiestSpringToSummerPart,
    trueYaosUmowchuwowiestSummerToSpringPart,
} from '../parts/trueYaosParts'
import {
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
    trueSpringySummerTotallyOutThereSegment,
}
