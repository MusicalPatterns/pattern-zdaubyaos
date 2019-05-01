import { Scale, Segment } from '@musical-patterns/material'
import { as, Intensity, negative, Pitch, Scalar } from '@musical-patterns/utilities'
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
                    intensityScalar: as.NormalScalar<Intensity>(0.8),
                    pitchIndexShift: as.Transition<Array<Scalar<Pitch>>>(4),
                    scaleIndex: as.Ordinal<Array<Scale<Pitch>>>(3),
                },
                {
                    intensityScalar: as.NormalScalar<Intensity>(0.8),
                    pitchIndexShift: as.Transition<Array<Scalar<Pitch>>>(6),
                    scaleIndex: as.Ordinal<Array<Scale<Pitch>>>(4),
                },
                {
                    intensityScalar: as.NormalScalar<Intensity>(0.8),
                    pitchIndexShift: as.Transition<Array<Scalar<Pitch>>>(3),
                    scaleIndex: as.Ordinal<Array<Scale<Pitch>>>(5),
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
                    pitchIndexShift: as.Transition<Array<Scalar<Pitch>>>(2),
                    scaleIndex: as.Ordinal<Array<Scale<Pitch>>>(0),
                },
                {
                    pitchIndexShift: as.Transition<Array<Scalar<Pitch>>>(negative(2)),
                    scaleIndex: as.Ordinal<Array<Scale<Pitch>>>(1),
                },
                {
                    pitchIndexShift: as.Transition<Array<Scalar<Pitch>>>(negative(3)),
                    scaleIndex: as.Ordinal<Array<Scale<Pitch>>>(2),
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
                { scaleIndex: as.Ordinal<Array<Scale<Pitch>>>(3) },
                { scaleIndex: as.Ordinal<Array<Scale<Pitch>>>(4) },
                { scaleIndex: as.Ordinal<Array<Scale<Pitch>>>(5) },
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
