import { ContourWhole, DictionaryOf, repeatCall, sequence, to } from '@musical-patterns/utilities'
import { RenderingName } from '../../materials'
import { BarTarget, BlockStyle, ZdaubyaosContour } from '../../types'
import { buildOtherContourPieces } from '../other'
import { getTrueContours } from '../true'

const almostTrueExtendedEndingZdaubContourWhole: (renderingName: RenderingName) => ContourWhole<ZdaubyaosContour> =
    (renderingName: RenderingName): ContourWhole<ZdaubyaosContour> =>
        to.ContourWhole(sequence([
            repeatCall(() => getTrueContours(BlockStyle.NODLE, BarTarget.FIFTEEN, renderingName), to.Count(3)),
            getTrueContours(BlockStyle.LIMIN, BarTarget.FIFTEEN, renderingName),
            getTrueContours(BlockStyle.SCEND, BarTarget.FIFTEEN, renderingName),
            getTrueContours(BlockStyle.LIMIN, BarTarget.TWENTYFOUR, renderingName),
            repeatCall(
                () => getTrueContours(BlockStyle.NODLE, BarTarget.TWENTYFOUR, renderingName), to.Count(5),
            ),
        ]))

const buildAlmostTrueContourWholes: () => DictionaryOf<ContourWhole<ZdaubyaosContour>> =
    (): DictionaryOf<ContourWhole<ZdaubyaosContour>> => {
        const {
            backboneFifteenContourPiece,
            backboneTwentyfourContourPiece,
        } = buildOtherContourPieces()

        const almostTrueExtendedEndingZdaubTremContourWhole: ContourWhole<ZdaubyaosContour> =
            almostTrueExtendedEndingZdaubContourWhole(RenderingName.TREM)
        const almostTrueExtendedEndingZdaubBonyContourWhole: ContourWhole<ZdaubyaosContour> =
            almostTrueExtendedEndingZdaubContourWhole(RenderingName.BONY)
        const almostTrueExtendedEndingZdaubGlisContourWhole: ContourWhole<ZdaubyaosContour> =
            almostTrueExtendedEndingZdaubContourWhole(RenderingName.GLIS)

        const almostTrueYetOfBackboneContourWhole: ContourWhole<ZdaubyaosContour> =
            to.ContourWhole(sequence([
                repeatCall(() => backboneFifteenContourPiece, to.Count(8)),
                repeatCall(() => backboneTwentyfourContourPiece, to.Count(3)),
            ]))

        const almostTrueZdaubBonyWithSuperinscapeContourWhole: ContourWhole<ZdaubyaosContour> =
            to.ContourWhole(sequence([
                repeatCall(
                    () => getTrueContours(BlockStyle.NODLE, BarTarget.FIFTEEN, RenderingName.BONY), to.Count(3),
                ),
                getTrueContours(BlockStyle.LIMIN, BarTarget.FIFTEEN, RenderingName.BONY),
                getTrueContours(BlockStyle.SCEND, BarTarget.FIFTEEN, RenderingName.BONY),
                getTrueContours(BlockStyle.SCEND, BarTarget.TWENTYFOUR, RenderingName.BONY),
                getTrueContours(BlockStyle.LIMIN, BarTarget.TWENTYFOUR, RenderingName.BONY),
                getTrueContours(BlockStyle.NODLE, BarTarget.TWENTYFOUR, RenderingName.BONY),
            ]))

        const almostTrueYaosUmowchuwowiestAndInaidjiyaiouzdFallAndPitchAdjustmentContourWhole:
            ContourWhole<ZdaubyaosContour> =
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
