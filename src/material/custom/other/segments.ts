import { Scale, Segment } from '@musical-patterns/material'
import { Amplitude, negative, Ordinal, Scalar, to } from '@musical-patterns/utilities'
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
                    gainScalar: to.Scalar<Amplitude>(0.8),
                    pitchIndexTranslation: to.Translation<Ordinal<Scalar>>(4),
                    scaleIndex: to.Ordinal<Scale>(3),
                },
                {
                    gainScalar: to.Scalar<Amplitude>(0.8),
                    pitchIndexTranslation: to.Translation<Ordinal<Scalar>>(6),
                    scaleIndex: to.Ordinal<Scale>(4),
                },
                {
                    gainScalar: to.Scalar<Amplitude>(0.8),
                    pitchIndexTranslation: to.Translation<Ordinal<Scalar>>(3),
                    scaleIndex: to.Ordinal<Scale>(5),
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
                    pitchIndexTranslation: to.Translation<Ordinal<Scalar>>(2),
                    scaleIndex: to.Ordinal<Scale>(0),
                },
                {
                    pitchIndexTranslation: to.Translation<Ordinal<Scalar>>(negative(2)),
                    scaleIndex: to.Ordinal<Scale>(1),
                },
                {
                    pitchIndexTranslation: to.Translation<Ordinal<Scalar>>(negative(3)),
                    scaleIndex: to.Ordinal<Scale>(2),
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
                { scaleIndex: to.Ordinal<Scale>(3) },
                { scaleIndex: to.Ordinal<Scale>(4) },
                { scaleIndex: to.Ordinal<Scale>(5) },
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
