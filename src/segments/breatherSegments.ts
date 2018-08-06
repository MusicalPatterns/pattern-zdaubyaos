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

const breatherFallSegment: Segment = flipEntities(
    [
    breatherRestPart,
    breatherRestPart,
    breatherFallPart,
],
    [false, false, false],
)

const breatherSpringAltSegment: Segment = flipEntities(
    [
    breatherRestPart,
    breatherSpringAltPart,
    breatherRestPart,
],
    [true, true, true],
)

const breatherVarietySegment: Segment = flipEntities(
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
    breatherFallSegment,
    breatherSpringAltSegment,
    breatherVarietySegment,
}
