import { PitchValue, pitchValueRest } from '@musical-patterns/material'
import { as, ContourPiece, ContourWhole, repeat, Thunk } from '@musical-patterns/utilities'
import { RenderingName } from '../../rendering'
import { BarTarget, BlockStyle } from '../../types'
import { AlmostTrueContourPieces, thunkAlmostTrueContourPieces } from '../almostTrue'
import { OtherContourPieces, thunkOtherContourPieces } from '../other'
import { getTrueContours } from '../true'
import { BreatherContourWholes } from './types'

const thunkBreatherContourWholes: Thunk<BreatherContourWholes> =
    (): BreatherContourWholes => {
        const almostTruePieces: AlmostTrueContourPieces = thunkAlmostTrueContourPieces()
        const otherPieces: OtherContourPieces = thunkOtherContourPieces()

        const rest: ContourWhole<PitchValue> = as.ContourWhole<PitchValue>(pitchValueRest(24))
        const spring: ContourWhole<PitchValue> = as.ContourWhole<PitchValue>(getTrueContours(
            BlockStyle.INAI,
            BarTarget.TWENTYFOUR,
            RenderingName.SPRING,
        ))
        const summer: ContourWhole<PitchValue> = as.ContourWhole<PitchValue>(getTrueContours(
            BlockStyle.INAI,
            BarTarget.TWENTYFOUR,
            RenderingName.SUMMER,
        ))
        const doubleFall: ContourWhole<PitchValue> = as.ContourWhole<PitchValue>(
            repeat(otherPieces.backboneTwentyfour, as.Cardinal<ContourPiece<PitchValue>>(2)),
        )
        const variety: ContourWhole<PitchValue> = as.ContourWhole<PitchValue>(almostTruePieces.inaiiiVariety)
        const springAlt: ContourWhole<PitchValue> = as.ContourWhole<PitchValue>(getTrueContours(
            BlockStyle.OUZD,
            BarTarget.TWENTYFOUR,
            RenderingName.SPRING,
        ))
        const doubleRest: ContourWhole<PitchValue> = as.ContourWhole<PitchValue>(pitchValueRest(48))

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
    thunkBreatherContourWholes,
}
