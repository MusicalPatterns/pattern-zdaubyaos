import { Scalar } from '../../../../src/utilities/nominalTypes'
import * as to from '../../../../src/utilities/to'
import buildSegment from '../notes/buildSegment'
import { SegmentsObject } from '../notes/types'
import {
    thirtyfiveYaosAccidentInspiredPart,
    thirtyfiveYaosBassPart,
    thirtyfiveZdaubPart,
} from '../parts/thirtyfiveParts'
import { Segment } from '../types'

const buildThirtyfiveSegments: (songDurationScalar: Scalar) => SegmentsObject =
    (songDurationScalar: Scalar): SegmentsObject => {
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
