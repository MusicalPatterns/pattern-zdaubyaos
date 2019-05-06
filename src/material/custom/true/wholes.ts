// tslint:disable max-file-line-count

import { PitchValue } from '@musical-patterns/material'
import { as, ContourPiece, ContourWhole, repeatCall, sequence } from '@musical-patterns/utilities'
import { RenderingName } from '../../rendering'
import { BarTarget, BlockStyle } from '../../types'
import { AlmostTrueContourPieces, computeAlmostTrueContourPieces } from '../almostTrue'
import { getTrueContours } from './pieces'
import { FormulaicTrueYaosContourWhole, TrueContourWholes } from './types'

const trueFormulaicUmowchuwowiestToInaidjiyaiouzdContourWhole: FormulaicTrueYaosContourWhole = (
    fifteenRenderingName: RenderingName, twentyfourRenderingName: RenderingName,
): ContourWhole<PitchValue> => as.ContourWhole<PitchValue>(sequence(
    repeatCall(
        () => getTrueContours(BlockStyle.CHUWOW, BarTarget.FIFTEEN, fifteenRenderingName),
        as.Cardinal<Array<() => ContourPiece<PitchValue>>>(4),
    ),
    getTrueContours(BlockStyle.IEST, BarTarget.FIFTEEN, fifteenRenderingName),
    getTrueContours(BlockStyle.UMOW, BarTarget.FIFTEEN, fifteenRenderingName),
    getTrueContours(BlockStyle.IEST, BarTarget.FIFTEEN, fifteenRenderingName),
    getTrueContours(BlockStyle.UMOW, BarTarget.FIFTEEN, fifteenRenderingName),
    repeatCall(
        () => getTrueContours(BlockStyle.DJIYAI, BarTarget.TWENTYFOUR, twentyfourRenderingName),
        as.Cardinal<Array<() => ContourPiece<PitchValue>>>(4),
    ),
))

const trueFormulaicInaidjiyaiouzdToUmowchuwowiestYaosContourWhole: FormulaicTrueYaosContourWhole = (
    fifteenRenderingName: RenderingName, twentyfourRenderingName: RenderingName,
): ContourWhole<PitchValue> => as.ContourWhole<PitchValue>(sequence(
    repeatCall(
        () => getTrueContours(BlockStyle.DJIYAI, BarTarget.FIFTEEN, fifteenRenderingName),
        as.Cardinal<Array<() => ContourPiece<PitchValue>>>(4),
    ),
    getTrueContours(BlockStyle.OUZD, BarTarget.FIFTEEN, fifteenRenderingName),
    getTrueContours(BlockStyle.INAI, BarTarget.FIFTEEN, fifteenRenderingName),
    getTrueContours(BlockStyle.OUZD, BarTarget.FIFTEEN, fifteenRenderingName),
    getTrueContours(BlockStyle.INAI, BarTarget.FIFTEEN, fifteenRenderingName),
    repeatCall(
        () => getTrueContours(BlockStyle.CHUWOW, BarTarget.TWENTYFOUR, twentyfourRenderingName),
        as.Cardinal<Array<() => ContourPiece<PitchValue>>>(4),
    ),
))

const computeTrueContourWholes: () => TrueContourWholes =
    (): TrueContourWholes => {
        const almostTruePieces: AlmostTrueContourPieces = computeAlmostTrueContourPieces()
        const yaosUmowchuwowiestSpringToSummer: ContourWhole<PitchValue> =
            trueFormulaicUmowchuwowiestToInaidjiyaiouzdContourWhole(RenderingName.SPRING, RenderingName.SUMMER)
        const yaosUmowchuwowiestSummerToSpring: ContourWhole<PitchValue> =
            trueFormulaicUmowchuwowiestToInaidjiyaiouzdContourWhole(RenderingName.SUMMER, RenderingName.SPRING)
        const yaosInaidjiyaiouzdSummerToSpring: ContourWhole<PitchValue> =
            trueFormulaicInaidjiyaiouzdToUmowchuwowiestYaosContourWhole(RenderingName.SUMMER, RenderingName.SPRING)
        const yaosSpringySummerStraightIntoZdaubInaidjiyaiouzd: ContourWhole<PitchValue> =
            as.ContourWhole<PitchValue>(sequence(
                repeatCall(
                    () =>
                        getTrueContours(BlockStyle.DJIYAI, BarTarget.FIFTEEN, RenderingName.SPRINGY_SUMMER),
                    as.Cardinal<Array<() => ContourPiece<PitchValue>>>(4),
                ),
                getTrueContours(BlockStyle.OUZD, BarTarget.FIFTEEN, RenderingName.SPRINGY_SUMMER),
                getTrueContours(BlockStyle.UMOW, BarTarget.FIFTEEN, RenderingName.SPRINGY_SUMMER),
                getTrueContours(BlockStyle.OUZD, BarTarget.FIFTEEN, RenderingName.SPRINGY_SUMMER),
                getTrueContours(BlockStyle.DJIYAI, BarTarget.FIFTEEN, RenderingName.SPRINGY_SUMMER),
                repeatCall(
                    () => getTrueContours(BlockStyle.CHUWOW, BarTarget.TWENTYFOUR, RenderingName.SUMMERY_SPRING),
                    as.Cardinal<Array<() => ContourPiece<PitchValue>>>(4),
                ),
            ))
        const zdaubGlis: ContourWhole<PitchValue> = as.ContourWhole<PitchValue>(sequence(
            repeatCall(
                () => getTrueContours(BlockStyle.NODLE, BarTarget.FIFTEEN, RenderingName.GLIS),
                as.Cardinal<Array<() => ContourPiece<PitchValue>>>(3),
            ),
            getTrueContours(BlockStyle.LIMIN, BarTarget.FIFTEEN, RenderingName.GLIS),
            getTrueContours(BlockStyle.SCEND, BarTarget.FIFTEEN, RenderingName.GLIS),
            getTrueContours(BlockStyle.LIMIN, BarTarget.TWENTYFOUR, RenderingName.GLIS),
            repeatCall(
                () => getTrueContours(BlockStyle.NODLE, BarTarget.TWENTYFOUR, RenderingName.GLIS),
                as.Cardinal<Array<() => ContourPiece<PitchValue>>>(3),
            ),
        ))
        const zdaubGlisVariant: ContourWhole<PitchValue> = as.ContourWhole<PitchValue>(sequence(
            repeatCall(
                () => getTrueContours(BlockStyle.NODLE, BarTarget.FIFTEEN, RenderingName.GLIS),
                as.Cardinal<Array<() => ContourPiece<PitchValue>>>(4),
            ),
            getTrueContours(BlockStyle.LIMIN, BarTarget.FIFTEEN, RenderingName.GLIS),
            almostTruePieces.zdaubGlisVariant,
        ))
        const zdaubTrem: ContourWhole<PitchValue> = as.ContourWhole<PitchValue>(sequence(
            repeatCall(
                () => getTrueContours(BlockStyle.NODLE, BarTarget.FIFTEEN, RenderingName.TREM),
                as.Cardinal<Array<() => ContourPiece<PitchValue>>>(3),
            ),
            getTrueContours(BlockStyle.LIMIN, BarTarget.FIFTEEN, RenderingName.TREM),
            getTrueContours(BlockStyle.SCEND, BarTarget.FIFTEEN, RenderingName.TREM),
            getTrueContours(BlockStyle.LIMIN, BarTarget.TWENTYFOUR, RenderingName.TREM),
            repeatCall(
                () => getTrueContours(BlockStyle.NODLE, BarTarget.TWENTYFOUR, RenderingName.TREM),
                as.Cardinal<Array<() => ContourPiece<PitchValue>>>(3),
            ),
        ))

        return {
            yaosInaidjiyaiouzdSummerToSpring,
            yaosSpringySummerStraightIntoZdaubInaidjiyaiouzd,
            yaosUmowchuwowiestSpringToSummer,
            yaosUmowchuwowiestSummerToSpring,
            zdaubGlis,
            zdaubGlisVariant,
            zdaubTrem,
        }
    }
export { computeTrueContourWholes }
