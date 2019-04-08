import { Segment } from '@musical-patterns/material'
import { from, INITIAL, slice, to } from '@musical-patterns/utilities'
import { ZDAUBYAOS_SEGMENT_COUNT } from '../../constants'
import {
    AlmostTrueSegments,
    BreatherSegments,
    computeAlmostTrueSegments,
    computeBreatherSegments,
    computeOtherSegments,
    computeThirtyfiveSegments,
    computeTrueSegments,
    OtherSegments,
    ThirtyfiveSegments,
    TrueSegments,
} from '../custom'

const computeSegments: () => Segment[] =
    (): Segment[] => {
        const almostTrueSegments: AlmostTrueSegments = computeAlmostTrueSegments()
        const breatherSegments: BreatherSegments = computeBreatherSegments()
        const otherSegments: OtherSegments = computeOtherSegments()
        const thirtyfiveSegments: ThirtyfiveSegments = computeThirtyfiveSegments()
        const trueSegments: TrueSegments = computeTrueSegments()

        return slice(
            [
                // 0
                breatherSegments.spring,
                trueSegments.springAllYaosUmowchuwowiest,
                trueSegments.springWithZdaub,

                // 3
                breatherSegments.summer,
                trueSegments.summerAllYaosUmowchuwowiestWithSomeHarmonicallyFlipped,
                trueSegments.summerWithZdaubAndSeparationVariantBecomesPleasantlyGnarlyHarmonically,
                otherSegments.secretLongChord,
                otherSegments.shifty,

                // 8
                breatherSegments.doubleFallWhichIsGoodIntroForJig,
                almostTrueSegments.fallAllYaosBothBlockStrategiesBonyJigIntroHappyGoLuckyRandomFeeling,
                almostTrueSegments.bonyJigAndNowItBecomesKindaHighAndMagicSparkly,
                otherSegments.totallyOutThereIntro,
                trueSegments.springySummerTotallyOutThere,

                // 13
                breatherSegments.springAltNiceAsABreatherToABreather,
                breatherSegments.varietyQuiteTheReveille,
                trueSegments.allYaosAllRhythmsAtOnce,
                almostTrueSegments.extendedEndingAllZdaubTriumphantAllNoteTypesFlippedHarmonically,

                // 17
                thirtyfiveSegments.thirtyfiveSegment,
            ],
            INITIAL,
            to.Ordinal(from.Cardinal(ZDAUBYAOS_SEGMENT_COUNT)),
        )
    }

export {
    computeSegments,
}
