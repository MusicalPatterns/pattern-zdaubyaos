import flipEntities from '../flipEntities'
import {
    experimentWithIestttPart,
    experimentWithUmowwwPart,
    thirtyfiveAPart,
    thirtyfiveBPart,
    thirtyfiveCPart,
} from '../parts/otherParts'
import { Segment } from '../types'

const thirtyfiveSegment: Segment = flipEntities(
    [
        thirtyfiveCPart,
        thirtyfiveBPart,
        thirtyfiveAPart,
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
