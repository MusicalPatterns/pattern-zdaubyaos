import { DictionaryOf, repeat, to } from '@musical-patterns/shared'
import { ContourWhole, to as labTo } from '../../../../../../nominal'
import { rest } from '../../../../../../patternMaterial'
import { BarTarget, BlockStyle } from '../../../types'
import { RenderingName } from '../../renderings'
import { buildAlmostTrueContourPieces } from '../almostTrue'
import { buildOtherContourPieces } from '../other'
import { getTrueContours } from '../true'

const buildBreatherContourWholes: () => DictionaryOf<ContourWhole> =
    (): DictionaryOf<ContourWhole> => {
        const { inaiiiVarietyContourPiece } = buildAlmostTrueContourPieces()
        const { backboneTwentyfourContourPiece } = buildOtherContourPieces()

        const breatherRestContourWhole: ContourWhole = labTo.ContourWhole(rest(24))
        const breatherSpringContourWhole: ContourWhole = labTo.ContourWhole(getTrueContours(
            BlockStyle.INAI,
            BarTarget.TWENTYFOUR,
            RenderingName.SPRING,
        ))
        const breatherSummerContourWhole: ContourWhole = labTo.ContourWhole(getTrueContours(
            BlockStyle.INAI,
            BarTarget.TWENTYFOUR,
            RenderingName.SUMMER,
        ))
        const doubleBreatherFallContourWhole: ContourWhole = labTo.ContourWhole(
            repeat(backboneTwentyfourContourPiece, to.Count(2)),
        )
        const breatherVarietyContourWhole: ContourWhole = labTo.ContourWhole(inaiiiVarietyContourPiece)
        const breatherSpringAltContourWhole: ContourWhole = labTo.ContourWhole(getTrueContours(
            BlockStyle.OUZD,
            BarTarget.TWENTYFOUR,
            RenderingName.SPRING,
        ))
        const doubleBreatherRestContourWhole: ContourWhole = labTo.ContourWhole(rest(48))

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
