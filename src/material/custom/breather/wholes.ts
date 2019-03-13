import { PitchDuration, pitchDurationRest } from '@musical-patterns/pattern'
import { ContourWhole, repeat, to } from '@musical-patterns/utilities'
import { RenderingName } from '../../rendering'
import { BarTarget, BlockStyle } from '../../types'
import { AlmostTrueContourPieces, computeAlmostTrueContourPieces } from '../almostTrue'
import { computeOtherContourPieces, OtherContourPieces } from '../other'
import { getTrueContours } from '../true'
import { BreatherContourWholes } from './types'

const computeBreatherContourWholes: () => BreatherContourWholes =
    (): BreatherContourWholes => {
        const almostTruePieces: AlmostTrueContourPieces = computeAlmostTrueContourPieces()
        const otherPieces: OtherContourPieces = computeOtherContourPieces()

        const rest: ContourWhole<PitchDuration> = to.ContourWhole<PitchDuration>(pitchDurationRest(24))
        const spring: ContourWhole<PitchDuration> = to.ContourWhole<PitchDuration>(getTrueContours(
            BlockStyle.INAI,
            BarTarget.TWENTYFOUR,
            RenderingName.SPRING,
        ))
        const summer: ContourWhole<PitchDuration> = to.ContourWhole<PitchDuration>(getTrueContours(
            BlockStyle.INAI,
            BarTarget.TWENTYFOUR,
            RenderingName.SUMMER,
        ))
        const doubleFall: ContourWhole<PitchDuration> = to.ContourWhole<PitchDuration>(
            repeat(otherPieces.backboneTwentyfour, to.Cardinal(2)),
        )
        const variety: ContourWhole<PitchDuration> = to.ContourWhole<PitchDuration>(almostTruePieces.inaiiiVariety)
        const springAlt: ContourWhole<PitchDuration> = to.ContourWhole<PitchDuration>(getTrueContours(
            BlockStyle.OUZD,
            BarTarget.TWENTYFOUR,
            RenderingName.SPRING,
        ))
        const doubleRest: ContourWhole<PitchDuration> = to.ContourWhole<PitchDuration>(pitchDurationRest(48))

        return {
            doubleFall,
            doubleRest,
            rest,
            spring,
            springAlt,
            summer,
            variety,
        }
    }

export {
    computeBreatherContourWholes,
}
