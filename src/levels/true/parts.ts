import { DictionaryOf, repeatCall, sequence, to } from '../../../../../src'
import { BarTarget, BlockStyle, Contour, Part, Rendering } from '../../types'
import { buildAlmostTrueContours } from '../almostTrue'
import { getTrueContours } from './contours'
import { FormulaicTrueYaosPart } from './types'

const buildTrueParts: () => DictionaryOf<Part> =
    (): DictionaryOf<Part> => {
        const { zdaubGlisVariantContour }: DictionaryOf<Contour> = buildAlmostTrueContours()

        const trueFormulaicUmowchuwowiestToInaidjiyaiouzdPart: FormulaicTrueYaosPart = (
            fifteenRendering: Rendering, twentyfourRendering: Rendering,
        ): Part => sequence([
            repeatCall(() => getTrueContours(BlockStyle.CHUWOW, BarTarget.FIFTEEN, fifteenRendering), to.Count(4)),
            repeatCall(() => getTrueContours(BlockStyle.IEST, BarTarget.FIFTEEN, fifteenRendering), to.Count(1)),
            repeatCall(() => getTrueContours(BlockStyle.UMOW, BarTarget.FIFTEEN, fifteenRendering), to.Count(1)),
            repeatCall(() => getTrueContours(BlockStyle.IEST, BarTarget.FIFTEEN, fifteenRendering), to.Count(1)),
            repeatCall(() => getTrueContours(BlockStyle.UMOW, BarTarget.FIFTEEN, fifteenRendering), to.Count(1)),
            repeatCall(
                () => getTrueContours(BlockStyle.DJIYAI, BarTarget.TWENTYFOUR, twentyfourRendering), to.Count(4),
            ),
        ])
        const trueFormulaicInaidjiyaiouzdToUmowchuwowiestYaosPart: FormulaicTrueYaosPart = (
            fifteenRendering: Rendering, twentyfourRendering: Rendering,
        ): Part => sequence([
            repeatCall(() => getTrueContours(BlockStyle.DJIYAI, BarTarget.FIFTEEN, fifteenRendering), to.Count(4)),
            repeatCall(() => getTrueContours(BlockStyle.OUZD, BarTarget.FIFTEEN, fifteenRendering), to.Count(1)),
            repeatCall(() => getTrueContours(BlockStyle.INAI, BarTarget.FIFTEEN, fifteenRendering), to.Count(1)),
            repeatCall(() => getTrueContours(BlockStyle.OUZD, BarTarget.FIFTEEN, fifteenRendering), to.Count(1)),
            repeatCall(() => getTrueContours(BlockStyle.INAI, BarTarget.FIFTEEN, fifteenRendering), to.Count(1)),
            repeatCall(
                () => getTrueContours(BlockStyle.CHUWOW, BarTarget.TWENTYFOUR, twentyfourRendering), to.Count(4),
            ),
        ])
        const trueYaosUmowchuwowiestSpringToSummerPart: Part = trueFormulaicUmowchuwowiestToInaidjiyaiouzdPart(
            Rendering.SPRING, Rendering.SUMMER,
        )
        const trueYaosUmowchuwowiestSummerToSpringPart: Part = trueFormulaicUmowchuwowiestToInaidjiyaiouzdPart(
            Rendering.SUMMER, Rendering.SPRING,
        )
        const trueYaosInaidjiyaiouzdSummerToSpringPart: Part = trueFormulaicInaidjiyaiouzdToUmowchuwowiestYaosPart(
            Rendering.SUMMER, Rendering.SPRING,
        )
        const trueYaosSpringySummerStraightIntoZdaubInaidjiyaiouzdPart: Part = sequence([
            repeatCall(
                () => getTrueContours(BlockStyle.DJIYAI, BarTarget.FIFTEEN, Rendering.SPRINGY_SUMMER), to.Count(4),
            ),
            repeatCall(
                () => getTrueContours(BlockStyle.OUZD, BarTarget.FIFTEEN, Rendering.SPRINGY_SUMMER), to.Count(1),
            ),
            repeatCall(
                () => getTrueContours(BlockStyle.UMOW, BarTarget.FIFTEEN, Rendering.SPRINGY_SUMMER), to.Count(1),
            ),
            repeatCall(
                () => getTrueContours(BlockStyle.OUZD, BarTarget.FIFTEEN, Rendering.SPRINGY_SUMMER), to.Count(1),
            ),
            repeatCall(
                () => getTrueContours(BlockStyle.DJIYAI, BarTarget.FIFTEEN, Rendering.SPRINGY_SUMMER), to.Count(1),
            ),
            repeatCall(
                () => getTrueContours(BlockStyle.CHUWOW, BarTarget.TWENTYFOUR, Rendering.SUMMERY_SPRING), to.Count(4),
            ),
        ])
        const trueZdaubGlisPart: Part = sequence([
            repeatCall(() => getTrueContours(BlockStyle.NODLE, BarTarget.FIFTEEN, Rendering.GLIS), to.Count(3)),
            getTrueContours(BlockStyle.LIMIN, BarTarget.FIFTEEN, Rendering.GLIS),
            getTrueContours(BlockStyle.SCEND, BarTarget.FIFTEEN, Rendering.GLIS),
            getTrueContours(BlockStyle.LIMIN, BarTarget.TWENTYFOUR, Rendering.GLIS),
            repeatCall(() => getTrueContours(BlockStyle.NODLE, BarTarget.TWENTYFOUR, Rendering.GLIS), to.Count(3)),
        ])
        const trueZdaubGlisVariantPart: Part = sequence([
            repeatCall(() => getTrueContours(BlockStyle.NODLE, BarTarget.FIFTEEN, Rendering.GLIS), to.Count(4)),
            getTrueContours(BlockStyle.LIMIN, BarTarget.FIFTEEN, Rendering.GLIS),
            zdaubGlisVariantContour,
        ])
        const trueZdaubTremPart: Part = sequence([
            repeatCall(() => getTrueContours(BlockStyle.NODLE, BarTarget.FIFTEEN, Rendering.TREM), to.Count(3)),
            getTrueContours(BlockStyle.LIMIN, BarTarget.FIFTEEN, Rendering.TREM),
            getTrueContours(BlockStyle.SCEND, BarTarget.FIFTEEN, Rendering.TREM),
            getTrueContours(BlockStyle.LIMIN, BarTarget.TWENTYFOUR, Rendering.TREM),
            repeatCall(() => getTrueContours(BlockStyle.NODLE, BarTarget.TWENTYFOUR, Rendering.TREM), to.Count(3)),
        ])

        return {
            trueYaosInaidjiyaiouzdSummerToSpringPart,
            trueYaosSpringySummerStraightIntoZdaubInaidjiyaiouzdPart,
            trueYaosUmowchuwowiestSpringToSummerPart,
            trueYaosUmowchuwowiestSummerToSpringPart,
            trueZdaubGlisPart,
            trueZdaubGlisVariantPart,
            trueZdaubTremPart,
        }
    }

export {
    buildTrueParts,
}
