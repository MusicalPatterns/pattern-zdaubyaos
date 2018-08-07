import flipEntities from '../flipEntities'
import {
    breatherFallPart,
    breatherRestPart,
    breatherSpringAltPart,
    breatherSpringPart,
    breatherSummerPart, breatherVarietyPart,
} from '../parts/breatherParts'
import { Segment } from '../types'

const breatherSpringSegment: Segment = flipEntities(
    [
        breatherSpringPart,
        breatherRestPart,
        breatherRestPart,
    ],
    [false, false, false],
)

const breatherSummerSegment: Segment = flipEntities(
    [
        breatherRestPart,
        breatherSummerPart,
        breatherRestPart,
    ],
    [true, true, false],
)

const breatherFallWhichIsGoodIntroForJigSegment: Segment = flipEntities(
    [
        breatherRestPart,
        breatherRestPart,
        breatherFallPart,
    ],
    [false, false, false],
)

const breatherSpringAltNiceAsABreatherToABreatherSegment: Segment = flipEntities(
    [
        breatherRestPart,
        breatherSpringAltPart,
        breatherRestPart,
    ],
    [true, true, true],
)

const breatherVarietyQuiteTheReveilleSegment: Segment = flipEntities(
    [
        breatherVarietyPart,
        breatherVarietyPart,
        breatherVarietyPart,
    ],
    [false, false, false],
)

export {
    breatherSpringSegment,
    breatherSummerSegment,
    breatherFallWhichIsGoodIntroForJigSegment,
    breatherSpringAltNiceAsABreatherToABreatherSegment,
    breatherVarietyQuiteTheReveilleSegment,
}
