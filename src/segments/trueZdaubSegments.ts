import flipEntities from '../flipEntities'
import { trueYetOfBackbonePart } from '../parts/otherParts'
import {
    trueYaosUmowchuwowiestSpringToSummerPart,
    trueYaosUmowchuwowiestSummerToSpringPart,
} from '../parts/trueYaosParts'
import {
    trueZdaubBonyWithSuperinscapePart,
    trueZdaubGlisPart,
    trueZdaubGlisVariantPart,
    trueZdaubTremPart,
} from '../parts/trueZdaubParts'
import { Segment } from '../types'

const trueSpringWithZdaubSegment: Segment = flipEntities(
    [
        trueZdaubGlisPart,
        trueYaosUmowchuwowiestSpringToSummerPart,
        trueZdaubTremPart,
    ],
    [false, false, false],
)

const trueSummerWithZdaubSegment: Segment = flipEntities(
    [
        trueYaosUmowchuwowiestSummerToSpringPart,
        trueZdaubGlisPart,
        trueZdaubGlisVariantPart,
    ],
    [true, false, false],
)

const trueBonyJigSegment: Segment = flipEntities(
    [
        trueYetOfBackbonePart,
        trueYetOfBackbonePart,
        trueZdaubBonyWithSuperinscapePart,
    ],
    [true, true, true],
)

const trueAllZdaubTriumphantSegment: Segment = flipEntities(
    [
        trueZdaubTremPart,
        trueZdaubBonyWithSuperinscapePart,
        trueZdaubGlisPart,
    ],
    [false, false, false],
)

export {
    trueSpringWithZdaubSegment,
    trueSummerWithZdaubSegment,
    trueBonyJigSegment,
    trueAllZdaubTriumphantSegment,
}
