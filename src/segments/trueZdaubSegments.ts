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
    [
        {scaleIndex: to.Index(0)},
        {scaleIndex: to.Index(1)},
        {scaleIndex: to.Index(2)},
    ],
)

const trueSummerWithZdaubAndSeparationVariantGetsPleasantlyGnarlyHarmonicallySegment: Segment = alterSegmentParts(
    [
        trueYaosUmowchuwowiestSummerToSpringPart,
        trueZdaubGlisPart,
        trueZdaubGlisVariantPart,
    ],
    [
        {scaleIndex: to.Index(3), pitchIndexOffset: to.Offset(2)},
        {scaleIndex: to.Index(1)},
        {scaleIndex: to.Index(2)},
    ],
)

const trueSpringySummerTotallyOutThereSegment: Segment = alterSegmentParts(
    [
        trueYaosSpringySummerStraightIntoZdaubInaidjiyaiouzdPart,
        trueZdaubGlisPart,
        trueYaosSpringySummerStraightIntoZdaubInaidjiyaiouzdPart,
    ],
    [
        {scaleIndex: to.Index(0), pitchIndexOffset: to.Offset(2)},
        {scaleIndex: to.Index(1), pitchIndexOffset: to.Offset(-2)},
        {scaleIndex: to.Index(2), pitchIndexOffset: to.Offset(-3)},
    ],
)

export {
    trueSpringWithZdaubSegment,
    trueSummerWithZdaubAndSeparationVariantGetsPleasantlyGnarlyHarmonicallySegment,
    trueSpringySummerTotallyOutThereSegment,
}
