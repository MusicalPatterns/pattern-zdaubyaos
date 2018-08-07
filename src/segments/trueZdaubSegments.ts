import flipEntities from '../flipEntities'
import { trueYetOfBackbonePart } from '../parts/otherParts'
import {
    trueYaosUmowchuwowiestSpringToSummerPart,
    trueYaosUmowchuwowiestSummerToSpringPart,
} from '../parts/trueYaosParts'
import {
    trueZdaubBonyPart,
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

const trueSummerWithZdaubAndSeparationVariantGetsPleasantlyGnarlyHarmonicallySegment: Segment = flipEntities(
    [
        trueYaosUmowchuwowiestSummerToSpringPart,
        trueZdaubGlisPart,
        trueZdaubGlisVariantPart,
    ],
    [true, false, false],
)

const trueBonyJigAndNowItGetsKindaHighAndMagicSparklySegment: Segment = flipEntities(
    [
        trueYetOfBackbonePart,
        trueYetOfBackbonePart,
        trueZdaubBonyWithSuperinscapePart,
    ],
    [true, true, false],
)

const trueAllZdaubTriumphantAndExperienceThePowerOfTheThreeScalesTogetherSegment: Segment = flipEntities(
    [
        trueZdaubTremPart,
        trueZdaubBonyPart,
        trueZdaubGlisPart,
    ],
    [true, true, true],
)

export {
    trueSpringWithZdaubSegment,
    trueSummerWithZdaubAndSeparationVariantGetsPleasantlyGnarlyHarmonicallySegment,
    trueBonyJigAndNowItGetsKindaHighAndMagicSparklySegment,
    trueAllZdaubTriumphantAndExperienceThePowerOfTheThreeScalesTogetherSegment,
}
