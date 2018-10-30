// tslint:disable:align

import { DictionaryOf, repeat, to } from '../../../../../../src'
import { to as zdaubyaosTo } from '../../../nominal'
import { BarTarget, BlockStyle, ContourWhole } from '../../../types'
import { RenderingName } from '../../renderings'
import { rest } from '../../rest'
import { buildAlmostTrueContourPieces } from '../almostTrue'
import { buildOtherContourPieces } from '../other'
import { getTrueContours } from '../true'

const buildBreatherContourWholes: () => DictionaryOf<ContourWhole> =
    (): DictionaryOf<ContourWhole> => {
        const { inaiiiVarietyContourPiece } = buildAlmostTrueContourPieces()
        const { backboneTwentyfourContourPiece } = buildOtherContourPieces()

        const breatherRestContourWhole: ContourWhole = zdaubyaosTo.ContourWhole(rest(to.Index(24)))
        const breatherSpringContourWhole: ContourWhole = zdaubyaosTo.ContourWhole(getTrueContours(
            BlockStyle.INAI,
            BarTarget.TWENTYFOUR,
            RenderingName.SPRING,
        ))
        const breatherSummerContourWhole: ContourWhole = zdaubyaosTo.ContourWhole(getTrueContours(
            BlockStyle.INAI,
            BarTarget.TWENTYFOUR,
            RenderingName.SUMMER,
        ))
        const doubleBreatherFallContourWhole: ContourWhole = zdaubyaosTo.ContourWhole(
            repeat(backboneTwentyfourContourPiece, to.Count(2)),
        )
        const breatherVarietyContourWhole: ContourWhole = zdaubyaosTo.ContourWhole(inaiiiVarietyContourPiece)
        const breatherSpringAltContourWhole: ContourWhole = zdaubyaosTo.ContourWhole(getTrueContours(
            BlockStyle.OUZD,
            BarTarget.TWENTYFOUR,
            RenderingName.SPRING,
        ))
        const doubleBreatherRestContourWhole: ContourWhole = zdaubyaosTo.ContourWhole(rest(to.Index(48)))

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
