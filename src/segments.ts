import applyOffset from '../../../src/utilities/applyOffset'
import * as from from '../../../src/utilities/from'
import { Index, Offset, Scalar } from '../../../src/utilities/nominalTypes'
import { SegmentsObject } from './notes/types'
import { buildAlmostZdaubyaosSegments } from './segments/almostZdaubyaosSegments'
import { buildBreatherSegments } from './segments/breatherSegments'
import { buildOtherSegments } from './segments/otherSegments'
import { buildThirtyfiveSegments } from './segments/thirtyfiveSegments'
import { buildZdaubyaosSegments } from './segments/zdaubyaosSegments'
import { Segments } from './types'

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
        }: SegmentsObject = buildAlmostZdaubyaosSegments(songDurationScalar)

        const {
            breatherSpringAltNiceAsABreatherToABreatherSegment,
            breatherSpringSegment,
            breatherSummerSegment,
            breatherVarietyQuiteTheReveilleSegment,
            doubleBreatherFallWhichIsGoodIntroForJigSegment,
        }: SegmentsObject = buildBreatherSegments(songDurationScalar)

        const {
            secretLongChordSegment,
            shiftySegment,
            totallyOutThereIntroSegment,
        }: SegmentsObject = buildOtherSegments(songDurationScalar)

        const {
            thirtyfiveSegment,
        }: SegmentsObject = buildThirtyfiveSegments(songDurationScalar)

        const {
            trueAllYaosAllRhythmsAtOnceSegment,
            trueSpringAllYaosUmowchuwowiestSegment,
            trueSpringWithZdaubSegment,
            trueSpringySummerTotallyOutThereSegment,
            trueSummerAllYaosUmowchuwowiestWithSomeHarmonicallyFlippedSegment,
            trueSummerWithZdaubAndSeparationVariantGetsPleasantlyGnarlyHarmonicallySegment,
        }: SegmentsObject = buildZdaubyaosSegments(songDurationScalar)

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
