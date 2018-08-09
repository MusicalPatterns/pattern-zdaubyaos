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
        {pitchIndexOffset: to.Offset(4), flipHarmonically: true, gainScalar: to.Scalar(0.8)},
        {pitchIndexOffset: to.Offset(6), flipHarmonically: true, gainScalar: to.Scalar(0.8)},
        {pitchIndexOffset: to.Offset(3), flipHarmonically: true, gainScalar: to.Scalar(0.8)},
    ],
)

const totallyOutThereIntroSegment: Segment = alterSegmentParts(
    [
        totallyOutTherePart,
        totallyOutTherePart,
        totallyOutTherePart,
    ],
    [
        {pitchIndexOffset: to.Offset(2)},
        {pitchIndexOffset: to.Offset(-2)},
        {pitchIndexOffset: to.Offset(-3)},
    ],
)

const shiftySegment: Segment = alterSegmentParts(
    [
        shiftyAPart,
        shiftyBPart,
        shiftyBPart,
    ],
    [
        {flipHarmonically: true},
        {flipHarmonically: true},
        {flipHarmonically: true},
    ],
)

export {
    secretLongChordSegment,
    totallyOutThereIntroSegment,
    shiftySegment,
}
