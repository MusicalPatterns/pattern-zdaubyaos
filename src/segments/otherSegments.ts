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
} from '../parts/otherParts'
import { Segment } from '../types'

const experimentWithIestttAndUmowwwSegment: Segment = alterSegmentParts(
    [
        experimentWithIestttPart,
        experimentWithUmowwwPart,
        experimentWithUmowwwPart,
    ],
    [{flipHarmonically: true, pitchIndexOffset: 2}, {}, {flipHarmonically: true}],
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
        {flipHarmonically: false, pitchIndexOffset: 3},
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
        {pitchIndexOffset: -54, flipHarmonically: true, gainAdjust: 0.33},
        {pitchIndexOffset: -61, flipHarmonically: true, gainAdjust: 0.33},
        {pitchIndexOffset: -56, flipHarmonically: true, gainAdjust: 0.33},
    ],
)

export {
    experimentWithIestttAndUmowwwSegment,
    polyrhythmicAllYaosSegment,
    polyrhythmicAscent,
    secretLongChordSegment,
}
