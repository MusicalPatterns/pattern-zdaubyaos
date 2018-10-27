import { DictionaryOf, repeatCall, sequence, to } from '../../../../../src'
import { BarTarget, BlockStyle, Part, Rendering } from '../../types'
import { buildOtherContours } from '../other'
import { getTrueContours } from '../true'

const buildAlmostTrueParts: () => DictionaryOf<Part> =
    (): DictionaryOf<Part> => {
        const {
            backboneFifteenContour,
            backboneTwentyfourContour,
        } = buildOtherContours()

        const almostTrueExtendedEndingZdaubPart:
            (rendering: Rendering) => Part = (rendering: Rendering): Part =>
            sequence([
                repeatCall(() => getTrueContours(BlockStyle.NODLE, BarTarget.FIFTEEN, rendering), to.Count(3)),
                getTrueContours(BlockStyle.LIMIN, BarTarget.FIFTEEN, rendering),
                getTrueContours(BlockStyle.SCEND, BarTarget.FIFTEEN, rendering),
                getTrueContours(BlockStyle.LIMIN, BarTarget.TWENTYFOUR, rendering),
                repeatCall(() => getTrueContours(BlockStyle.NODLE, BarTarget.TWENTYFOUR, rendering), to.Count(5)),
            ])
        const almostTrueExtendedEndingZdaubTremPart: Part = almostTrueExtendedEndingZdaubPart(Rendering.TREM)
        const almostTrueExtendedEndingZdaubBonyPart: Part = almostTrueExtendedEndingZdaubPart(Rendering.BONY)
        const almostTrueExtendedEndingZdaubGlisPart: Part = almostTrueExtendedEndingZdaubPart(Rendering.GLIS)

        const almostTrueYetOfBackbonePart: Part = sequence([
            repeatCall(() => backboneFifteenContour, to.Count(8)),
            repeatCall(() => backboneTwentyfourContour, to.Count(3)),
        ])
        const almostTrueZdaubBonyWithSuperinscapePart: Part = sequence([
            repeatCall(() => getTrueContours(BlockStyle.NODLE, BarTarget.FIFTEEN, Rendering.BONY), to.Count(3)),
            getTrueContours(BlockStyle.LIMIN, BarTarget.FIFTEEN, Rendering.BONY),
            getTrueContours(BlockStyle.SCEND, BarTarget.FIFTEEN, Rendering.BONY),
            getTrueContours(BlockStyle.SCEND, BarTarget.TWENTYFOUR, Rendering.BONY),
            getTrueContours(BlockStyle.LIMIN, BarTarget.TWENTYFOUR, Rendering.BONY),
            getTrueContours(BlockStyle.NODLE, BarTarget.TWENTYFOUR, Rendering.BONY),
        ])

        const almostTrueYaosUmowchuwowiestAndInaidjiyaiouzdFallAndPitchAdjustmentPart: Part = sequence([
            getTrueContours(BlockStyle.CHUWOW, BarTarget.FIFTEEN, Rendering.FALL),
            getTrueContours(BlockStyle.CHUWOW, BarTarget.FIFTEEN, Rendering.FALL),
            getTrueContours(BlockStyle.DJIYAI, BarTarget.FIFTEEN, Rendering.FALL),
            getTrueContours(BlockStyle.OUZD, BarTarget.FIFTEEN, Rendering.FALL),
            getTrueContours(BlockStyle.INAI, BarTarget.FIFTEEN, Rendering.FALL),
            getTrueContours(BlockStyle.OUZD, BarTarget.FIFTEEN, Rendering.FALL),
            getTrueContours(BlockStyle.INAI, BarTarget.FIFTEEN, Rendering.FALL),
            getTrueContours(BlockStyle.CHUWOW, BarTarget.TWENTYFOUR, Rendering.FALL),
            getTrueContours(BlockStyle.DJIYAI, BarTarget.TWENTYFOUR, Rendering.FALL),
        ])

        return {
            almostTrueExtendedEndingZdaubBonyPart,
            almostTrueExtendedEndingZdaubGlisPart,
            almostTrueExtendedEndingZdaubTremPart,
            almostTrueYaosUmowchuwowiestAndInaidjiyaiouzdFallAndPitchAdjustmentPart,
            almostTrueYetOfBackbonePart,
            almostTrueZdaubBonyWithSuperinscapePart,
        }
    }

export {
    buildAlmostTrueParts,
}
