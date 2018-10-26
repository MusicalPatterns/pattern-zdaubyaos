import { DictionaryOf, Scalar, to } from '../../../../../src'
import { buildSegment } from '../../notes'
import { Segment } from '../../types'
import {
    thirtyfiveYaosAccidentInspiredPart,
    thirtyfiveYaosBassPart,
    thirtyfiveZdaubPart,
} from './parts'

const buildThirtyfiveSegments: (songDurationScalar: Scalar) => DictionaryOf<Segment> =
    (songDurationScalar: Scalar): DictionaryOf<Segment> => {
        const thirtyfiveSegment: Segment = buildSegment(
            [
                thirtyfiveZdaubPart,
                thirtyfiveYaosAccidentInspiredPart,
                thirtyfiveYaosBassPart,
            ],
            [
                { scaleIndex: to.Index(0), gainScalar: to.Scalar(0.66) },
                { scaleIndex: to.Index(1) },
                { scaleIndex: to.Index(5), gainScalar: to.Scalar(1.25) },
            ],
            songDurationScalar,
        )

        return {
            thirtyfiveSegment,
        }
    }

export {
    buildThirtyfiveSegments,
}
