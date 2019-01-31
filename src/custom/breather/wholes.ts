import { StandardContour, standardRest } from '@musical-patterns/pattern'
import { ContourWhole, DictionaryOf, repeat, to } from '@musical-patterns/utilities'
import { RenderingName } from '../../material'
import { BarTarget, BlockStyle } from '../../types'
import { buildAlmostTrueContourPieces } from '../almostTrue'
import { buildOtherContourPieces } from '../other'
import { getTrueContours } from '../true'

const buildBreatherContourWholes: () => DictionaryOf<ContourWhole<StandardContour>> =
    (): DictionaryOf<ContourWhole<StandardContour>> => {
        const { inaiiiVarietyContourPiece } = buildAlmostTrueContourPieces()
        const { backboneTwentyfourContourPiece } = buildOtherContourPieces()

        const breatherRestContourWhole: ContourWhole<StandardContour> =
            to.ContourWhole<StandardContour>(standardRest(24))
        const breatherSpringContourWhole: ContourWhole<StandardContour> =
            to.ContourWhole<StandardContour>(getTrueContours(
                BlockStyle.INAI,
                BarTarget.TWENTYFOUR,
                RenderingName.SPRING,
            ))
        const breatherSummerContourWhole: ContourWhole<StandardContour> =
            to.ContourWhole<StandardContour>(getTrueContours(
                BlockStyle.INAI,
                BarTarget.TWENTYFOUR,
                RenderingName.SUMMER,
            ))
        const doubleBreatherFallContourWhole: ContourWhole<StandardContour> = to.ContourWhole<StandardContour>(
            repeat(backboneTwentyfourContourPiece, to.Count(2)),
        )
        const breatherVarietyContourWhole: ContourWhole<StandardContour> =
            to.ContourWhole<StandardContour>(inaiiiVarietyContourPiece)
        const breatherSpringAltContourWhole: ContourWhole<StandardContour> =
            to.ContourWhole<StandardContour>(getTrueContours(
                BlockStyle.OUZD,
                BarTarget.TWENTYFOUR,
                RenderingName.SPRING,
            ))
        const doubleBreatherRestContourWhole: ContourWhole<StandardContour> =
            to.ContourWhole<StandardContour>(standardRest(48))

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
