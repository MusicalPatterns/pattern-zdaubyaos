import { PitchValue } from '@musical-patterns/material'
import { as, ContourPiece, ContourWhole, repeatCall, sequence } from '@musical-patterns/utilities'
import { RenderingName } from '../../rendering'
import { BarTarget, BlockStyle } from '../../types'
import { computeOtherContourPieces, OtherContourPieces } from '../other'
import { getTrueContours } from '../true'
import { AlmostTrueContourWholes } from './types'

const almostTrueExtendedEndingZdaubContourWhole: (renderingName: RenderingName) => ContourWhole<PitchValue> =
    (renderingName: RenderingName): ContourWhole<PitchValue> =>
        as.ContourWhole<PitchValue>(sequence(
            repeatCall(
                () => getTrueContours(BlockStyle.NODLE, BarTarget.FIFTEEN, renderingName),
                as.Cardinal<Array<() => ContourPiece<PitchValue>>>(3),
            ),
            getTrueContours(BlockStyle.LIMIN, BarTarget.FIFTEEN, renderingName),
            getTrueContours(BlockStyle.SCEND, BarTarget.FIFTEEN, renderingName),
            getTrueContours(BlockStyle.LIMIN, BarTarget.TWENTYFOUR, renderingName),
            repeatCall(
                () => getTrueContours(BlockStyle.NODLE, BarTarget.TWENTYFOUR, renderingName),
                as.Cardinal<Array<() => ContourPiece<PitchValue>>>(5),
            ),
        ))

const computeAlmostTrueContourWholes: () => AlmostTrueContourWholes =
    (): AlmostTrueContourWholes => {
        const otherContourPieces: OtherContourPieces = computeOtherContourPieces()

        const extendedEndingZdaubTrem: ContourWhole<PitchValue> =
            almostTrueExtendedEndingZdaubContourWhole(RenderingName.TREM)
        const extendedEndingZdaubBony: ContourWhole<PitchValue> =
            almostTrueExtendedEndingZdaubContourWhole(RenderingName.BONY)
        const extendedEndingZdaubGlis: ContourWhole<PitchValue> =
            almostTrueExtendedEndingZdaubContourWhole(RenderingName.GLIS)

        const yetOfBackbone: ContourWhole<PitchValue> = as.ContourWhole<PitchValue>(sequence(
            repeatCall(
                () => otherContourPieces.backboneFifteen,
                as.Cardinal<Array<() => ContourPiece<PitchValue>>>(8),
            ),
            repeatCall(
                () => otherContourPieces.backboneTwentyfour,
                as.Cardinal<Array<() => ContourPiece<PitchValue>>>(3),
            ),
        ))

        const zdaubBonyWithSuperinscape: ContourWhole<PitchValue> = as.ContourWhole<PitchValue>(sequence(
            repeatCall(
                () => getTrueContours(BlockStyle.NODLE, BarTarget.FIFTEEN, RenderingName.BONY),
                as.Cardinal<Array<() => ContourPiece<PitchValue>>>(3),
            ),
            getTrueContours(BlockStyle.LIMIN, BarTarget.FIFTEEN, RenderingName.BONY),
            getTrueContours(BlockStyle.SCEND, BarTarget.FIFTEEN, RenderingName.BONY),
            getTrueContours(BlockStyle.SCEND, BarTarget.TWENTYFOUR, RenderingName.BONY),
            getTrueContours(BlockStyle.LIMIN, BarTarget.TWENTYFOUR, RenderingName.BONY),
            getTrueContours(BlockStyle.NODLE, BarTarget.TWENTYFOUR, RenderingName.BONY),
        ))

        const yaosUmowchuwowiestAndInaidjiyaiouzdFallAndPitchAdjustment: ContourWhole<PitchValue> =
            as.ContourWhole<PitchValue>(sequence(
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
