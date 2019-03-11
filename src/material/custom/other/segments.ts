import { Segment } from '@musical-patterns/pattern'
import { negative, to } from '@musical-patterns/utilities'
import { computeSegment } from '../../segments'
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
                    gainScalar: to.Scalar(to.Amplitude(0.8)),
                    pitchIndexTranslation: to.Translation(4),
                    scaleIndex: to.Ordinal(3),
                },
                {
                    gainScalar: to.Scalar(to.Amplitude(0.8)),
                    pitchIndexTranslation: to.Translation(6),
                    scaleIndex: to.Ordinal(4),
                },
                {
                    gainScalar: to.Scalar(to.Amplitude(0.8)),
                    pitchIndexTranslation: to.Translation(3),
                    scaleIndex: to.Ordinal(5),
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
                { pitchIndexTranslation: to.Translation(2), scaleIndex: to.Ordinal(0) },
                { pitchIndexTranslation: to.Translation(negative(2)), scaleIndex: to.Ordinal(1) },
                { pitchIndexTranslation: to.Translation(negative(3)), scaleIndex: to.Ordinal(2) },
            ],
        )

        const shifty: Segment = computeSegment(
            [
                otherContourWholes.shiftyA,
                otherContourWholes.shiftyB,
                otherContourWholes.shiftyB,
            ],
            [
                { scaleIndex: to.Ordinal(3) },
                { scaleIndex: to.Ordinal(4) },
                { scaleIndex: to.Ordinal(5) },
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
