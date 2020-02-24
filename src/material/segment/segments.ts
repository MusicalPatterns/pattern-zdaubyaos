import { Segment } from '@musical-patterns/material'
import { as, INITIAL, Ordinal, slice, Thunk } from '@musical-patterns/utilities'
import { ZDAUBYAOS_SEGMENT_COUNT } from '../../constants'
import {
    AlmostTrueSegments,
    BreatherSegments,
    OtherSegments,
    ThirtyfiveSegments,
    thunkAlmostTrueSegments,
    thunkBreatherSegments,
    thunkOtherSegments,
    thunkThirtyfiveSegments,
    thunkTrueSegments,
    TrueSegments,
} from '../custom'

const thunkSegments: Thunk<Segment[]> =
    (): Segment[] => {
        const almostTrueSegments: AlmostTrueSegments = thunkAlmostTrueSegments()
        const breatherSegments: BreatherSegments = thunkBreatherSegments()
        const otherSegments: OtherSegments = thunkOtherSegments()
        const thirtyfiveSegments: ThirtyfiveSegments = thunkThirtyfiveSegments()
        const trueSegments: TrueSegments = thunkTrueSegments()

        return slice(
            [
                // 0
                breatherSegments.spring,
                trueSegments.springAllYaosUmowchuwowiest,
                trueSegments.springWithZdaub,

                // 3
                breatherSegments.summer,
                trueSegments.summerAllYaosUmowchuwowiestWithOneHarmonicallyFlipped,
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
            INITIAL as Ordinal<Segment[]>,
            as.Ordinal<Segment[]>(as.number(ZDAUBYAOS_SEGMENT_COUNT)),
        )
    }

export {
    thunkSegments,
}
