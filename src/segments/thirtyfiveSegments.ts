import * as to from '../../../../src/utilities/to'
import alterSegmentParts from '../alterations/alterSegmentParts'
import {
    thirtyfiveYaosAccidentInspiredPart,
    thirtyfiveYaosBassPart,
    thirtyfiveZdaubPart,
} from '../parts/thirtyfiveParts'
import { Segment } from '../types'

const thirtyfiveSegment: Segment = alterSegmentParts(
    [
        thirtyfiveZdaubPart,
        thirtyfiveYaosAccidentInspiredPart,
        thirtyfiveYaosBassPart,
    ],
    [
        {scaleIndex: to.Index(0), gainScalar: to.Scalar(0.66)},
        {scaleIndex: to.Index(1)},
        {scaleIndex: to.Index(5), gainScalar: to.Scalar(1.25)},
    ],
)

export {
    thirtyfiveSegment,
}
