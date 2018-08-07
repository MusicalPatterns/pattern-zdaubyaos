import alterSegmentParts from '../alterSegmentParts'
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
    [{}, {}, {}],
)

const breatherSummerSegment: Segment = alterSegmentParts(
    [
        breatherRestPart,
        breatherSummerPart,
        breatherRestPart,
    ],
    [{flipHarmonically: true}, {flipHarmonically: true}, {}],
)

const breatherFallWhichIsGoodIntroForJigSegment: Segment = alterSegmentParts(
    [
        breatherRestPart,
        breatherRestPart,
        breatherFallPart,
    ],
    [{}, {}, {}],
)

const breatherSpringAltNiceAsABreatherToABreatherSegment: Segment = alterSegmentParts(
    [
        breatherRestPart,
        breatherSpringAltPart,
        breatherRestPart,
    ],
    [{flipHarmonically: true}, {flipHarmonically: true}, {flipHarmonically: true}],
)

const breatherVarietyQuiteTheReveilleSegment: Segment = alterSegmentParts(
    [
        breatherVarietyPart,
        breatherVarietyPart,
        breatherVarietyPart,
    ],
    [{}, {}, {}],
)

export {
    breatherSpringSegment,
    breatherSummerSegment,
    breatherFallWhichIsGoodIntroForJigSegment,
    breatherSpringAltNiceAsABreatherToABreatherSegment,
    breatherVarietyQuiteTheReveilleSegment,
}
