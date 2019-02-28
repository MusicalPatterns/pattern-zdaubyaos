import { Segment } from '@musical-patterns/pattern'
import { to } from '@musical-patterns/utilities'
import { buildSegment } from '../../segments'
import { AlmostTrueContourWholes, AlmostTrueSegments } from './types'
import { buildAlmostTrueContourWholes } from './wholes'

const buildAlmostTrueSegments: () => AlmostTrueSegments =
    (): AlmostTrueSegments => {
        const wholes: AlmostTrueContourWholes = buildAlmostTrueContourWholes()

        const fallAllYaosBothBlockStrategiesBonyJigIntroHappyGoLuckyRandomFeeling: Segment = buildSegment(
            [
                wholes.yaosUmowchuwowiestAndInaidjiyaiouzdFallAndPitchAdjustment,
                wholes.yaosUmowchuwowiestAndInaidjiyaiouzdFallAndPitchAdjustment,
                wholes.yaosUmowchuwowiestAndInaidjiyaiouzdFallAndPitchAdjustment,
            ],
            [
                { scaleIndex: to.Ordinal(3) },
                { scaleIndex: to.Ordinal(4) },
                { scaleIndex: to.Ordinal(5) },
            ],
        )

        const extendedEndingAllZdaubTriumphantAllNoteTypesFlippedHarmonically: Segment = buildSegment(
            [
                wholes.extendedEndingZdaubTrem,
                wholes.extendedEndingZdaubBony,
                wholes.extendedEndingZdaubGlis,
            ],
            [
                { scaleIndex: to.Ordinal(3) },
                { scaleIndex: to.Ordinal(4) },
                { scaleIndex: to.Ordinal(5) },
            ],
        )

        const bonyJigAndNowItGetsKindaHighAndMagicSparkly: Segment = buildSegment(
            [
                wholes.yetOfBackbone,
                wholes.yetOfBackbone,
                wholes.zdaubBonyWithSuperinscape,
            ],
            [
                { gainScalar: to.Scalar(to.Amplitude(0.33)), scaleIndex: to.Ordinal(3) },
                { gainScalar: to.Scalar(to.Amplitude(0.33)), scaleIndex: to.Ordinal(4) },
                { gainScalar: to.Scalar(to.Amplitude(0.33)), scaleIndex: to.Ordinal(2) },
            ],
        )

        return {
            bonyJigAndNowItGetsKindaHighAndMagicSparkly,
            extendedEndingAllZdaubTriumphantAllNoteTypesFlippedHarmonically,
            fallAllYaosBothBlockStrategiesBonyJigIntroHappyGoLuckyRandomFeeling,
        }
    }

export {
    buildAlmostTrueSegments,
}
