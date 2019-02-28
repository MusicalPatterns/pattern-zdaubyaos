import { PitchDuration } from '@musical-patterns/pattern'
import { ContourWhole, INITIAL, repeat, repeatCall, sequence, slice, to } from '@musical-patterns/utilities'
import { RenderingName } from '../../renderings'
import { BarTarget, BlockStyle } from '../../types'
import { getTrueContours } from '../true'
import { buildOtherContourPieces } from './pieces'
import { OtherContourPieces, OtherContourWholes } from './types'

const buildOtherContourWholes: () => OtherContourWholes =
    (): OtherContourWholes => {
        const contourPieces: OtherContourPieces = buildOtherContourPieces()

        const secretLongChord: ContourWhole<PitchDuration> =
            to.ContourWhole<PitchDuration>(contourPieces.secretLongChord)

        const totallyOutThere: ContourWhole<PitchDuration> = to.ContourWhole<PitchDuration>(repeat(
            slice(
                getTrueContours(BlockStyle.DJIYAI, BarTarget.FIFTEEN, RenderingName.SPRINGY_SUMMER),
                INITIAL,
                to.Ordinal(8),
            ),
            to.Cardinal(3),
        ))

        const shiftyA: ContourWhole<PitchDuration> = to.ContourWhole<PitchDuration>(sequence([
            repeatCall(() => contourPieces.shiftyFifteen, to.Cardinal(3)),
            repeatCall(() => contourPieces.shiftyTwentyfour, to.Cardinal(4)),
            repeatCall(() => contourPieces.shiftyTwentyfourVariant, to.Cardinal(3)),
        ]))

        const shiftyB: ContourWhole<PitchDuration> = to.ContourWhole<PitchDuration>(contourPieces.shifty)

        return {
            secretLongChord,
            shiftyA,
            shiftyB,
            totallyOutThere,
        }
    }

export {
    buildOtherContourWholes,
}
