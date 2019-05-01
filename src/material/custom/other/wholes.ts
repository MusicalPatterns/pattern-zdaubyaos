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
} from '@musical-patterns/utilities'
import { RenderingName } from '../../rendering'
import { BarTarget, BlockStyle } from '../../types'
import { getTrueContours } from '../true'
import { computeOtherContourPieces } from './pieces'
import { OtherContourPieces, OtherContourWholes } from './types'

const computeOtherContourWholes: () => OtherContourWholes =
    (): OtherContourWholes => {
        const contourPieces: OtherContourPieces = computeOtherContourPieces()

        const secretLongChord: ContourWhole<PitchValue> =
            as.ContourWhole<PitchValue>(contourPieces.secretLongChord)

        const totallyOutThere: ContourWhole<PitchValue> = as.ContourWhole<PitchValue>(repeat(
            slice(
                getTrueContours(BlockStyle.DJIYAI, BarTarget.FIFTEEN, RenderingName.SPRINGY_SUMMER),
                insteadOf<Ordinal, ContourPiece<PitchValue>>(INITIAL),
                as.Ordinal<ContourPiece<PitchValue>>(8),
            ),
            as.Cardinal<ContourPiece<PitchValue>>(3),
        ))

        const shiftyA: ContourWhole<PitchValue> = as.ContourWhole<PitchValue>(sequence(
            repeatCall(() => contourPieces.shiftyFifteen, as.Cardinal<Array<() => ContourPiece<PitchValue>>>(3)),
            repeatCall(() => contourPieces.shiftyTwentyfour, as.Cardinal<Array<() => ContourPiece<PitchValue>>>(4)),
            repeatCall(
                () => contourPieces.shiftyTwentyfourVariant,
                as.Cardinal<Array<() => ContourPiece<PitchValue>>>(3),
            ),
        ))

        const shiftyB: ContourWhole<PitchValue> = as.ContourWhole<PitchValue>(contourPieces.shifty)

        return {
            secretLongChord,
            shiftyA,
            shiftyB,
            totallyOutThere,
        }
    }

export {
    computeOtherContourWholes,
}
