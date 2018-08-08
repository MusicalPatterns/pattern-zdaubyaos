import alterSegmentParts from '../alterations/alterSegmentParts'
import {
    almostTrueExtendedEndingZdaubBonyPart,
    almostTrueExtendedEndingZdaubGlisPart,
    almostTrueExtendedEndingZdaubTremPart,
    almostTrueYaosUmowchuwowiestAndInaidjiyaiouzdFallAndPitchAdjustmentPart,
    almostTrueYaosUmowchuwowiestSummerToSpringPartWithFun,
    almostTrueYetOfBackbonePart,
    almostTrueZdaubBonyWithSuperinscapePart,
} from '../parts/almostTrueParts'
import { Segment } from '../types'

const almostTrueFallAllYaosBothBlockStrategiesBonyJigIntroHappyGoLuckyRandomFeelingSegment: Segment = alterSegmentParts(
    [
        almostTrueYaosUmowchuwowiestAndInaidjiyaiouzdFallAndPitchAdjustmentPart,
        almostTrueYaosUmowchuwowiestAndInaidjiyaiouzdFallAndPitchAdjustmentPart,
        almostTrueYaosUmowchuwowiestAndInaidjiyaiouzdFallAndPitchAdjustmentPart,
    ],
    [{flipHarmonically: true}, {flipHarmonically: true}, {flipHarmonically: true}],
)

const almostTrueExtendedEndingAllZdaubTriumphantAllNoteTypesFlippedHarmonicallySegment: Segment = alterSegmentParts(
    [
        almostTrueExtendedEndingZdaubTremPart,
        almostTrueExtendedEndingZdaubBonyPart,
        almostTrueExtendedEndingZdaubGlisPart,
    ],
    [{flipHarmonically: true}, {flipHarmonically: true}, {flipHarmonically: true}],
)

const almostTrueBonyJigAndNowItGetsKindaHighAndMagicSparklySegment: Segment = alterSegmentParts(
    [
        almostTrueYetOfBackbonePart,
        almostTrueYetOfBackbonePart,
        almostTrueZdaubBonyWithSuperinscapePart,
    ],
    [{gainAdjust: 0.33, flipHarmonically: true}, {gainAdjust: 0.33, flipHarmonically: true}, {gainAdjust: 0.33}],
)

const almostTrueSummerAllYaosUmowchuwowiestWithSomeHarmonicallyFlippedSegmentAndFun: Segment = alterSegmentParts(
    [
        almostTrueYaosUmowchuwowiestSummerToSpringPartWithFun,
        almostTrueYaosUmowchuwowiestSummerToSpringPartWithFun,
        almostTrueYaosUmowchuwowiestSummerToSpringPartWithFun,
    ],
    [{flipHarmonically: true}, {}, {}],
)

export {
    almostTrueFallAllYaosBothBlockStrategiesBonyJigIntroHappyGoLuckyRandomFeelingSegment,
    almostTrueExtendedEndingAllZdaubTriumphantAllNoteTypesFlippedHarmonicallySegment,
    almostTrueBonyJigAndNowItGetsKindaHighAndMagicSparklySegment,
    almostTrueSummerAllYaosUmowchuwowiestWithSomeHarmonicallyFlippedSegmentAndFun,
}
