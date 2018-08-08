import * as to from '../../../../src/utilities/to'
import alterSegmentParts from '../alterations/alterSegmentParts'
import { backboneAPart, backboneBPart, backboneCPart } from '../parts/backboneParts'
import { Segment } from '../types'

const backboneSegment: Segment = alterSegmentParts(
    [
        backboneCPart,
        backboneAPart,
        backboneBPart,
    ],
    [
        {pitchIndexOffset: to.Offset(2), flipHarmonically: true},
        {pitchIndexOffset: to.Offset(2), flipHarmonically: true},
        {pitchIndexOffset: to.Offset(2), flipHarmonically: true},
    ],
)

export {
    backboneSegment,
}
