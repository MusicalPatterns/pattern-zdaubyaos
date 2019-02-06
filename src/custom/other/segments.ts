import { Segment } from '@musical-patterns/pattern'
import { DictionaryOf, to } from '@musical-patterns/utilities'
import { buildSegment } from '../../material'
import { buildOtherContourWholes } from './wholes'

const buildOtherSegments: () => DictionaryOf<Segment> =
    (): DictionaryOf<Segment> => {
        const {
            secretLongChordContourWhole,
            shiftyAContourWhole,
            shiftyBContourWhole,
            totallyOutThereContourWhole,
        } = buildOtherContourWholes()

        const secretLongChordSegment: Segment = buildSegment(
            [
                secretLongChordContourWhole,
                secretLongChordContourWhole,
                secretLongChordContourWhole,
            ],
            [
                { pitchIndexOffset: to.Translation(4), scaleIndex: to.Ordinal(3), gainScalar: to.Scalar(0.8) },
                { pitchIndexOffset: to.Translation(6), scaleIndex: to.Ordinal(4), gainScalar: to.Scalar(0.8) },
                { pitchIndexOffset: to.Translation(3), scaleIndex: to.Ordinal(5), gainScalar: to.Scalar(0.8) },
            ],
        )

        const totallyOutThereIntroSegment: Segment = buildSegment(
            [
                totallyOutThereContourWhole,
                totallyOutThereContourWhole,
                totallyOutThereContourWhole,
            ],
            [
                { pitchIndexOffset: to.Translation(2), scaleIndex: to.Ordinal(0) },
                { pitchIndexOffset: to.Translation(-2), scaleIndex: to.Ordinal(1) },
                { pitchIndexOffset: to.Translation(-3), scaleIndex: to.Ordinal(2) },
            ],
        )

        const shiftySegment: Segment = buildSegment(
            [
                shiftyAContourWhole,
                shiftyBContourWhole,
                shiftyBContourWhole,
            ],
            [
                { scaleIndex: to.Ordinal(3) },
                { scaleIndex: to.Ordinal(4) },
                { scaleIndex: to.Ordinal(5) },
            ],
        )

        return {
            secretLongChordSegment,
            shiftySegment,
            totallyOutThereIntroSegment,
        }
    }

export {
    buildOtherSegments,
}
