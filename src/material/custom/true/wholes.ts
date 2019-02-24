// tslint:disable max-file-line-count

import { PitchDuration } from '@musical-patterns/pattern'
import { ContourPiece, ContourWhole, DictionaryOf, repeatCall, sequence, to } from '@musical-patterns/utilities'
import { RenderingName } from '../../renderings'
import { BarTarget, BlockStyle } from '../../types'
import { buildAlmostTrueContourPieces } from '../almostTrue'
import { getTrueContours } from './pieces'
import { FormulaicTrueYaosContourWhole } from './types'

const trueFormulaicUmowchuwowiestToInaidjiyaiouzdContourWhole: FormulaicTrueYaosContourWhole = (
    fifteenRenderingName: RenderingName, twentyfourRenderingName: RenderingName,
): ContourWhole<PitchDuration> => to.ContourWhole(sequence([
    repeatCall(
        () => getTrueContours(BlockStyle.CHUWOW, BarTarget.FIFTEEN, fifteenRenderingName), to.Cardinal(4),
    ),
    repeatCall(
        () => getTrueContours(BlockStyle.IEST, BarTarget.FIFTEEN, fifteenRenderingName), to.Cardinal(1),
    ),
    repeatCall(
        () => getTrueContours(BlockStyle.UMOW, BarTarget.FIFTEEN, fifteenRenderingName), to.Cardinal(1),
    ),
    repeatCall(
        () => getTrueContours(BlockStyle.IEST, BarTarget.FIFTEEN, fifteenRenderingName), to.Cardinal(1),
    ),
    repeatCall(
        () => getTrueContours(BlockStyle.UMOW, BarTarget.FIFTEEN, fifteenRenderingName), to.Cardinal(1),
    ),
    repeatCall(
        () => getTrueContours(BlockStyle.DJIYAI, BarTarget.TWENTYFOUR, twentyfourRenderingName), to.Cardinal(4),
    ),
]))

const trueFormulaicInaidjiyaiouzdToUmowchuwowiestYaosContourWhole: FormulaicTrueYaosContourWhole = (
    fifteenRenderingName: RenderingName, twentyfourRenderingName: RenderingName,
): ContourWhole<PitchDuration> => to.ContourWhole(sequence([
    repeatCall(
        () => getTrueContours(BlockStyle.DJIYAI, BarTarget.FIFTEEN, fifteenRenderingName), to.Cardinal(4),
    ),
    repeatCall(
        () => getTrueContours(BlockStyle.OUZD, BarTarget.FIFTEEN, fifteenRenderingName), to.Cardinal(1),
    ),
    repeatCall(
        () => getTrueContours(BlockStyle.INAI, BarTarget.FIFTEEN, fifteenRenderingName), to.Cardinal(1),
    ),
    repeatCall(
        () => getTrueContours(BlockStyle.OUZD, BarTarget.FIFTEEN, fifteenRenderingName), to.Cardinal(1),
    ),
    repeatCall(
        () => getTrueContours(BlockStyle.INAI, BarTarget.FIFTEEN, fifteenRenderingName), to.Cardinal(1),
    ),
    repeatCall(
        () => getTrueContours(BlockStyle.CHUWOW, BarTarget.TWENTYFOUR, twentyfourRenderingName), to.Cardinal(4),
    ),
]))

const buildTrueContourWholes: () => DictionaryOf<ContourWhole<PitchDuration>> =
    (): DictionaryOf<ContourWhole<PitchDuration>> => {
        const { zdaubGlisVariantContourPiece }: DictionaryOf<ContourPiece<PitchDuration>> =
            buildAlmostTrueContourPieces()
        const trueYaosUmowchuwowiestSpringToSummerContourWhole: ContourWhole<PitchDuration> =
            trueFormulaicUmowchuwowiestToInaidjiyaiouzdContourWhole(RenderingName.SPRING, RenderingName.SUMMER)
        const trueYaosUmowchuwowiestSummerToSpringContourWhole: ContourWhole<PitchDuration> =
            trueFormulaicUmowchuwowiestToInaidjiyaiouzdContourWhole(RenderingName.SUMMER, RenderingName.SPRING)
        const trueYaosInaidjiyaiouzdSummerToSpringContourWhole: ContourWhole<PitchDuration> =
            trueFormulaicInaidjiyaiouzdToUmowchuwowiestYaosContourWhole(RenderingName.SUMMER, RenderingName.SPRING)
        const trueYaosSpringySummerStraightIntoZdaubInaidjiyaiouzdContourWhole: ContourWhole<PitchDuration> =
            to.ContourWhole(sequence([
                repeatCall(
                    () =>
                        getTrueContours(BlockStyle.DJIYAI, BarTarget.FIFTEEN, RenderingName.SPRINGY_SUMMER),
                    to.Cardinal(4),
                ),
                repeatCall(
                    () =>
                        getTrueContours(BlockStyle.OUZD, BarTarget.FIFTEEN, RenderingName.SPRINGY_SUMMER),
                    to.Cardinal(1),
                ),
                repeatCall(
                    () =>
                        getTrueContours(BlockStyle.UMOW, BarTarget.FIFTEEN, RenderingName.SPRINGY_SUMMER),
                    to.Cardinal(1),
                ),
                repeatCall(
                    () => getTrueContours(BlockStyle.OUZD, BarTarget.FIFTEEN, RenderingName.SPRINGY_SUMMER),
                    to.Cardinal(1),
                ),
                repeatCall(
                    () => getTrueContours(BlockStyle.DJIYAI, BarTarget.FIFTEEN, RenderingName.SPRINGY_SUMMER),
                    to.Cardinal(1),
                ),
                repeatCall(
                    () => getTrueContours(BlockStyle.CHUWOW, BarTarget.TWENTYFOUR, RenderingName.SUMMERY_SPRING),
                    to.Cardinal(4),
                ),
            ]))
        const trueZdaubGlisContourWhole: ContourWhole<PitchDuration> = to.ContourWhole(sequence([
            repeatCall(() => getTrueContours(BlockStyle.NODLE, BarTarget.FIFTEEN, RenderingName.GLIS), to.Cardinal(3)),
            getTrueContours(BlockStyle.LIMIN, BarTarget.FIFTEEN, RenderingName.GLIS),
            getTrueContours(BlockStyle.SCEND, BarTarget.FIFTEEN, RenderingName.GLIS),
            getTrueContours(BlockStyle.LIMIN, BarTarget.TWENTYFOUR, RenderingName.GLIS),
            repeatCall(
                () => getTrueContours(BlockStyle.NODLE, BarTarget.TWENTYFOUR, RenderingName.GLIS), to.Cardinal(3),
            ),
        ]))
        const trueZdaubGlisVariantContourWhole: ContourWhole<PitchDuration> = to.ContourWhole(sequence([
            repeatCall(() => getTrueContours(BlockStyle.NODLE, BarTarget.FIFTEEN, RenderingName.GLIS), to.Cardinal(4)),
            getTrueContours(BlockStyle.LIMIN, BarTarget.FIFTEEN, RenderingName.GLIS),
            zdaubGlisVariantContourPiece,
        ]))
        const trueZdaubTremContourWhole: ContourWhole<PitchDuration> = to.ContourWhole(sequence([
            repeatCall(() => getTrueContours(BlockStyle.NODLE, BarTarget.FIFTEEN, RenderingName.TREM), to.Cardinal(3)),
            getTrueContours(BlockStyle.LIMIN, BarTarget.FIFTEEN, RenderingName.TREM),
            getTrueContours(BlockStyle.SCEND, BarTarget.FIFTEEN, RenderingName.TREM),
            getTrueContours(BlockStyle.LIMIN, BarTarget.TWENTYFOUR, RenderingName.TREM),
            repeatCall(
                () => getTrueContours(BlockStyle.NODLE, BarTarget.TWENTYFOUR, RenderingName.TREM), to.Cardinal(3),
            ),
        ]))

        return {
            trueYaosInaidjiyaiouzdSummerToSpringContourWhole,
            trueYaosSpringySummerStraightIntoZdaubInaidjiyaiouzdContourWhole,
            trueYaosUmowchuwowiestSpringToSummerContourWhole,
            trueYaosUmowchuwowiestSummerToSpringContourWhole,
            trueZdaubGlisContourWhole,
            trueZdaubGlisVariantContourWhole,
            trueZdaubTremContourWhole,
        }
    }
export { buildTrueContourWholes }
