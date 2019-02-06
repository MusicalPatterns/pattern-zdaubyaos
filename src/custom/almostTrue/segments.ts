import { Segment } from '@musical-patterns/pattern'
import { DictionaryOf, to } from '@musical-patterns/utilities'
import { buildSegment } from '../../material'
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
                    { scaleIndex: to.Ordinal(3) },
                    { scaleIndex: to.Ordinal(4) },
                    { scaleIndex: to.Ordinal(5) },
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
                    { scaleIndex: to.Ordinal(3) },
                    { scaleIndex: to.Ordinal(4) },
                    { scaleIndex: to.Ordinal(5) },
                ],
            )

        const almostTrueBonyJigAndNowItGetsKindaHighAndMagicSparklySegment: Segment = buildSegment(
            [
                almostTrueYetOfBackboneContourWhole,
                almostTrueYetOfBackboneContourWhole,
                almostTrueZdaubBonyWithSuperinscapeContourWhole,
            ],
            [
                { gainScalar: to.Scalar(0.33), scaleIndex: to.Ordinal(3) },
                { gainScalar: to.Scalar(0.33), scaleIndex: to.Ordinal(4) },
                { gainScalar: to.Scalar(0.33), scaleIndex: to.Ordinal(2) },
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
