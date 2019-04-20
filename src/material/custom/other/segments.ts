import { Scale, Segment } from '@musical-patterns/material'
import { Amplitude, as, negative, Ordinal, Scalar } from '@musical-patterns/utilities'
import { computeSegment } from '../../segment'
import { OtherContourWholes, OtherSegments } from './types'
import { computeOtherContourWholes } from './wholes'

const computeOtherSegments: () => OtherSegments =
    (): OtherSegments => {
        const otherContourWholes: OtherContourWholes = computeOtherContourWholes()

        const secretLongChord: Segment = computeSegment(
            [
                otherContourWholes.secretLongChord,
                otherContourWholes.secretLongChord,
                otherContourWholes.secretLongChord,
            ],
            [
                {
                    gainScalar: as.NormalScalar<Amplitude>(0.8),
                    pitchIndexTranslation: as.Translation<Ordinal<Scalar>>(4),
                    scaleIndex: as.Ordinal<Scale>(3),
                },
                {
                    gainScalar: as.NormalScalar<Amplitude>(0.8),
                    pitchIndexTranslation: as.Translation<Ordinal<Scalar>>(6),
                    scaleIndex: as.Ordinal<Scale>(4),
                },
                {
                    gainScalar: as.NormalScalar<Amplitude>(0.8),
                    pitchIndexTranslation: as.Translation<Ordinal<Scalar>>(3),
                    scaleIndex: as.Ordinal<Scale>(5),
                },
            ],
        )

        const totallyOutThereIntro: Segment = computeSegment(
            [
                otherContourWholes.totallyOutThere,
                otherContourWholes.totallyOutThere,
                otherContourWholes.totallyOutThere,
            ],
            [
                {
                    pitchIndexTranslation: as.Translation<Ordinal<Scalar>>(2),
                    scaleIndex: as.Ordinal<Scale>(0),
                },
                {
                    pitchIndexTranslation: as.Translation<Ordinal<Scalar>>(negative(2)),
                    scaleIndex: as.Ordinal<Scale>(1),
                },
                {
                    pitchIndexTranslation: as.Translation<Ordinal<Scalar>>(negative(3)),
                    scaleIndex: as.Ordinal<Scale>(2),
                },
            ],
        )

        const shifty: Segment = computeSegment(
            [
                otherContourWholes.shiftyA,
                otherContourWholes.shiftyB,
                otherContourWholes.shiftyB,
            ],
            [
                { scaleIndex: as.Ordinal<Scale>(3) },
                { scaleIndex: as.Ordinal<Scale>(4) },
                { scaleIndex: as.Ordinal<Scale>(5) },
            ],
        )

        return {
            secretLongChord,
            shifty,
            totallyOutThereIntro,
        }
    }

export {
    computeOtherSegments,
}
