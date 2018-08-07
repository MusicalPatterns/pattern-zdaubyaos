import alterSegmentParts from '../alterations/alterSegmentParts'
import {
    breatherFallPart,
    breatherRestPart,
    breatherSpringAltPart,
    breatherSpringPart,
    breatherSummerPart, breatherVarietyPart,
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

const breatherFallWhichIsGoodIntroForJigSegment: Segment = alterSegmentParts(
    [
        breatherRestPart,
        breatherRestPart,
        breatherFallPart,
    ],
    [{}, {}, {gainAdjust: 0.5, pitchIndexOffset: -1}],
)

const breatherSpringAltNiceAsABreatherToABreatherSegment: Segment = alterSegmentParts(
    [
        breatherRestPart,
        breatherSpringAltPart,
        breatherRestPart,
    ],
    [{}, {gainAdjust: 0.5, flipHarmonically: true}, {}],
)

const breatherVarietyQuiteTheReveilleSegment: Segment = alterSegmentParts(
    [
        breatherVarietyPart,
        breatherVarietyPart,
        breatherVarietyPart,
    ],
    [{gainAdjust: 1.5}, {gainAdjust: 1.5}, {gainAdjust: 1.5}],
)

export {
    breatherSpringSegment,
    breatherSummerSegment,
    breatherFallWhichIsGoodIntroForJigSegment,
    breatherSpringAltNiceAsABreatherToABreatherSegment,
    breatherVarietyQuiteTheReveilleSegment,
}
