import { Segment } from '@musical-patterns/pattern'
import { apply, from, INCLUSIVE, INITIAL, slice, to } from '@musical-patterns/utilities'
import { ZDAUBYAOS_SEGMENT_COUNT } from '../../constants'
import {
    AlmostTrueSegments,
    BreatherSegments,
    buildAlmostTrueSegments,
    buildBreatherSegments,
    buildOtherSegments,
    buildThirtyfiveSegments,
    buildTrueSegments,
    OtherSegments,
    ThirtyfiveSegments,
    TrueSegments,
} from '../custom'

const buildSegments: () => Segment[] =
    (): Segment[] => {
        const almostTrueSegments: AlmostTrueSegments = buildAlmostTrueSegments()
        const breatherSegments: BreatherSegments = buildBreatherSegments()
        const otherSegments: OtherSegments = buildOtherSegments()
        const thirtyfiveSegments: ThirtyfiveSegments = buildThirtyfiveSegments()
        const trueSegments: TrueSegments = buildTrueSegments()

        return slice(
            [
                // 0
                breatherSegments.spring,
                trueSegments.springAllYaosUmowchuwowiest,
                trueSegments.springWithZdaub,

                // 3
                breatherSegments.summer,
                trueSegments.summerAllYaosUmowchuwowiestWithSomeHarmonicallyFlipped,
                trueSegments.summerWithZdaubAndSeparationVariantGetsPleasantlyGnarlyHarmonically,
                otherSegments.secretLongChord,
                otherSegments.shifty,

                // 8
                breatherSegments.doubleFallWhichIsGoodIntroForJig,
                almostTrueSegments.fallAllYaosBothBlockStrategiesBonyJigIntroHappyGoLuckyRandomFeeling,
                almostTrueSegments.bonyJigAndNowItGetsKindaHighAndMagicSparkly,
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
            to.Ordinal(from.Cardinal(apply.Translation(ZDAUBYAOS_SEGMENT_COUNT, INCLUSIVE))),
        )
    }

export {
    buildSegments,
}
