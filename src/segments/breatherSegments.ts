import * as to from '../../../../src/utilities/to'
import makeSegment from '../notes/makeSegment'
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

const breatherSpringSegment: Segment = makeSegment(
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

const breatherSummerSegment: Segment = makeSegment(
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

const doubleBreatherFallWhichIsGoodIntroForJigSegment: Segment = makeSegment(
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

const breatherSpringAltNiceAsABreatherToABreatherSegment: Segment = makeSegment(
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

const breatherVarietyQuiteTheReveilleSegment: Segment = makeSegment(
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
