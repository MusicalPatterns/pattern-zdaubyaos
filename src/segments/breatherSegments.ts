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
    [
        {gainScalar: to.Scalar(0.5), scaleIndex: to.Index(0)},
        {scaleIndex: to.Index(1)},
        {scaleIndex: to.Index(2)},
    ],
)

const breatherSummerSegment: Segment = alterSegmentParts(
    [
        breatherRestPart,
        breatherSummerPart,
        breatherRestPart,
    ],
    [
        {scaleIndex: to.Index(0)},
        {gainScalar: to.Scalar(0.5), scaleIndex: to.Index(4)},
        {scaleIndex: to.Index(2)},
    ],
)

const doubleBreatherFallWhichIsGoodIntroForJigSegment: Segment = alterSegmentParts(
    [
        doubleBreatherRestPart,
        doubleBreatherRestPart,
        doubleBreatherFallPart,
    ],
    [
        {scaleIndex: to.Index(0)},
        {scaleIndex: to.Index(1)},
        {gainScalar: to.Scalar(0.5), pitchIndexOffset: to.Offset(-1), scaleIndex: to.Index(2)},
    ],
)

const breatherSpringAltNiceAsABreatherToABreatherSegment: Segment = alterSegmentParts(
    [
        breatherRestPart,
        breatherSpringAltPart,
        breatherRestPart,
    ],
    [
        {scaleIndex: to.Index(0)},
        {gainScalar: to.Scalar(0.5), scaleIndex: to.Index(1)},
        {scaleIndex: to.Index(2)},
    ],
)

const breatherVarietyQuiteTheReveilleSegment: Segment = alterSegmentParts(
    [
        breatherVarietyPart,
        breatherVarietyPart,
        breatherVarietyPart,
    ],
    [
        {scaleIndex: to.Index(3)},
        {scaleIndex: to.Index(4)},
        {scaleIndex: to.Index(5)},
    ],
)

export {
    breatherSpringSegment,
    breatherSummerSegment,
    doubleBreatherFallWhichIsGoodIntroForJigSegment,
    breatherSpringAltNiceAsABreatherToABreatherSegment,
    breatherVarietyQuiteTheReveilleSegment,
}
