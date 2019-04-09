import {
    PitchDuration,
    RenderingByBlockElement,
    STANDARD_PITCH_INDEX_INDICATING_REST,
} from '@musical-patterns/material'
import {
    apply,
    ContourElement,
    ContourPiece,
    INITIAL,
    Integer,
    isEven,
    ONE_HALF,
    POSITIVE_INTEGERS,
    slice,
    to,
} from '@musical-patterns/utilities'
import { SPRINGY_SUMMER_TRANSLATION } from './constants'

const springySummerRendering: RenderingByBlockElement<PitchDuration> =
    (cell: number): ContourPiece<PitchDuration> =>
        to.ContourPiece<PitchDuration>(slice(POSITIVE_INTEGERS, INITIAL, to.Ordinal(cell))
            .map((integer: Integer): ContourElement<PitchDuration> => {
                if (isEven(integer)) {
                    return to.ContourElement<PitchDuration>([ STANDARD_PITCH_INDEX_INDICATING_REST, 1 ])
                }

                return to.ContourElement<PitchDuration>([
                    apply.Scalar(apply.Translation(integer, SPRINGY_SUMMER_TRANSLATION), ONE_HALF),
                    1,
                ])
            }),
        )

export {
    springySummerRendering,
}
