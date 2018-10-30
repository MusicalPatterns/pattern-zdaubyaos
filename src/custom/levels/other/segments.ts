import { DictionaryOf, Segment, to } from '../../../../../../src'
import { buildZdaubyaosSegment } from '../../../materials'
import { buildOtherContourWholes } from './wholes'

const buildOtherSegments: () => DictionaryOf<Segment> =
    (): DictionaryOf<Segment> => {
        const {
            secretLongChordContourWhole,
            shiftyAContourWhole,
            shiftyBContourWhole,
            totallyOutThereContourWhole,
        } = buildOtherContourWholes()

        const secretLongChordSegment: Segment = buildZdaubyaosSegment(
            [
                secretLongChordContourWhole,
                secretLongChordContourWhole,
                secretLongChordContourWhole,
            ],
            [
                { pitchIndexOffset: to.Offset(4), scaleIndex: to.Index(3), gainScalar: to.Scalar(0.8) },
                { pitchIndexOffset: to.Offset(6), scaleIndex: to.Index(4), gainScalar: to.Scalar(0.8) },
                { pitchIndexOffset: to.Offset(3), scaleIndex: to.Index(5), gainScalar: to.Scalar(0.8) },
            ],
        )

        const totallyOutThereIntroSegment: Segment = buildZdaubyaosSegment(
            [
                totallyOutThereContourWhole,
                totallyOutThereContourWhole,
                totallyOutThereContourWhole,
            ],
            [
                { pitchIndexOffset: to.Offset(2), scaleIndex: to.Index(0) },
                { pitchIndexOffset: to.Offset(-2), scaleIndex: to.Index(1) },
                { pitchIndexOffset: to.Offset(-3), scaleIndex: to.Index(2) },
            ],
        )

        const shiftySegment: Segment = buildZdaubyaosSegment(
            [
                shiftyAContourWhole,
                shiftyBContourWhole,
                shiftyBContourWhole,
            ],
            [
                { scaleIndex: to.Index(3) },
                { scaleIndex: to.Index(4) },
                { scaleIndex: to.Index(5) },
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
