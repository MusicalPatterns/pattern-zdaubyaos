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
    [{gainAdjust: 0.5}, {}, {}],
)

const breatherSummerSegment: Segment = alterSegmentParts(
    [
        breatherRestPart,
        breatherSummerPart,
        breatherRestPart,
    ],
    [{}, {gainAdjust: 0.5, flipHarmonically: true}, {}],
)

const doubleBreatherFallWhichIsGoodIntroForJigSegment: Segment = alterSegmentParts(
    [
        doubleBreatherRestPart,
        doubleBreatherRestPart,
        doubleBreatherFallPart,
    ],
    [{}, {}, {gainAdjust: 0.5, pitchIndexOffset: -1}],
)

const breatherSpringAltNiceAsABreatherToABreatherSegment: Segment = alterSegmentParts(
    [
        breatherRestPart,
        breatherSpringAltPart,
        breatherRestPart,
    ],
    [{}, {gainAdjust: 0.5}, {}],
)

const breatherVarietyQuiteTheReveilleSegment: Segment = alterSegmentParts(
    [
        breatherVarietyPart,
        breatherVarietyPart,
        breatherVarietyPart,
    ],
    [
        {gainAdjust: 1, flipHarmonically: true},
        {gainAdjust: 1, flipHarmonically: true},
        {gainAdjust: 1, flipHarmonically: true},
    ],
)

export {
    breatherSpringSegment,
    breatherSummerSegment,
    doubleBreatherFallWhichIsGoodIntroForJigSegment,
    breatherSpringAltNiceAsABreatherToABreatherSegment,
    breatherVarietyQuiteTheReveilleSegment,
}
