import { Scale, Segment } from '@musical-patterns/material'
import { as, Intensity, Pitch } from '@musical-patterns/utilities'
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
                { scaleIndex: as.Ordinal<Array<Scale<Pitch>>>(3) },
                { scaleIndex: as.Ordinal<Array<Scale<Pitch>>>(4) },
                { scaleIndex: as.Ordinal<Array<Scale<Pitch>>>(5) },
            ],
        )

        const extendedEndingAllZdaubTriumphantAllNoteTypesFlippedHarmonically: Segment = computeSegment(
            [
                wholes.extendedEndingZdaubTrem,
                wholes.extendedEndingZdaubBony,
                wholes.extendedEndingZdaubGlis,
            ],
            [
                { scaleIndex: as.Ordinal<Array<Scale<Pitch>>>(3) },
                { scaleIndex: as.Ordinal<Array<Scale<Pitch>>>(4) },
                { scaleIndex: as.Ordinal<Array<Scale<Pitch>>>(5) },
            ],
        )

        const bonyJigAndNowItBecomesKindaHighAndMagicSparkly: Segment = computeSegment(
            [
                wholes.yetOfBackbone,
                wholes.yetOfBackbone,
                wholes.zdaubBonyWithSuperinscape,
            ],
            [
                { intensityScalar: as.NormalScalar<Intensity>(0.33), scaleIndex: as.Ordinal<Array<Scale<Pitch>>>(3) },
                { intensityScalar: as.NormalScalar<Intensity>(0.33), scaleIndex: as.Ordinal<Array<Scale<Pitch>>>(4) },
                { intensityScalar: as.NormalScalar<Intensity>(0.33), scaleIndex: as.Ordinal<Array<Scale<Pitch>>>(2) },
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
