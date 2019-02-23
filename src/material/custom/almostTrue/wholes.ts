import { PitchDuration } from '@musical-patterns/pattern'
import { ContourWhole, DictionaryOf, repeatCall, sequence, to } from '@musical-patterns/utilities'
import { BarTarget, BlockStyle } from '../../../types'
import { RenderingName } from '../../renderings'
import { buildOtherContourPieces } from '../other'
import { getTrueContours } from '../true'

const almostTrueExtendedEndingZdaubContourWhole: (renderingName: RenderingName) => ContourWhole<PitchDuration> =
    (renderingName: RenderingName): ContourWhole<PitchDuration> =>
        to.ContourWhole(sequence([
            repeatCall(() => getTrueContours(BlockStyle.NODLE, BarTarget.FIFTEEN, renderingName), to.Cardinal(3)),
            getTrueContours(BlockStyle.LIMIN, BarTarget.FIFTEEN, renderingName),
            getTrueContours(BlockStyle.SCEND, BarTarget.FIFTEEN, renderingName),
            getTrueContours(BlockStyle.LIMIN, BarTarget.TWENTYFOUR, renderingName),
            repeatCall(
                () => getTrueContours(BlockStyle.NODLE, BarTarget.TWENTYFOUR, renderingName), to.Cardinal(5),
            ),
        ]))

const buildAlmostTrueContourWholes: () => DictionaryOf<ContourWhole<PitchDuration>> =
    (): DictionaryOf<ContourWhole<PitchDuration>> => {
        const {
            backboneFifteenContourPiece,
            backboneTwentyfourContourPiece,
        } = buildOtherContourPieces()

        const almostTrueExtendedEndingZdaubTremContourWhole: ContourWhole<PitchDuration> =
            almostTrueExtendedEndingZdaubContourWhole(RenderingName.TREM)
        const almostTrueExtendedEndingZdaubBonyContourWhole: ContourWhole<PitchDuration> =
            almostTrueExtendedEndingZdaubContourWhole(RenderingName.BONY)
        const almostTrueExtendedEndingZdaubGlisContourWhole: ContourWhole<PitchDuration> =
            almostTrueExtendedEndingZdaubContourWhole(RenderingName.GLIS)

        const almostTrueYetOfBackboneContourWhole: ContourWhole<PitchDuration> =
            to.ContourWhole(sequence([
                repeatCall(() => backboneFifteenContourPiece, to.Cardinal(8)),
                repeatCall(() => backboneTwentyfourContourPiece, to.Cardinal(3)),
            ]))

        const almostTrueZdaubBonyWithSuperinscapeContourWhole: ContourWhole<PitchDuration> =
            to.ContourWhole(sequence([
                repeatCall(
                    () => getTrueContours(BlockStyle.NODLE, BarTarget.FIFTEEN, RenderingName.BONY), to.Cardinal(3),
                ),
                getTrueContours(BlockStyle.LIMIN, BarTarget.FIFTEEN, RenderingName.BONY),
                getTrueContours(BlockStyle.SCEND, BarTarget.FIFTEEN, RenderingName.BONY),
                getTrueContours(BlockStyle.SCEND, BarTarget.TWENTYFOUR, RenderingName.BONY),
                getTrueContours(BlockStyle.LIMIN, BarTarget.TWENTYFOUR, RenderingName.BONY),
                getTrueContours(BlockStyle.NODLE, BarTarget.TWENTYFOUR, RenderingName.BONY),
            ]))

        const almostTrueYaosUmowchuwowiestAndInaidjiyaiouzdFallAndPitchAdjustmentContourWhole:
            ContourWhole<PitchDuration> =
            to.ContourWhole(sequence([
                getTrueContours(BlockStyle.CHUWOW, BarTarget.FIFTEEN, RenderingName.FALL),
                getTrueContours(BlockStyle.CHUWOW, BarTarget.FIFTEEN, RenderingName.FALL),
                getTrueContours(BlockStyle.DJIYAI, BarTarget.FIFTEEN, RenderingName.FALL),
                getTrueContours(BlockStyle.OUZD, BarTarget.FIFTEEN, RenderingName.FALL),
                getTrueContours(BlockStyle.INAI, BarTarget.FIFTEEN, RenderingName.FALL),
                getTrueContours(BlockStyle.OUZD, BarTarget.FIFTEEN, RenderingName.FALL),
                getTrueContours(BlockStyle.INAI, BarTarget.FIFTEEN, RenderingName.FALL),
                getTrueContours(BlockStyle.CHUWOW, BarTarget.TWENTYFOUR, RenderingName.FALL),
                getTrueContours(BlockStyle.DJIYAI, BarTarget.TWENTYFOUR, RenderingName.FALL),
            ]))

        return {
            almostTrueExtendedEndingZdaubBonyContourWhole,
            almostTrueExtendedEndingZdaubGlisContourWhole,
            almostTrueExtendedEndingZdaubTremContourWhole,
            almostTrueYaosUmowchuwowiestAndInaidjiyaiouzdFallAndPitchAdjustmentContourWhole,
            almostTrueYetOfBackboneContourWhole,
            almostTrueZdaubBonyWithSuperinscapeContourWhole,
        }
    }

export {
    buildAlmostTrueContourWholes,
}
