import * as to from '../../../../src/utilities/to'
import makeSegment from '../notes/makeSegment'
import {
    almostTrueExtendedEndingZdaubBonyPart,
    almostTrueExtendedEndingZdaubGlisPart,
    almostTrueExtendedEndingZdaubTremPart,
    almostTrueYaosUmowchuwowiestAndInaidjiyaiouzdFallAndPitchAdjustmentPart,
    almostTrueYetOfBackbonePart,
    almostTrueZdaubBonyWithSuperinscapePart,
} from '../parts/almostZdaubyaosParts'
import { Segment } from '../types'

const almostTrueFallAllYaosBothBlockStrategiesBonyJigIntroHappyGoLuckyRandomFeelingSegment: Segment = makeSegment(
    [
        almostTrueYaosUmowchuwowiestAndInaidjiyaiouzdFallAndPitchAdjustmentPart,
        almostTrueYaosUmowchuwowiestAndInaidjiyaiouzdFallAndPitchAdjustmentPart,
        almostTrueYaosUmowchuwowiestAndInaidjiyaiouzdFallAndPitchAdjustmentPart,
    ],
    [
        {scaleIndex: to.Index(3)},
        {scaleIndex: to.Index(4)},
        {scaleIndex: to.Index(5)},
    ],
)

const almostTrueExtendedEndingAllZdaubTriumphantAllNoteTypesFlippedHarmonicallySegment: Segment = makeSegment(
    [
        almostTrueExtendedEndingZdaubTremPart,
        almostTrueExtendedEndingZdaubBonyPart,
        almostTrueExtendedEndingZdaubGlisPart,
    ],
    [
        {scaleIndex: to.Index(3)},
        {scaleIndex: to.Index(4)},
        {scaleIndex: to.Index(5)},
    ],
)

const almostTrueBonyJigAndNowItGetsKindaHighAndMagicSparklySegment: Segment = makeSegment(
    [
        almostTrueYetOfBackbonePart,
        almostTrueYetOfBackbonePart,
        almostTrueZdaubBonyWithSuperinscapePart,
    ],
    [
        {gainScalar: to.Scalar(0.33), scaleIndex: to.Index(3)},
        {gainScalar: to.Scalar(0.33), scaleIndex: to.Index(4)},
        {gainScalar: to.Scalar(0.33), scaleIndex: to.Index(2)},
    ],
)

export {
    almostTrueFallAllYaosBothBlockStrategiesBonyJigIntroHappyGoLuckyRandomFeelingSegment,
    almostTrueExtendedEndingAllZdaubTriumphantAllNoteTypesFlippedHarmonicallySegment,
    almostTrueBonyJigAndNowItGetsKindaHighAndMagicSparklySegment,
}
