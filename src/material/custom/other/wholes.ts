import { PitchValue } from '@musical-patterns/material'
import {
    as,
    ContourPiece,
    ContourWhole,
    INITIAL,
    insteadOf,
    Ordinal,
    repeat,
    repeatCall,
    sequence,
    slice,
    Thunk,
} from '@musical-patterns/utilities'
import { RenderingName } from '../../rendering'
import { BarTarget, BlockStyle } from '../../types'
import { getTrueContours } from '../true'
import { thunkOtherContourPieces } from './pieces'
import { OtherContourPieces, OtherContourWholes } from './types'

const thunkOtherContourWholes: Thunk<OtherContourWholes> =
    (): OtherContourWholes => {
        const contourPieces: OtherContourPieces = thunkOtherContourPieces()

        const secretLongChord: ContourWhole<PitchValue> =
            as.ContourWhole<PitchValue>(contourPieces.secretLongChord)

        const totallyOutThereIntro: ContourWhole<PitchValue> = as.ContourWhole<PitchValue>(repeat(
            slice(
                getTrueContours(BlockStyle.DJIYAI, BarTarget.FIFTEEN, RenderingName.SPRINGY_SUMMER),
                insteadOf<Ordinal, ContourPiece<PitchValue>>(INITIAL),
                as.Ordinal<ContourPiece<PitchValue>>(8),
            ),
            as.Cardinal<ContourPiece<PitchValue>>(3),
        ))

        const shiftyA: ContourWhole<PitchValue> = as.ContourWhole<PitchValue>(sequence(
            repeatCall(
                (): ContourPiece<PitchValue> => contourPieces.shiftyFifteen,
                as.Cardinal<Array<Thunk<ContourPiece<PitchValue>>>>(3),
            ),
            repeatCall(
                (): ContourPiece<PitchValue> => contourPieces.shiftyTwentyfour,
                as.Cardinal<Array<Thunk<ContourPiece<PitchValue>>>>(4),
            ),
            repeatCall(
                (): ContourPiece<PitchValue> => contourPieces.shiftyTwentyfourVariant,
                as.Cardinal<Array<Thunk<ContourPiece<PitchValue>>>>(3),
            ),
        ))

        const shiftyB: ContourWhole<PitchValue> = as.ContourWhole<PitchValue>(contourPieces.shifty)

        return {
            secretLongChord,
            shiftyA,
            shiftyB,
            totallyOutThereIntro,
        }
    }

export {
    thunkOtherContourWholes,
}
