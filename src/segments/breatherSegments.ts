import * as to from '../../../../src/utilities/to'
import alterSegmentParts from '../alterations/alterSegmentParts'
import {
    breatherRestPart,
    breatherSpringAltPart,
    breatherSpringPart,
    breatherSummerPart,
    breatherVarietyPart,
    doubleBreatherFallPart,
    doubleBreatherRestPart,
} from '../parts/breatherParts'
import { Segment } from '../types'

const breatherSpringSegment: Segment = alterSegmentParts(
    [
        breatherSpringPart,
        breatherRestPart,
        breatherRestPart,
    ],
    [{gainScalar: to.Scalar(0.5)}, {}, {}],
)

const breatherSummerSegment: Segment = alterSegmentParts(
    [
        breatherRestPart,
        breatherSummerPart,
        breatherRestPart,
    ],
    [{}, {gainScalar: to.Scalar(0.5), flipHarmonically: true}, {}],
)

const doubleBreatherFallWhichIsGoodIntroForJigSegment: Segment = alterSegmentParts(
    [
        doubleBreatherRestPart,
        doubleBreatherRestPart,
        doubleBreatherFallPart,
    ],
    [{}, {}, {gainScalar: to.Scalar(0.5), pitchIndexOffset: to.Offset(-1)}],
)

const breatherSpringAltNiceAsABreatherToABreatherSegment: Segment = alterSegmentParts(
    [
        breatherRestPart,
        breatherSpringAltPart,
        breatherRestPart,
    ],
    [{}, {gainScalar: to.Scalar(0.5)}, {}],
)

const breatherVarietyQuiteTheReveilleSegment: Segment = alterSegmentParts(
    [
        breatherVarietyPart,
        breatherVarietyPart,
        breatherVarietyPart,
    ],
    [
        { flipHarmonically: true},
        { flipHarmonically: true},
        { flipHarmonically: true},
    ],
)

export {
    breatherSpringSegment,
    breatherSummerSegment,
    doubleBreatherFallWhichIsGoodIntroForJigSegment,
    breatherSpringAltNiceAsABreatherToABreatherSegment,
    breatherVarietyQuiteTheReveilleSegment,
}
