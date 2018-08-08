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
        {flipHarmonically: true, pitchIndexOffset: 0, gainAdjust: 1},
        {gainAdjust: 0.5},
        {flipHarmonically: true, gainAdjust: 1},
    ],
)

const polyrhythmicAllYaosSegment: Segment = alterSegmentParts(
    [
        polyrhythmicYaosFifteenPart,
        polyrhythmicYaosTwentyfourPart,
        polyrhythmicYaosTwentyfourPart,
    ],
    [
        {flipHarmonically: true, pitchIndexOffset: 3},
        {flipHarmonically: false, pitchIndexOffset: 3},
        {flipHarmonically: true, pitchIndexOffset: 3},
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
        {pitchIndexOffset: 4, flipHarmonically: true, gainAdjust: 0.8},
        {pitchIndexOffset: 6, flipHarmonically: true, gainAdjust: 0.8},
        {pitchIndexOffset: 3, flipHarmonically: true, gainAdjust: 0.8},
    ],
)

const totallyOutThereIntroSegment: Segment = alterSegmentParts(
    [
        totallyOutTherePart,
        totallyOutTherePart,
        totallyOutTherePart,
    ],
    [
        {pitchIndexOffset: 2},
        {pitchIndexOffset: -2, flipHarmonically: false},
        {pitchIndexOffset: -3},
    ],
)

export {
    experimentWithIestttAndUmowwwSegment,
    polyrhythmicAllYaosSegment,
    polyrhythmicAscent,
    secretLongChordSegment,
    totallyOutThereIntroSegment,
}
