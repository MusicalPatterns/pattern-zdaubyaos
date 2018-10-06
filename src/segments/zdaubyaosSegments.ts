import * as to from '../../../../src/utilities/to'
import makeSegment from '../notes/makeSegment'
import {
    trueYaosInaidjiyaiouzdSummerToSpringPart,
    trueYaosSpringySummerStraightIntoZdaubInaidjiyaiouzdPart,
    trueYaosUmowchuwowiestSpringToSummerPart,
    trueYaosUmowchuwowiestSummerToSpringPart,
    trueZdaubGlisPart,
    trueZdaubGlisVariantPart,
    trueZdaubTremPart,
} from '../parts/zdaubyaosParts'
import { Segment } from '../types'

const trueSpringAllYaosUmowchuwowiestSegment: Segment = makeSegment(
    [
        trueYaosUmowchuwowiestSpringToSummerPart,
        trueYaosUmowchuwowiestSpringToSummerPart,
        trueYaosUmowchuwowiestSpringToSummerPart,
    ],
    [
        { scaleIndex: to.Index(0) },
        { scaleIndex: to.Index(1) },
        { scaleIndex: to.Index(2) },
    ],
)

const trueAllYaosAllRhythmsAtOnceSegment: Segment = makeSegment(
    [
        trueYaosUmowchuwowiestSpringToSummerPart,
        trueYaosUmowchuwowiestSummerToSpringPart,
        trueYaosInaidjiyaiouzdSummerToSpringPart,
    ],
    [
        { scaleIndex: to.Index(3) },
        { scaleIndex: to.Index(4) },
        { scaleIndex: to.Index(2) },
    ],
)

const trueSummerAllYaosUmowchuwowiestWithSomeHarmonicallyFlippedSegment: Segment = makeSegment(
    [
        trueYaosUmowchuwowiestSummerToSpringPart,
        trueYaosUmowchuwowiestSummerToSpringPart,
        trueYaosUmowchuwowiestSummerToSpringPart,
    ],
    [
        { scaleIndex: to.Index(3) },
        { scaleIndex: to.Index(1) },
        { scaleIndex: to.Index(2) },
    ],
)

const trueSpringWithZdaubSegment: Segment = makeSegment(
    [
        trueZdaubGlisPart,
        trueYaosUmowchuwowiestSpringToSummerPart,
        trueZdaubTremPart,
    ],
    [
        { scaleIndex: to.Index(0) },
        { scaleIndex: to.Index(1) },
        { scaleIndex: to.Index(2) },
    ],
)

const trueSummerWithZdaubAndSeparationVariantGetsPleasantlyGnarlyHarmonicallySegment: Segment = makeSegment(
    [
        trueYaosUmowchuwowiestSummerToSpringPart,
        trueZdaubGlisPart,
        trueZdaubGlisVariantPart,
    ],
    [
        { scaleIndex: to.Index(3), pitchIndexOffset: to.Offset(2) },
        { scaleIndex: to.Index(1) },
        { scaleIndex: to.Index(2) },
    ],
)

const trueSpringySummerTotallyOutThereSegment: Segment = makeSegment(
    [
        trueYaosSpringySummerStraightIntoZdaubInaidjiyaiouzdPart,
        trueZdaubGlisPart,
        trueYaosSpringySummerStraightIntoZdaubInaidjiyaiouzdPart,
    ],
    [
        { scaleIndex: to.Index(0), pitchIndexOffset: to.Offset(2) },
        { scaleIndex: to.Index(1), pitchIndexOffset: to.Offset(-2) },
        { scaleIndex: to.Index(2), pitchIndexOffset: to.Offset(-3) },
    ],
)

export {
    trueSpringAllYaosUmowchuwowiestSegment,
    trueAllYaosAllRhythmsAtOnceSegment,
    trueSummerAllYaosUmowchuwowiestWithSomeHarmonicallyFlippedSegment,
    trueSpringWithZdaubSegment,
    trueSummerWithZdaubAndSeparationVariantGetsPleasantlyGnarlyHarmonicallySegment,
    trueSpringySummerTotallyOutThereSegment,
}
