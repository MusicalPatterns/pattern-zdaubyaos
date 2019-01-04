import { ContourPiece, ContourWhole, DictionaryOf, repeatCall, sequence, to } from '@musical-patterns/utilities'
import { RenderingName } from '../../materials'
import { BarTarget, BlockStyle, ZdaubyaosContour } from '../../types'
import { buildAlmostTrueContourPieces } from '../almostTrue'
import { getTrueContours } from './pieces'
import { FormulaicTrueYaosContourWhole } from './types'

const trueFormulaicUmowchuwowiestToInaidjiyaiouzdContourWhole: FormulaicTrueYaosContourWhole = (
    fifteenRenderingName: RenderingName, twentyfourRenderingName: RenderingName,
): ContourWhole<ZdaubyaosContour> => to.ContourWhole(sequence([
    repeatCall(() => getTrueContours(BlockStyle.CHUWOW, BarTarget.FIFTEEN, fifteenRenderingName), to.Count(4)),
    repeatCall(() => getTrueContours(BlockStyle.IEST, BarTarget.FIFTEEN, fifteenRenderingName), to.Count(1)),
    repeatCall(() => getTrueContours(BlockStyle.UMOW, BarTarget.FIFTEEN, fifteenRenderingName), to.Count(1)),
    repeatCall(() => getTrueContours(BlockStyle.IEST, BarTarget.FIFTEEN, fifteenRenderingName), to.Count(1)),
    repeatCall(() => getTrueContours(BlockStyle.UMOW, BarTarget.FIFTEEN, fifteenRenderingName), to.Count(1)),
    repeatCall(
        () => getTrueContours(BlockStyle.DJIYAI, BarTarget.TWENTYFOUR, twentyfourRenderingName), to.Count(4),
    ),
]))
const trueFormulaicInaidjiyaiouzdToUmowchuwowiestYaosContourWhole: FormulaicTrueYaosContourWhole = (
    fifteenRenderingName: RenderingName, twentyfourRenderingName: RenderingName,
): ContourWhole<ZdaubyaosContour> => to.ContourWhole(sequence([
    repeatCall(() => getTrueContours(BlockStyle.DJIYAI, BarTarget.FIFTEEN, fifteenRenderingName), to.Count(4)),
    repeatCall(() => getTrueContours(BlockStyle.OUZD, BarTarget.FIFTEEN, fifteenRenderingName), to.Count(1)),
    repeatCall(() => getTrueContours(BlockStyle.INAI, BarTarget.FIFTEEN, fifteenRenderingName), to.Count(1)),
    repeatCall(() => getTrueContours(BlockStyle.OUZD, BarTarget.FIFTEEN, fifteenRenderingName), to.Count(1)),
    repeatCall(() => getTrueContours(BlockStyle.INAI, BarTarget.FIFTEEN, fifteenRenderingName), to.Count(1)),
    repeatCall(
        () => getTrueContours(BlockStyle.CHUWOW, BarTarget.TWENTYFOUR, twentyfourRenderingName), to.Count(4),
    ),
]))
const buildTrueContourWholes: () => DictionaryOf<ContourWhole<ZdaubyaosContour>> =
    (): DictionaryOf<ContourWhole<ZdaubyaosContour>> => {
        const { zdaubGlisVariantContourPiece }: DictionaryOf<ContourPiece<ZdaubyaosContour>> =
            buildAlmostTrueContourPieces()
        const trueYaosUmowchuwowiestSpringToSummerContourWhole: ContourWhole<ZdaubyaosContour> =
            trueFormulaicUmowchuwowiestToInaidjiyaiouzdContourWhole(RenderingName.SPRING, RenderingName.SUMMER)
        const trueYaosUmowchuwowiestSummerToSpringContourWhole: ContourWhole<ZdaubyaosContour> =
            trueFormulaicUmowchuwowiestToInaidjiyaiouzdContourWhole(RenderingName.SUMMER, RenderingName.SPRING)
        const trueYaosInaidjiyaiouzdSummerToSpringContourWhole: ContourWhole<ZdaubyaosContour> =
            trueFormulaicInaidjiyaiouzdToUmowchuwowiestYaosContourWhole(RenderingName.SUMMER, RenderingName.SPRING)
        const trueYaosSpringySummerStraightIntoZdaubInaidjiyaiouzdContourWhole: ContourWhole<ZdaubyaosContour> =
            to.ContourWhole(sequence([
                repeatCall(() =>
                        getTrueContours(BlockStyle.DJIYAI, BarTarget.FIFTEEN, RenderingName.SPRINGY_SUMMER),
                           to.Count(4),
                ),
                repeatCall(() =>
                        getTrueContours(BlockStyle.OUZD, BarTarget.FIFTEEN, RenderingName.SPRINGY_SUMMER),
                           to.Count(1),
                ),
                repeatCall(() =>
                        getTrueContours(BlockStyle.UMOW, BarTarget.FIFTEEN, RenderingName.SPRINGY_SUMMER),
                           to.Count(1),
                ),
                repeatCall(
                    () => getTrueContours(BlockStyle.OUZD, BarTarget.FIFTEEN, RenderingName.SPRINGY_SUMMER),
                    to.Count(1),
                ),
                repeatCall(
                    () => getTrueContours(BlockStyle.DJIYAI, BarTarget.FIFTEEN, RenderingName.SPRINGY_SUMMER),
                    to.Count(1),
                ),
                repeatCall(
                    () => getTrueContours(BlockStyle.CHUWOW, BarTarget.TWENTYFOUR, RenderingName.SUMMERY_SPRING),
                    to.Count(4),
                ),
            ]))
        const trueZdaubGlisContourWhole: ContourWhole<ZdaubyaosContour> = to.ContourWhole(sequence([
            repeatCall(() => getTrueContours(BlockStyle.NODLE, BarTarget.FIFTEEN, RenderingName.GLIS), to.Count(3)),
            getTrueContours(BlockStyle.LIMIN, BarTarget.FIFTEEN, RenderingName.GLIS),
            getTrueContours(BlockStyle.SCEND, BarTarget.FIFTEEN, RenderingName.GLIS),
            getTrueContours(BlockStyle.LIMIN, BarTarget.TWENTYFOUR, RenderingName.GLIS),
            repeatCall(() => getTrueContours(BlockStyle.NODLE, BarTarget.TWENTYFOUR, RenderingName.GLIS), to.Count(3)),
        ]))
        const trueZdaubGlisVariantContourWhole: ContourWhole<ZdaubyaosContour> = to.ContourWhole(sequence([
            repeatCall(() => getTrueContours(BlockStyle.NODLE, BarTarget.FIFTEEN, RenderingName.GLIS), to.Count(4)),
            getTrueContours(BlockStyle.LIMIN, BarTarget.FIFTEEN, RenderingName.GLIS),
            zdaubGlisVariantContourPiece,
        ]))
        const trueZdaubTremContourWhole: ContourWhole<ZdaubyaosContour> = to.ContourWhole(sequence([
            repeatCall(() => getTrueContours(BlockStyle.NODLE, BarTarget.FIFTEEN, RenderingName.TREM), to.Count(3)),
            getTrueContours(BlockStyle.LIMIN, BarTarget.FIFTEEN, RenderingName.TREM),
            getTrueContours(BlockStyle.SCEND, BarTarget.FIFTEEN, RenderingName.TREM),
            getTrueContours(BlockStyle.LIMIN, BarTarget.TWENTYFOUR, RenderingName.TREM),
            repeatCall(() => getTrueContours(BlockStyle.NODLE, BarTarget.TWENTYFOUR, RenderingName.TREM), to.Count(3)),
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
