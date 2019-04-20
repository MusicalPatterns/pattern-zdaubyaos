import { PitchDuration, pitchDurationRest } from '@musical-patterns/material'
import { as, ContourWhole, repeat } from '@musical-patterns/utilities'
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

        const rest: ContourWhole<PitchDuration> = as.ContourWhole<PitchDuration>(pitchDurationRest(24))
        const spring: ContourWhole<PitchDuration> = as.ContourWhole<PitchDuration>(getTrueContours(
            BlockStyle.INAI,
            BarTarget.TWENTYFOUR,
            RenderingName.SPRING,
        ))
        const summer: ContourWhole<PitchDuration> = as.ContourWhole<PitchDuration>(getTrueContours(
            BlockStyle.INAI,
            BarTarget.TWENTYFOUR,
            RenderingName.SUMMER,
        ))
        const doubleFall: ContourWhole<PitchDuration> = as.ContourWhole<PitchDuration>(
            repeat(otherPieces.backboneTwentyfour, as.Cardinal(2)),
        )
        const variety: ContourWhole<PitchDuration> = as.ContourWhole<PitchDuration>(almostTruePieces.inaiiiVariety)
        const springAlt: ContourWhole<PitchDuration> = as.ContourWhole<PitchDuration>(getTrueContours(
            BlockStyle.OUZD,
            BarTarget.TWENTYFOUR,
            RenderingName.SPRING,
        ))
        const doubleRest: ContourWhole<PitchDuration> = as.ContourWhole<PitchDuration>(pitchDurationRest(48))

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
