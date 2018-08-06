import flipEntities from '../flipEntities'
import { shiftyAPart, shiftyBPart } from '../parts/shiftyParts'
import { Segment } from '../types'

const shiftySegment: Segment = flipEntities(
    [
        shiftyAPart,
        shiftyBPart,
        shiftyBPart,
    ],
    [true, true, true],
)

export {
    shiftySegment,
}
