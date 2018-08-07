import alterSegmentParts from '../alterSegmentParts'
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
    [{}, {}, {flipHarmonically: true}],
)

const experimentWithIestttAndUmowwwSegment: Segment = alterSegmentParts(
    [
        experimentWithIestttPart,
        experimentWithUmowwwPart,
        experimentWithUmowwwPart,
    ],
    [{flipHarmonically: true}, {}, {flipHarmonically: true}],
)

export {
    thirtyfiveSegment,
    experimentWithIestttAndUmowwwSegment,
}
