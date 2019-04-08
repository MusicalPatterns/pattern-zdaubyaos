import { Segment } from '@musical-patterns/material'
import { to } from '@musical-patterns/utilities'
import { computeSegment } from '../../segment'
import { AlmostTrueContourWholes, AlmostTrueSegments } from './types'
import { computeAlmostTrueContourWholes } from './wholes'

const computeAlmostTrueSegments: () => AlmostTrueSegments =
    (): AlmostTrueSegments => {
        const wholes: AlmostTrueContourWholes = computeAlmostTrueContourWholes()

        const fallAllYaosBothBlockStrategiesBonyJigIntroHappyGoLuckyRandomFeeling: Segment = computeSegment(
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

        const extendedEndingAllZdaubTriumphantAllNoteTypesFlippedHarmonically: Segment = computeSegment(
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

        const bonyJigAndNowItBecomesKindaHighAndMagicSparkly: Segment = computeSegment(
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
            bonyJigAndNowItBecomesKindaHighAndMagicSparkly,
            extendedEndingAllZdaubTriumphantAllNoteTypesFlippedHarmonically,
            fallAllYaosBothBlockStrategiesBonyJigIntroHappyGoLuckyRandomFeeling,
        }
    }

export {
    computeAlmostTrueSegments,
}
