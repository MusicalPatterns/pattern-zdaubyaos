import { PitchDuration } from '@musical-patterns/pattern'
import { ContourWhole, repeatCall, sequence, to } from '@musical-patterns/utilities'
import { RenderingName } from '../../renderings'
import { BarTarget, BlockStyle } from '../../types'
import { computeOtherContourPieces, OtherContourPieces } from '../other'
import { getTrueContours } from '../true'
import { AlmostTrueContourWholes } from './types'

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

const computeAlmostTrueContourWholes: () => AlmostTrueContourWholes =
    (): AlmostTrueContourWholes => {
        const otherContourPieces: OtherContourPieces = computeOtherContourPieces()

        const extendedEndingZdaubTrem: ContourWhole<PitchDuration> =
            almostTrueExtendedEndingZdaubContourWhole(RenderingName.TREM)
        const extendedEndingZdaubBony: ContourWhole<PitchDuration> =
            almostTrueExtendedEndingZdaubContourWhole(RenderingName.BONY)
        const extendedEndingZdaubGlis: ContourWhole<PitchDuration> =
            almostTrueExtendedEndingZdaubContourWhole(RenderingName.GLIS)

        const yetOfBackbone: ContourWhole<PitchDuration> = to.ContourWhole(sequence([
            repeatCall(() => otherContourPieces.backboneFifteen, to.Cardinal(8)),
            repeatCall(() => otherContourPieces.backboneTwentyfour, to.Cardinal(3)),
        ]))

        const zdaubBonyWithSuperinscape: ContourWhole<PitchDuration> = to.ContourWhole(sequence([
            repeatCall(
                () => getTrueContours(BlockStyle.NODLE, BarTarget.FIFTEEN, RenderingName.BONY), to.Cardinal(3),
            ),
            getTrueContours(BlockStyle.LIMIN, BarTarget.FIFTEEN, RenderingName.BONY),
            getTrueContours(BlockStyle.SCEND, BarTarget.FIFTEEN, RenderingName.BONY),
            getTrueContours(BlockStyle.SCEND, BarTarget.TWENTYFOUR, RenderingName.BONY),
            getTrueContours(BlockStyle.LIMIN, BarTarget.TWENTYFOUR, RenderingName.BONY),
            getTrueContours(BlockStyle.NODLE, BarTarget.TWENTYFOUR, RenderingName.BONY),
        ]))

        const yaosUmowchuwowiestAndInaidjiyaiouzdFallAndPitchAdjustment: ContourWhole<PitchDuration> =
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
            extendedEndingZdaubBony,
            extendedEndingZdaubGlis,
            extendedEndingZdaubTrem,
            yaosUmowchuwowiestAndInaidjiyaiouzdFallAndPitchAdjustment,
            yetOfBackbone,
            zdaubBonyWithSuperinscape,
        }
    }

export {
    computeAlmostTrueContourWholes,
}
