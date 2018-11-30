import { ContourWhole, rest, to as patternTo } from '@musical-patterns/pattern'
import { DictionaryOf, repeat, to } from '@musical-patterns/utilities'
import { BarTarget, BlockStyle } from '../../../types'
import { RenderingName } from '../../renderings'
import { buildAlmostTrueContourPieces } from '../almostTrue'
import { buildOtherContourPieces } from '../other'
import { getTrueContours } from '../true'

const buildBreatherContourWholes: () => DictionaryOf<ContourWhole> =
    (): DictionaryOf<ContourWhole> => {
        const { inaiiiVarietyContourPiece } = buildAlmostTrueContourPieces()
        const { backboneTwentyfourContourPiece } = buildOtherContourPieces()

        const breatherRestContourWhole: ContourWhole = patternTo.ContourWhole(rest(24))
        const breatherSpringContourWhole: ContourWhole = patternTo.ContourWhole(getTrueContours(
            BlockStyle.INAI,
            BarTarget.TWENTYFOUR,
            RenderingName.SPRING,
        ))
        const breatherSummerContourWhole: ContourWhole = patternTo.ContourWhole(getTrueContours(
            BlockStyle.INAI,
            BarTarget.TWENTYFOUR,
            RenderingName.SUMMER,
        ))
        const doubleBreatherFallContourWhole: ContourWhole = patternTo.ContourWhole(
            repeat(backboneTwentyfourContourPiece, to.Count(2)),
        )
        const breatherVarietyContourWhole: ContourWhole = patternTo.ContourWhole(inaiiiVarietyContourPiece)
        const breatherSpringAltContourWhole: ContourWhole = patternTo.ContourWhole(getTrueContours(
            BlockStyle.OUZD,
            BarTarget.TWENTYFOUR,
            RenderingName.SPRING,
        ))
        const doubleBreatherRestContourWhole: ContourWhole = patternTo.ContourWhole(rest(48))

        return {
            breatherRestContourWhole,
            breatherSpringAltContourWhole,
            breatherSpringContourWhole,
            breatherSummerContourWhole,
            breatherVarietyContourWhole,
            doubleBreatherFallContourWhole,
            doubleBreatherRestContourWhole,
        }
    }

export {
    buildBreatherContourWholes,
}
