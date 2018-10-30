import { DictionaryOf, repeatCall, sequence, to } from '../../../../../../src'
import { to as zdaubyaosTo } from '../../../nominal'
import { BarTarget, BlockStyle, ContourWhole } from '../../../types'
import { RenderingName } from '../../renderings'
import { buildOtherContourPieces } from '../other'
import { getTrueContours } from '../true'

const almostTrueExtendedEndingZdaubContourWhole: (renderingName: RenderingName) => ContourWhole =
    (renderingName: RenderingName): ContourWhole =>
        zdaubyaosTo.ContourWhole(sequence([
            repeatCall(() => getTrueContours(BlockStyle.NODLE, BarTarget.FIFTEEN, renderingName), to.Count(3)),
            getTrueContours(BlockStyle.LIMIN, BarTarget.FIFTEEN, renderingName),
            getTrueContours(BlockStyle.SCEND, BarTarget.FIFTEEN, renderingName),
            getTrueContours(BlockStyle.LIMIN, BarTarget.TWENTYFOUR, renderingName),
            repeatCall(
                () => getTrueContours(BlockStyle.NODLE, BarTarget.TWENTYFOUR, renderingName), to.Count(5),
            ),
        ]))

const buildAlmostTrueContourWholes: () => DictionaryOf<ContourWhole> =
    (): DictionaryOf<ContourWhole> => {
        const {
            backboneFifteenContourPiece,
            backboneTwentyfourContourPiece,
        } = buildOtherContourPieces()

        const almostTrueExtendedEndingZdaubTremContourWhole: ContourWhole =
            almostTrueExtendedEndingZdaubContourWhole(RenderingName.TREM)
        const almostTrueExtendedEndingZdaubBonyContourWhole: ContourWhole =
            almostTrueExtendedEndingZdaubContourWhole(RenderingName.BONY)
        const almostTrueExtendedEndingZdaubGlisContourWhole: ContourWhole =
            almostTrueExtendedEndingZdaubContourWhole(RenderingName.GLIS)

        const almostTrueYetOfBackboneContourWhole: ContourWhole =
            zdaubyaosTo.ContourWhole(sequence([
                repeatCall(() => backboneFifteenContourPiece, to.Count(8)),
                repeatCall(() => backboneTwentyfourContourPiece, to.Count(3)),
            ]))

        const almostTrueZdaubBonyWithSuperinscapeContourWhole: ContourWhole =
            zdaubyaosTo.ContourWhole(sequence([
                repeatCall(
                    () => getTrueContours(BlockStyle.NODLE, BarTarget.FIFTEEN, RenderingName.BONY), to.Count(3),
                ),
                getTrueContours(BlockStyle.LIMIN, BarTarget.FIFTEEN, RenderingName.BONY),
                getTrueContours(BlockStyle.SCEND, BarTarget.FIFTEEN, RenderingName.BONY),
                getTrueContours(BlockStyle.SCEND, BarTarget.TWENTYFOUR, RenderingName.BONY),
                getTrueContours(BlockStyle.LIMIN, BarTarget.TWENTYFOUR, RenderingName.BONY),
                getTrueContours(BlockStyle.NODLE, BarTarget.TWENTYFOUR, RenderingName.BONY),
            ]))

        const almostTrueYaosUmowchuwowiestAndInaidjiyaiouzdFallAndPitchAdjustmentContourWhole: ContourWhole =
            zdaubyaosTo.ContourWhole(sequence([
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
