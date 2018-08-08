import * as to from '../../../../src/utilities/to'
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
    [{flipHarmonically: true, pitchIndexOffset: to.Offset(2)}, {}, {}],
)

const trueSpringySummerTotallyOutThereSegment: Segment = alterSegmentParts(
    [
        trueYaosSpringySummerStraightIntoZdaubInaidjiyaiouzdPart,
        trueZdaubGlisPart,
        trueYaosSpringySummerStraightIntoZdaubInaidjiyaiouzdPart,
    ],
    [
        {pitchIndexOffset: to.Offset(2)},
        {pitchIndexOffset: to.Offset(-2)},
        {pitchIndexOffset: to.Offset(-3)},
    ],
)

export {
    trueSpringWithZdaubSegment,
    trueSummerWithZdaubAndSeparationVariantGetsPleasantlyGnarlyHarmonicallySegment,
    trueSpringySummerTotallyOutThereSegment,
}
