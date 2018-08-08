import * as to from '../../../../src/utilities/to'
import alterSegmentParts from '../alterations/alterSegmentParts'
import {
    experimentWithIestttPart,
    experimentWithUmowwwPart,
    polyrhythmicAscentAPart,
    polyrhythmicAscentBPart,
    polyrhythmicAscentCPart,
    polyrhythmicYaosFifteenPart,
    polyrhythmicYaosTwentyfourPart,
    secretLongChordPart,
    totallyOutTherePart,
} from '../parts/otherParts'
import { Segment } from '../types'

const experimentWithIestttAndUmowwwSegment: Segment = alterSegmentParts(
    [
        experimentWithIestttPart,
        experimentWithUmowwwPart,
        experimentWithUmowwwPart,
    ],
    [
        {flipHarmonically: true},
        {gainScalar: to.Scalar(0.5)},
        {flipHarmonically: true},
    ],
)

const polyrhythmicAllYaosSegment: Segment = alterSegmentParts(
    [
        polyrhythmicYaosFifteenPart,
        polyrhythmicYaosTwentyfourPart,
        polyrhythmicYaosTwentyfourPart,
    ],
    [
        {flipHarmonically: true, pitchIndexOffset: to.Offset(3)},
        {pitchIndexOffset: to.Offset(3)},
        {flipHarmonically: true, pitchIndexOffset: to.Offset(3)},
    ],
)

const polyrhythmicAscent: Segment = alterSegmentParts(
    [
        polyrhythmicAscentAPart,
        polyrhythmicAscentBPart,
        polyrhythmicAscentCPart,
    ],
    [{flipHarmonically: true}, {flipHarmonically: true}, {flipHarmonically: true}],
)

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

export {
    experimentWithIestttAndUmowwwSegment,
    polyrhythmicAllYaosSegment,
    polyrhythmicAscent,
    secretLongChordSegment,
    totallyOutThereIntroSegment,
}
