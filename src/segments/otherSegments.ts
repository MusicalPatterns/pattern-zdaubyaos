import * as to from '../../../../src/utilities/to'
import alterSegmentParts from '../alterations/alterSegmentParts'
import { secretLongChordPart, shiftyAPart, shiftyBPart, totallyOutTherePart } from '../parts/otherParts'
import { Segment } from '../types'

const secretLongChordSegment: Segment = alterSegmentParts(
    [
        secretLongChordPart,
        secretLongChordPart,
        secretLongChordPart,
    ],
    [
        {pitchIndexOffset: to.Offset(4), scaleIndex: to.Index(3), gainScalar: to.Scalar(0.8)},
        {pitchIndexOffset: to.Offset(6), scaleIndex: to.Index(4), gainScalar: to.Scalar(0.8)},
        {pitchIndexOffset: to.Offset(3), scaleIndex: to.Index(5), gainScalar: to.Scalar(0.8)},
    ],
)

const totallyOutThereIntroSegment: Segment = alterSegmentParts(
    [
        totallyOutTherePart,
        totallyOutTherePart,
        totallyOutTherePart,
    ],
    [
        {pitchIndexOffset: to.Offset(2), scaleIndex: to.Index(0)},
        {pitchIndexOffset: to.Offset(-2), scaleIndex: to.Index(1)},
        {pitchIndexOffset: to.Offset(-3), scaleIndex: to.Index(2)},
    ],
)

const shiftySegment: Segment = alterSegmentParts(
    [
        shiftyAPart,
        shiftyBPart,
        shiftyBPart,
    ],
    [
        {scaleIndex: to.Index(3)},
        {scaleIndex: to.Index(4)},
        {scaleIndex: to.Index(5)},
    ],
)

export {
    secretLongChordSegment,
    totallyOutThereIntroSegment,
    shiftySegment,
}
