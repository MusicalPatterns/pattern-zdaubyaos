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
    untrueExtendedEndingZdaubBonyPart,
    untrueExtendedEndingZdaubGlisPart,
    untrueExtendedEndingZdaubTremPart,
} from '../parts/otherParts'
import {
    untrueYaosUmowchuwowiestAndInaidjiyaiouzdFallAndPitchAdjustmentPart,
} from '../parts/trueYaosParts'
import { Segment } from '../types'

const experimentWithIestttAndUmowwwSegment: Segment = alterSegmentParts(
    [
        experimentWithIestttPart,
        experimentWithUmowwwPart,
        experimentWithUmowwwPart,
    ],
    [{flipHarmonically: true, pitchIndexOffset: 2}, {}, {flipHarmonically: true}],
)

const untrueFallAllYaosAndBothBlockStrategiesBonyJigIntroHappyGoLuckyRandomFeelingSegment: Segment = alterSegmentParts(
    [
        untrueYaosUmowchuwowiestAndInaidjiyaiouzdFallAndPitchAdjustmentPart,
        untrueYaosUmowchuwowiestAndInaidjiyaiouzdFallAndPitchAdjustmentPart,
        untrueYaosUmowchuwowiestAndInaidjiyaiouzdFallAndPitchAdjustmentPart,
    ],
    [{flipHarmonically: true}, {flipHarmonically: true}, {flipHarmonically: true}],
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

const untrueExtendedEndingAllZdaubTriumphantAllThreeNoteTypesFlippedHarmonicallySegment: Segment = alterSegmentParts(
    [
        untrueExtendedEndingZdaubTremPart,
        untrueExtendedEndingZdaubBonyPart,
        untrueExtendedEndingZdaubGlisPart,
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
    untrueFallAllYaosAndBothBlockStrategiesBonyJigIntroHappyGoLuckyRandomFeelingSegment,
    polyrhythmicAllYaosSegment,
    polyrhythmicAscent,
    untrueExtendedEndingAllZdaubTriumphantAllThreeNoteTypesFlippedHarmonicallySegment,
    secretLongChordSegment,
}
