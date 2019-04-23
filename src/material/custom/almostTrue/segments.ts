import { Scale, Segment } from '@musical-patterns/material'
import { Amplitude, as } from '@musical-patterns/utilities'
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
                { scaleIndex: as.Ordinal<Scale[]>(3) },
                { scaleIndex: as.Ordinal<Scale[]>(4) },
                { scaleIndex: as.Ordinal<Scale[]>(5) },
            ],
        )

        const extendedEndingAllZdaubTriumphantAllNoteTypesFlippedHarmonically: Segment = computeSegment(
            [
                wholes.extendedEndingZdaubTrem,
                wholes.extendedEndingZdaubBony,
                wholes.extendedEndingZdaubGlis,
            ],
            [
                { scaleIndex: as.Ordinal<Scale[]>(3) },
                { scaleIndex: as.Ordinal<Scale[]>(4) },
                { scaleIndex: as.Ordinal<Scale[]>(5) },
            ],
        )

        const bonyJigAndNowItBecomesKindaHighAndMagicSparkly: Segment = computeSegment(
            [
                wholes.yetOfBackbone,
                wholes.yetOfBackbone,
                wholes.zdaubBonyWithSuperinscape,
            ],
            [
                { gainScalar: as.NormalScalar<Amplitude>(0.33), scaleIndex: as.Ordinal<Scale[]>(3) },
                { gainScalar: as.NormalScalar<Amplitude>(0.33), scaleIndex: as.Ordinal<Scale[]>(4) },
                { gainScalar: as.NormalScalar<Amplitude>(0.33), scaleIndex: as.Ordinal<Scale[]>(2) },
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
