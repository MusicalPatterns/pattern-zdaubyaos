import alterSegmentParts from '../alterations/alterSegmentParts'
import {
    experimentWithIestttPart,
    experimentWithUmowwwPart,
    thirtyfiveYaosAccidentInspiredPart,
    thirtyfiveYaosBassPart,
    thirtyfiveZdaubPart,
} from '../parts/otherParts'
import { Segment } from '../types'

const thirtyfiveSegment: Segment = alterSegmentParts(
    [
        thirtyfiveZdaubPart,
        thirtyfiveYaosAccidentInspiredPart,
        thirtyfiveYaosBassPart,
    ],
    [{gainAdjust: 0.66}, {}, {gainAdjust: 2, flipHarmonically: true}],
)

const experimentWithIestttAndUmowwwSegment: Segment = alterSegmentParts(
    [
        experimentWithIestttPart,
        experimentWithUmowwwPart,
        experimentWithUmowwwPart,
    ],
    [{flipHarmonically: true, pitchIndexOffset: 2}, {}, {flipHarmonically: true}],
)

export {
    thirtyfiveSegment,
    experimentWithIestttAndUmowwwSegment,
}
