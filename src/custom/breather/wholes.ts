import { standardRest } from '@musical-patterns/pattern'
import { ContourWhole, DictionaryOf, repeat, to } from '@musical-patterns/utilities'
import { RenderingName } from '../../material'
import { BarTarget, BlockStyle, ZdaubyaosContour } from '../../types'
import { buildAlmostTrueContourPieces } from '../almostTrue'
import { buildOtherContourPieces } from '../other'
import { getTrueContours } from '../true'

const buildBreatherContourWholes: () => DictionaryOf<ContourWhole<ZdaubyaosContour>> =
    (): DictionaryOf<ContourWhole<ZdaubyaosContour>> => {
        const { inaiiiVarietyContourPiece } = buildAlmostTrueContourPieces()
        const { backboneTwentyfourContourPiece } = buildOtherContourPieces()

        const breatherRestContourWhole: ContourWhole<ZdaubyaosContour> =
            to.ContourWhole<ZdaubyaosContour>(standardRest(24))
        const breatherSpringContourWhole: ContourWhole<ZdaubyaosContour> =
            to.ContourWhole<ZdaubyaosContour>(getTrueContours(
                BlockStyle.INAI,
                BarTarget.TWENTYFOUR,
                RenderingName.SPRING,
            ))
        const breatherSummerContourWhole: ContourWhole<ZdaubyaosContour> =
            to.ContourWhole<ZdaubyaosContour>(getTrueContours(
                BlockStyle.INAI,
                BarTarget.TWENTYFOUR,
                RenderingName.SUMMER,
            ))
        const doubleBreatherFallContourWhole: ContourWhole<ZdaubyaosContour> = to.ContourWhole<ZdaubyaosContour>(
            repeat(backboneTwentyfourContourPiece, to.Count(2)),
        )
        const breatherVarietyContourWhole: ContourWhole<ZdaubyaosContour> =
            to.ContourWhole<ZdaubyaosContour>(inaiiiVarietyContourPiece)
        const breatherSpringAltContourWhole: ContourWhole<ZdaubyaosContour> =
            to.ContourWhole<ZdaubyaosContour>(getTrueContours(
                BlockStyle.OUZD,
                BarTarget.TWENTYFOUR,
                RenderingName.SPRING,
            ))
        const doubleBreatherRestContourWhole: ContourWhole<ZdaubyaosContour> =
            to.ContourWhole<ZdaubyaosContour>(standardRest(48))

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
