import * as to from '../../../../src/utilities/to'
import alterSegmentParts from '../alterations/alterSegmentParts'
import {
    trueYaosInaidjiyaiouzdSummerToSpringPart,
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
    [
        {scaleIndex: to.Index(0)},
        {scaleIndex: to.Index(1)},
        {scaleIndex: to.Index(2)},
    ],
)

const trueAllYaosAllRhythmsAtOnceSegment: Segment = alterSegmentParts(
    [
        trueYaosUmowchuwowiestSpringToSummerPart,
        trueYaosUmowchuwowiestSummerToSpringPart,
        trueYaosInaidjiyaiouzdSummerToSpringPart,
    ],
    [
        {scaleIndex: to.Index(3)},
        {scaleIndex: to.Index(4)},
        {scaleIndex: to.Index(2)},
    ],
)

const trueSummerAllYaosUmowchuwowiestWithSomeHarmonicallyFlippedSegment: Segment = alterSegmentParts(
    [
        trueYaosUmowchuwowiestSummerToSpringPart,
        trueYaosUmowchuwowiestSummerToSpringPart,
        trueYaosUmowchuwowiestSummerToSpringPart,
    ],
    [
        {scaleIndex: to.Index(3)},
        {scaleIndex: to.Index(1)},
        {scaleIndex: to.Index(2)},
    ],
)

export {
    trueSpringAllYaosUmowchuwowiestSegment,
    trueAllYaosAllRhythmsAtOnceSegment,
    trueSummerAllYaosUmowchuwowiestWithSomeHarmonicallyFlippedSegment,
}
