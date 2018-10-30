import { applyOffset, DictionaryOf, from, INCLUSIVE, INITIAL, Segment } from '../../../../../src'
import { ZDAUBYAOS_SEGMENT_COUNT } from '../../constants'
import {
    buildAlmostTrueSegments,
    buildBreatherSegments,
    buildOtherSegments,
    buildThirtyfiveSegments,
    buildTrueSegments,
} from '../../custom'

const buildZdaubyaosSegments: () => Segment[] =
    (): Segment[] => {
        const {
            almostTrueBonyJigAndNowItGetsKindaHighAndMagicSparklySegment,
            almostTrueExtendedEndingAllZdaubTriumphantAllNoteTypesFlippedHarmonicallySegment,
            almostTrueFallAllYaosBothBlockStrategiesBonyJigIntroHappyGoLuckyRandomFeelingSegment,
        }: DictionaryOf<Segment> = buildAlmostTrueSegments()

        const {
            breatherSpringAltNiceAsABreatherToABreatherSegment,
            breatherSpringSegment,
            breatherSummerSegment,
            breatherVarietyQuiteTheReveilleSegment,
            doubleBreatherFallWhichIsGoodIntroForJigSegment,
        }: DictionaryOf<Segment> = buildBreatherSegments()

        const {
            secretLongChordSegment,
            shiftySegment,
            totallyOutThereIntroSegment,
        }: DictionaryOf<Segment> = buildOtherSegments()

        const {
            thirtyfiveSegment,
        }: DictionaryOf<Segment> = buildThirtyfiveSegments()

        const {
            trueAllYaosAllRhythmsAtOnceSegment,
            trueSpringAllYaosUmowchuwowiestSegment,
            trueSpringWithZdaubSegment,
            trueSpringySummerTotallyOutThereSegment,
            trueSummerAllYaosUmowchuwowiestWithSomeHarmonicallyFlippedSegment,
            trueSummerWithZdaubAndSeparationVariantGetsPleasantlyGnarlyHarmonicallySegment,
        }: DictionaryOf<Segment> = buildTrueSegments()

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
    buildZdaubyaosSegments,
}
