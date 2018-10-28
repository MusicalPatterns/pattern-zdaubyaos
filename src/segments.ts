import { applyOffset, DictionaryOf, from, INCLUSIVE, INITIAL, Scalar } from '../../../src'
import { ZDAUBYAOS_SEGMENT_COUNT } from './constants'
import {
    buildAlmostTrueSegments,
    buildBreatherSegments,
    buildOtherSegments,
    buildThirtyfiveSegments,
    buildTrueSegments,
} from './levels'
import { Segment, Segments } from './types'

const buildSegments: (songDurationScalar: Scalar) => Segments =
    (songDurationScalar: Scalar): Segments => {
        const {
            almostTrueBonyJigAndNowItGetsKindaHighAndMagicSparklySegment,
            almostTrueExtendedEndingAllZdaubTriumphantAllNoteTypesFlippedHarmonicallySegment,
            almostTrueFallAllYaosBothBlockStrategiesBonyJigIntroHappyGoLuckyRandomFeelingSegment,
        }: DictionaryOf<Segment> = buildAlmostTrueSegments(songDurationScalar)

        const {
            breatherSpringAltNiceAsABreatherToABreatherSegment,
            breatherSpringSegment,
            breatherSummerSegment,
            breatherVarietyQuiteTheReveilleSegment,
            doubleBreatherFallWhichIsGoodIntroForJigSegment,
        }: DictionaryOf<Segment> = buildBreatherSegments(songDurationScalar)

        const {
            secretLongChordSegment,
            shiftySegment,
            totallyOutThereIntroSegment,
        }: DictionaryOf<Segment> = buildOtherSegments(songDurationScalar)

        const {
            thirtyfiveSegment,
        }: DictionaryOf<Segment> = buildThirtyfiveSegments(songDurationScalar)

        const {
            trueAllYaosAllRhythmsAtOnceSegment,
            trueSpringAllYaosUmowchuwowiestSegment,
            trueSpringWithZdaubSegment,
            trueSpringySummerTotallyOutThereSegment,
            trueSummerAllYaosUmowchuwowiestWithSomeHarmonicallyFlippedSegment,
            trueSummerWithZdaubAndSeparationVariantGetsPleasantlyGnarlyHarmonicallySegment,
        }: DictionaryOf<Segment> = buildTrueSegments(songDurationScalar)

        return [
            // 0
            breatherSpringSegment,
            trueSpringAllYaosUmowchuwowiestSegment,
            trueSpringWithZdaubSegment,

            // 3
            breatherSummerSegment,
            trueSummerAllYaosUmowchuwowiestWithSomeHarmonicallyFlippedSegment,
            trueSummerWithZdaubAndSeparationVariantGetsPleasantlyGnarlyHarmonicallySegment,
            secretLongChordSegment,
            shiftySegment,

            // 8
            doubleBreatherFallWhichIsGoodIntroForJigSegment,
            almostTrueFallAllYaosBothBlockStrategiesBonyJigIntroHappyGoLuckyRandomFeelingSegment,
            almostTrueBonyJigAndNowItGetsKindaHighAndMagicSparklySegment,
            totallyOutThereIntroSegment,
            trueSpringySummerTotallyOutThereSegment,

            // 13
            breatherSpringAltNiceAsABreatherToABreatherSegment,
            breatherVarietyQuiteTheReveilleSegment,
            trueAllYaosAllRhythmsAtOnceSegment,
            almostTrueExtendedEndingAllZdaubTriumphantAllNoteTypesFlippedHarmonicallySegment,

            // 17
            thirtyfiveSegment,
        ].slice(from.Index(INITIAL), from.Count(applyOffset(ZDAUBYAOS_SEGMENT_COUNT, INCLUSIVE)))
    }

export {
    buildSegments,
}
