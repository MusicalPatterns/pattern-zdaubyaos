import { DictionaryOf, to } from '@musical-patterns/utilities'
import { Segment } from '@musical-patterns/utilities-pattern'
import { buildSegment } from '../../../materials'
import { buildAlmostTrueContourWholes } from './wholes'

const buildAlmostTrueSegments: () => DictionaryOf<Segment> =
    (): DictionaryOf<Segment> => {
        const {
            almostTrueExtendedEndingZdaubBonyContourWhole,
            almostTrueExtendedEndingZdaubGlisContourWhole,
            almostTrueExtendedEndingZdaubTremContourWhole,
            almostTrueYaosUmowchuwowiestAndInaidjiyaiouzdFallAndPitchAdjustmentContourWhole,
            almostTrueYetOfBackboneContourWhole,
            almostTrueZdaubBonyWithSuperinscapeContourWhole,
        } = buildAlmostTrueContourWholes()

        const almostTrueFallAllYaosBothBlockStrategiesBonyJigIntroHappyGoLuckyRandomFeelingSegment: Segment =
            buildSegment(
                [
                    almostTrueYaosUmowchuwowiestAndInaidjiyaiouzdFallAndPitchAdjustmentContourWhole,
                    almostTrueYaosUmowchuwowiestAndInaidjiyaiouzdFallAndPitchAdjustmentContourWhole,
                    almostTrueYaosUmowchuwowiestAndInaidjiyaiouzdFallAndPitchAdjustmentContourWhole,
                ],
                [
                    { scaleIndex: to.Index(3) },
                    { scaleIndex: to.Index(4) },
                    { scaleIndex: to.Index(5) },
                ],
            )

        const almostTrueExtendedEndingAllZdaubTriumphantAllNoteTypesFlippedHarmonicallySegment: Segment =
            buildSegment(
                [
                    almostTrueExtendedEndingZdaubTremContourWhole,
                    almostTrueExtendedEndingZdaubBonyContourWhole,
                    almostTrueExtendedEndingZdaubGlisContourWhole,
                ],
                [
                    { scaleIndex: to.Index(3) },
                    { scaleIndex: to.Index(4) },
                    { scaleIndex: to.Index(5) },
                ],
            )

        const almostTrueBonyJigAndNowItGetsKindaHighAndMagicSparklySegment: Segment = buildSegment(
            [
                almostTrueYetOfBackboneContourWhole,
                almostTrueYetOfBackboneContourWhole,
                almostTrueZdaubBonyWithSuperinscapeContourWhole,
            ],
            [
                { gainScalar: to.Scalar(0.33), scaleIndex: to.Index(3) },
                { gainScalar: to.Scalar(0.33), scaleIndex: to.Index(4) },
                { gainScalar: to.Scalar(0.33), scaleIndex: to.Index(2) },
            ],
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
