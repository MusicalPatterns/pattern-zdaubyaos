import { applyOffset, DictionaryOf, from, Index, Offset, Scalar } from '../../../src'
import {
    buildAlmostZdaubyaosSegments,
    buildBreatherSegments,
    buildOtherSegments,
    buildThirtyfiveSegments,
    buildTrueSegments,
} from './levels'
import { Segment, Segments } from './types'

// tslint:disable-next-line:no-any no-magic-numbers
const START: Index = 0 as any
// tslint:disable-next-line:no-any no-magic-numbers
const END: Index = 17 as any
// tslint:disable-next-line:no-any no-magic-numbers
const INCLUSIVE: Offset = 1 as any

const buildSegments: (songDurationScalar: Scalar) => Segments =
    (songDurationScalar: Scalar): Segments => {
        const {
            almostTrueBonyJigAndNowItGetsKindaHighAndMagicSparklySegment,
            almostTrueExtendedEndingAllZdaubTriumphantAllNoteTypesFlippedHarmonicallySegment,
            almostTrueFallAllYaosBothBlockStrategiesBonyJigIntroHappyGoLuckyRandomFeelingSegment,
        }: DictionaryOf<Segment> = buildAlmostZdaubyaosSegments(songDurationScalar)

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
        ].slice(from.Index(START), from.Index(applyOffset(END, INCLUSIVE)))
    }

export {
    buildSegments,
}
