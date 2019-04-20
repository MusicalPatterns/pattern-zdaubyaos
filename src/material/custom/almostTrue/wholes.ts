import { PitchDuration } from '@musical-patterns/material'
import { as, ContourWhole, repeatCall, sequence } from '@musical-patterns/utilities'
import { RenderingName } from '../../rendering'
import { BarTarget, BlockStyle } from '../../types'
import { computeOtherContourPieces, OtherContourPieces } from '../other'
import { getTrueContours } from '../true'
import { AlmostTrueContourWholes } from './types'

const almostTrueExtendedEndingZdaubContourWhole: (renderingName: RenderingName) => ContourWhole<PitchDuration> =
    (renderingName: RenderingName): ContourWhole<PitchDuration> =>
        as.ContourWhole(sequence(
            repeatCall(() => getTrueContours(BlockStyle.NODLE, BarTarget.FIFTEEN, renderingName), as.Cardinal(3)),
            getTrueContours(BlockStyle.LIMIN, BarTarget.FIFTEEN, renderingName),
            getTrueContours(BlockStyle.SCEND, BarTarget.FIFTEEN, renderingName),
            getTrueContours(BlockStyle.LIMIN, BarTarget.TWENTYFOUR, renderingName),
            repeatCall(
                () => getTrueContours(BlockStyle.NODLE, BarTarget.TWENTYFOUR, renderingName), as.Cardinal(5),
            ),
        ))

const computeAlmostTrueContourWholes: () => AlmostTrueContourWholes =
    (): AlmostTrueContourWholes => {
        const otherContourPieces: OtherContourPieces = computeOtherContourPieces()

        const extendedEndingZdaubTrem: ContourWhole<PitchDuration> =
            almostTrueExtendedEndingZdaubContourWhole(RenderingName.TREM)
        const extendedEndingZdaubBony: ContourWhole<PitchDuration> =
            almostTrueExtendedEndingZdaubContourWhole(RenderingName.BONY)
        const extendedEndingZdaubGlis: ContourWhole<PitchDuration> =
            almostTrueExtendedEndingZdaubContourWhole(RenderingName.GLIS)

        const yetOfBackbone: ContourWhole<PitchDuration> = as.ContourWhole(sequence(
            repeatCall(() => otherContourPieces.backboneFifteen, as.Cardinal(8)),
            repeatCall(() => otherContourPieces.backboneTwentyfour, as.Cardinal(3)),
        ))

        const zdaubBonyWithSuperinscape: ContourWhole<PitchDuration> = as.ContourWhole(sequence(
            repeatCall(
                () => getTrueContours(BlockStyle.NODLE, BarTarget.FIFTEEN, RenderingName.BONY), as.Cardinal(3),
            ),
            getTrueContours(BlockStyle.LIMIN, BarTarget.FIFTEEN, RenderingName.BONY),
            getTrueContours(BlockStyle.SCEND, BarTarget.FIFTEEN, RenderingName.BONY),
            getTrueContours(BlockStyle.SCEND, BarTarget.TWENTYFOUR, RenderingName.BONY),
            getTrueContours(BlockStyle.LIMIN, BarTarget.TWENTYFOUR, RenderingName.BONY),
            getTrueContours(BlockStyle.NODLE, BarTarget.TWENTYFOUR, RenderingName.BONY),
        ))

        const yaosUmowchuwowiestAndInaidjiyaiouzdFallAndPitchAdjustment: ContourWhole<PitchDuration> =
            as.ContourWhole(sequence(
                getTrueContours(BlockStyle.CHUWOW, BarTarget.FIFTEEN, RenderingName.FALL),
                getTrueContours(BlockStyle.CHUWOW, BarTarget.FIFTEEN, RenderingName.FALL),
                getTrueContours(BlockStyle.DJIYAI, BarTarget.FIFTEEN, RenderingName.FALL),
                getTrueContours(BlockStyle.OUZD, BarTarget.FIFTEEN, RenderingName.FALL),
                getTrueContours(BlockStyle.INAI, BarTarget.FIFTEEN, RenderingName.FALL),
                getTrueContours(BlockStyle.OUZD, BarTarget.FIFTEEN, RenderingName.FALL),
                getTrueContours(BlockStyle.INAI, BarTarget.FIFTEEN, RenderingName.FALL),
                getTrueContours(BlockStyle.CHUWOW, BarTarget.TWENTYFOUR, RenderingName.FALL),
                getTrueContours(BlockStyle.DJIYAI, BarTarget.TWENTYFOUR, RenderingName.FALL),
            ))

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
