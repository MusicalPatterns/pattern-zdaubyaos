import { DictionaryOf, Segment, to } from '../../../../../../src'
import { buildZdaubyaosSegment } from '../../../materials'
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
            buildZdaubyaosSegment(
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
            buildZdaubyaosSegment(
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

        const almostTrueBonyJigAndNowItGetsKindaHighAndMagicSparklySegment: Segment = buildZdaubyaosSegment(
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
