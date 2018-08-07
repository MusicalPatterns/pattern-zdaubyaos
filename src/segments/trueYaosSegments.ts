import alterSegmentParts from '../alterations/alterSegmentParts'
import {
    trueYaosInaidjiyaiouzdSummerToSpringPart,
    trueYaosUmowchuwowiestSpringToSummerPart,
    trueYaosUmowchuwowiestSummerToSpringPart,
    trueYaosUmowchuwowiestSummerToSpringPartWithFun,
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

const almostTrueSummerAllYaosUmowchuwowiestWithSomeHarmonicallyFlippedSegmentAndFun: Segment = alterSegmentParts(
    [
        trueYaosUmowchuwowiestSummerToSpringPartWithFun,
        trueYaosUmowchuwowiestSummerToSpringPartWithFun,
        trueYaosUmowchuwowiestSummerToSpringPartWithFun,
    ],
    [{flipHarmonically: true}, {}, {}],
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
    almostTrueSummerAllYaosUmowchuwowiestWithSomeHarmonicallyFlippedSegmentAndFun,
    trueAllYaosAllRhythmsAtOnceSegment,
}
