import alterSegmentParts from '../alterations/alterSegmentParts'
import { backboneAPart, backboneBPart, backboneCPart } from '../parts/backboneParts'
import { Segment } from '../types'

const backboneSegment: Segment = alterSegmentParts(
    [
        backboneCPart,
        backboneAPart,
        backboneBPart,
    ],
    [{pitchIndexOffset: 1}, {pitchIndexOffset: 1}, {pitchIndexOffset: 1}],
)

export {
    backboneSegment,
}
