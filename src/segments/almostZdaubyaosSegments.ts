import { Scalar } from '../../../../src/utilities/nominalTypes'
import * as to from '../../../../src/utilities/to'
import buildSegment from '../notes/buildSegment'
import { SegmentsObject } from '../notes/types'
import {
    almostTrueExtendedEndingZdaubBonyPart,
    almostTrueExtendedEndingZdaubGlisPart,
    almostTrueExtendedEndingZdaubTremPart,
    almostTrueYaosUmowchuwowiestAndInaidjiyaiouzdFallAndPitchAdjustmentPart,
    almostTrueYetOfBackbonePart,
    almostTrueZdaubBonyWithSuperinscapePart,
} from '../parts/almostZdaubyaosParts'
import { Segment } from '../types'

const buildAlmostZdaubyaosSegments: (songDurationScalar: Scalar) => SegmentsObject =
    (songDurationScalar: Scalar): SegmentsObject => {
        const almostTrueFallAllYaosBothBlockStrategiesBonyJigIntroHappyGoLuckyRandomFeelingSegment: Segment =
            buildSegment(
                [
                    almostTrueYaosUmowchuwowiestAndInaidjiyaiouzdFallAndPitchAdjustmentPart,
                    almostTrueYaosUmowchuwowiestAndInaidjiyaiouzdFallAndPitchAdjustmentPart,
                    almostTrueYaosUmowchuwowiestAndInaidjiyaiouzdFallAndPitchAdjustmentPart,
                ],
                [
                    { scaleIndex: to.Index(3) },
                    { scaleIndex: to.Index(4) },
                    { scaleIndex: to.Index(5) },
                ],
                songDurationScalar,
            )

        const almostTrueExtendedEndingAllZdaubTriumphantAllNoteTypesFlippedHarmonicallySegment: Segment = buildSegment(
            [
                almostTrueExtendedEndingZdaubTremPart,
                almostTrueExtendedEndingZdaubBonyPart,
                almostTrueExtendedEndingZdaubGlisPart,
            ],
            [
                { scaleIndex: to.Index(3) },
                { scaleIndex: to.Index(4) },
                { scaleIndex: to.Index(5) },
            ],
            songDurationScalar,
        )

        const almostTrueBonyJigAndNowItGetsKindaHighAndMagicSparklySegment: Segment = buildSegment(
            [
                almostTrueYetOfBackbonePart,
                almostTrueYetOfBackbonePart,
                almostTrueZdaubBonyWithSuperinscapePart,
            ],
            [
                { gainScalar: to.Scalar(0.33), scaleIndex: to.Index(3) },
                { gainScalar: to.Scalar(0.33), scaleIndex: to.Index(4) },
                { gainScalar: to.Scalar(0.33), scaleIndex: to.Index(2) },
            ],
            songDurationScalar,
        )

        return {
            almostTrueBonyJigAndNowItGetsKindaHighAndMagicSparklySegment,
            almostTrueExtendedEndingAllZdaubTriumphantAllNoteTypesFlippedHarmonicallySegment,
            almostTrueFallAllYaosBothBlockStrategiesBonyJigIntroHappyGoLuckyRandomFeelingSegment,
        }
    }

export {
    buildAlmostZdaubyaosSegments,
}
