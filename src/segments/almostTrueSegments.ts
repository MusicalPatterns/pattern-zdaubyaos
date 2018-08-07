import { Segment } from '../types'
import alterSegmentParts from '../alterations/alterSegmentParts'
import {
    almostTrueExtendedEndingZdaubBonyPart,
    almostTrueExtendedEndingZdaubGlisPart,
    almostTrueExtendedEndingZdaubTremPart,
    almostTrueYaosUmowchuwowiestAndInaidjiyaiouzdFallAndPitchAdjustmentPart,
} from '../parts/almostTrueParts'

const almostTrueFallAllYaosAndBothBlockStrategiesBonyJigIntroHappyGoLuckyRandomFeelingSegment: Segment = alterSegmentParts(
    [
        almostTrueYaosUmowchuwowiestAndInaidjiyaiouzdFallAndPitchAdjustmentPart,
        almostTrueYaosUmowchuwowiestAndInaidjiyaiouzdFallAndPitchAdjustmentPart,
        almostTrueYaosUmowchuwowiestAndInaidjiyaiouzdFallAndPitchAdjustmentPart,
    ],
    [{flipHarmonically: true}, {flipHarmonically: true}, {flipHarmonically: true}],
)

const almostTrueExtendedEndingAllZdaubTriumphantAllThreeNoteTypesFlippedHarmonicallySegment: Segment = alterSegmentParts(
    [
        almostTrueExtendedEndingZdaubTremPart,
        almostTrueExtendedEndingZdaubBonyPart,
        almostTrueExtendedEndingZdaubGlisPart,
    ],
    [{flipHarmonically: true}, {flipHarmonically: true}, {flipHarmonically: true}],
)

export {
    almostTrueFallAllYaosAndBothBlockStrategiesBonyJigIntroHappyGoLuckyRandomFeelingSegment,
    almostTrueExtendedEndingAllZdaubTriumphantAllThreeNoteTypesFlippedHarmonicallySegment,
}
