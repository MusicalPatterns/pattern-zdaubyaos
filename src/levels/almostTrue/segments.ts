import { DictionaryOf, Scalar, to } from '../../../../../src'
import { buildSegment } from '../../notes'
import { Segment } from '../../types'
import { buildAlmostTrueParts } from './parts'

const buildAlmostTrueSegments: (songDurationScalar: Scalar) => DictionaryOf<Segment> =
    (songDurationScalar: Scalar): DictionaryOf<Segment> => {
        const {
            almostTrueExtendedEndingZdaubBonyPart,
            almostTrueExtendedEndingZdaubGlisPart,
            almostTrueExtendedEndingZdaubTremPart,
            almostTrueYaosUmowchuwowiestAndInaidjiyaiouzdFallAndPitchAdjustmentPart,
            almostTrueYetOfBackbonePart,
            almostTrueZdaubBonyWithSuperinscapePart,
        } = buildAlmostTrueParts()

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
    buildAlmostTrueSegments,
}
