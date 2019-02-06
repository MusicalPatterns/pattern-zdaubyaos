import { PitchDuration, pitchDurationRest } from '@musical-patterns/pattern'
import { ContourWhole, DictionaryOf, repeat, to } from '@musical-patterns/utilities'
import { RenderingName } from '../../material'
import { BarTarget, BlockStyle } from '../../types'
import { buildAlmostTrueContourPieces } from '../almostTrue'
import { buildOtherContourPieces } from '../other'
import { getTrueContours } from '../true'

const buildBreatherContourWholes: () => DictionaryOf<ContourWhole<PitchDuration>> =
    (): DictionaryOf<ContourWhole<PitchDuration>> => {
        const { inaiiiVarietyContourPiece } = buildAlmostTrueContourPieces()
        const { backboneTwentyfourContourPiece } = buildOtherContourPieces()

        const breatherRestContourWhole: ContourWhole<PitchDuration> =
            to.ContourWhole<PitchDuration>(pitchDurationRest(24))
        const breatherSpringContourWhole: ContourWhole<PitchDuration> =
            to.ContourWhole<PitchDuration>(getTrueContours(
                BlockStyle.INAI,
                BarTarget.TWENTYFOUR,
                RenderingName.SPRING,
            ))
        const breatherSummerContourWhole: ContourWhole<PitchDuration> =
            to.ContourWhole<PitchDuration>(getTrueContours(
                BlockStyle.INAI,
                BarTarget.TWENTYFOUR,
                RenderingName.SUMMER,
            ))
        const doubleBreatherFallContourWhole: ContourWhole<PitchDuration> = to.ContourWhole<PitchDuration>(
            repeat(backboneTwentyfourContourPiece, to.Cardinal(2)),
        )
        const breatherVarietyContourWhole: ContourWhole<PitchDuration> =
            to.ContourWhole<PitchDuration>(inaiiiVarietyContourPiece)
        const breatherSpringAltContourWhole: ContourWhole<PitchDuration> =
            to.ContourWhole<PitchDuration>(getTrueContours(
                BlockStyle.OUZD,
                BarTarget.TWENTYFOUR,
                RenderingName.SPRING,
            ))
        const doubleBreatherRestContourWhole: ContourWhole<PitchDuration> =
            to.ContourWhole<PitchDuration>(pitchDurationRest(48))

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
