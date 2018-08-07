import alterSegmentParts from '../alterations/alterSegmentParts'
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

const trueSpringWithZdaubSegment: Segment = alterSegmentParts(
    [
        trueZdaubGlisPart,
        trueYaosUmowchuwowiestSpringToSummerPart,
        trueZdaubTremPart,
    ],
    [{}, {}, {}],
)

const trueSummerWithZdaubAndSeparationVariantGetsPleasantlyGnarlyHarmonicallySegment: Segment = alterSegmentParts(
    [
        trueYaosUmowchuwowiestSummerToSpringPart,
        trueZdaubGlisPart,
        trueZdaubGlisVariantPart,
    ],
    [{flipHarmonically: true}, {}, {}],
)

const trueBonyJigAndNowItGetsKindaHighAndMagicSparklySegment: Segment = alterSegmentParts(
    [
        trueYetOfBackbonePart,
        trueYetOfBackbonePart,
        trueZdaubBonyWithSuperinscapePart,
    ],
    [{gainAdjust: 0.33, flipHarmonically: true}, {gainAdjust: 0.33, flipHarmonically: true}, {gainAdjust: 0.33}],
)

const trueAllZdaubTriumphantAllThreeNoteTypesFlippedHarmonicallySegment: Segment = alterSegmentParts(
    [
        trueZdaubTremPart,
        trueZdaubBonyPart,
        trueZdaubGlisPart,
    ],
    [{flipHarmonically: true}, {flipHarmonically: true}, {flipHarmonically: true}],
)

export {
    trueSpringWithZdaubSegment,
    trueSummerWithZdaubAndSeparationVariantGetsPleasantlyGnarlyHarmonicallySegment,
    trueBonyJigAndNowItGetsKindaHighAndMagicSparklySegment,
    trueAllZdaubTriumphantAllThreeNoteTypesFlippedHarmonicallySegment,
}
