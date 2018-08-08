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
        {gainScalar: to.Scalar(0.66)},
        {},
        {gainScalar: to.Scalar(1.25), flipHarmonically: true},
    ],
)

export {
    thirtyfiveSegment,
}
