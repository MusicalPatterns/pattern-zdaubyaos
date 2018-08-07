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
    [{gainAdjust: 0.66}, {}, {gainAdjust: 2, flipHarmonically: true}],
)

export {
    thirtyfiveSegment,
}
