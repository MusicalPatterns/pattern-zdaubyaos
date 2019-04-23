import { PitchDuration } from '@musical-patterns/material'
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

        const secretLongChord: ContourWhole<PitchDuration> =
            as.ContourWhole<PitchDuration>(contourPieces.secretLongChord)

        const totallyOutThere: ContourWhole<PitchDuration> = as.ContourWhole<PitchDuration>(repeat(
            slice(
                getTrueContours(BlockStyle.DJIYAI, BarTarget.FIFTEEN, RenderingName.SPRINGY_SUMMER),
                insteadOf<Ordinal, ContourPiece<PitchDuration>>(INITIAL),
                as.Ordinal<ContourPiece<PitchDuration>>(8),
            ),
            as.Cardinal<ContourPiece<PitchDuration>>(3),
        ))

        const shiftyA: ContourWhole<PitchDuration> = as.ContourWhole<PitchDuration>(sequence(
            repeatCall(() => contourPieces.shiftyFifteen, as.Cardinal<Array<() => ContourPiece<PitchDuration>>>(3)),
            repeatCall(() => contourPieces.shiftyTwentyfour, as.Cardinal<Array<() => ContourPiece<PitchDuration>>>(4)),
            repeatCall(
                () => contourPieces.shiftyTwentyfourVariant,
                as.Cardinal<Array<() => ContourPiece<PitchDuration>>>(3),
            ),
        ))

        const shiftyB: ContourWhole<PitchDuration> = as.ContourWhole<PitchDuration>(contourPieces.shifty)

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
