import * as to from '../../../../src/utilities/to'
import makeSegment from '../alterations/makeSegment'
import {
    trueYaosInaidjiyaiouzdSummerToSpringPart,
    trueYaosUmowchuwowiestSpringToSummerPart,
    trueYaosUmowchuwowiestSummerToSpringPart,
} from '../parts/trueYaosParts'
import { Segment } from '../types'

const trueSpringAllYaosUmowchuwowiestSegment: Segment = makeSegment(
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

const trueAllYaosAllRhythmsAtOnceSegment: Segment = makeSegment(
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

const trueSummerAllYaosUmowchuwowiestWithSomeHarmonicallyFlippedSegment: Segment = makeSegment(
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
