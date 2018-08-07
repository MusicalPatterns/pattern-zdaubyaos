import flipEntities from '../flipEntities'
import {
    experimentWithIestttPart,
    experimentWithUmowwwPart,
    thirtyfiveYaosAccidentInspiredPart,
    thirtyfiveYaosBassPart,
    thirtyfiveZdaubPart,
} from '../parts/otherParts'
import { Segment } from '../types'

const thirtyfiveSegment: Segment = flipEntities(
    [
        thirtyfiveZdaubPart,
        thirtyfiveYaosAccidentInspiredPart,
        thirtyfiveYaosBassPart,
    ],
    [false, false, true],
)

const experimentWithIestttAndUmowwwSegment: Segment = flipEntities(
    [
        experimentWithIestttPart,
        experimentWithUmowwwPart,
        experimentWithUmowwwPart,
    ],
    [true, false, true],
)

export {
    thirtyfiveSegment,
    experimentWithIestttAndUmowwwSegment,
}
