import alterSegmentParts from '../alterations/alterSegmentParts'
import { shiftyAPart, shiftyBPart } from '../parts/shiftyParts'
import { Segment } from '../types'

const shiftySegment: Segment = alterSegmentParts(
    [
        shiftyAPart,
        shiftyBPart,
        shiftyBPart,
    ],
    [{flipHarmonically: true}, {flipHarmonically: true}, {flipHarmonically: true}],
)

export {
    shiftySegment,
}
