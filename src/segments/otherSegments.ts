import alterSegmentParts from '../alterations/alterSegmentParts'
import {
    experimentWithIestttPart,
    experimentWithUmowwwPart,
    polyrhythmicYaosFifteenPart,
    polyrhythmicYaosTwentyfourPart,
    thirtyfiveYaosAccidentInspiredPart,
    thirtyfiveYaosBassPart,
    thirtyfiveZdaubPart,
} from '../parts/otherParts'
import {
    untrueYaosUmowchuwowiestAndInaidjiyaiouzdFallAndPitchAdjustmentPart,
} from '../parts/trueYaosParts'
import { Segment } from '../types'

const thirtyfiveSegment: Segment = alterSegmentParts(
    [
        thirtyfiveZdaubPart,
        thirtyfiveYaosAccidentInspiredPart,
        thirtyfiveYaosBassPart,
    ],
    [{gainAdjust: 0.66}, {}, {gainAdjust: 2, flipHarmonically: true}],
)

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

export {
    thirtyfiveSegment,
    experimentWithIestttAndUmowwwSegment,
    untrueFallAllYaosAndBothBlockStrategiesBonyJigIntroHappyGoLuckyRandomFeelingSegment,
    polyrhythmicAllYaosSegment,
}
