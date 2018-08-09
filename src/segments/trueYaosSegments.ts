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
    [{}, {}, {}],
)

const trueAllYaosAllRhythmsAtOnceSegment: Segment = alterSegmentParts(
    [
        trueYaosUmowchuwowiestSpringToSummerPart,
        trueYaosUmowchuwowiestSummerToSpringPart,
        trueYaosInaidjiyaiouzdSummerToSpringPart,
    ],
    [{flipHarmonically: true}, {flipHarmonically: true}, {}],
)

const trueSummerAllYaosUmowchuwowiestWithSomeHarmonicallyFlippedSegment: Segment = alterSegmentParts(
    [
        trueYaosUmowchuwowiestSummerToSpringPart,
        trueYaosUmowchuwowiestSummerToSpringPart,
        trueYaosUmowchuwowiestSummerToSpringPart,
    ],
    [{flipHarmonically: true}, {}, {}],
)

export {
    trueSpringAllYaosUmowchuwowiestSegment,
    trueAllYaosAllRhythmsAtOnceSegment,
    trueSummerAllYaosUmowchuwowiestWithSomeHarmonicallyFlippedSegment,
}
