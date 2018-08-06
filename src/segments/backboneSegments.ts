import flipEntities from '../flipEntities'
import { backboneAPart, backboneBPart, backboneCPart } from '../parts/backboneParts'
import { Segment } from '../types'

const backboneSegment: Segment = flipEntities(
    [
        backboneCPart,
        backboneAPart,
        backboneBPart,
    ],
    [false, false, false],
)

export {
    backboneSegment,
}
