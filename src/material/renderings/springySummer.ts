import { PitchDuration, RenderingByBlockElement } from '@musical-patterns/pattern'
import {
    apply,
    ContourElement,
    ContourPiece,
    from,
    INITIAL,
    isEven,
    positiveIntegers,
    slice,
    to,
} from '@musical-patterns/utilities'
import { SPRINGY_SUMMER_SCALAR, SPRINGY_SUMMER_TRANSLATION } from './constants'

const springySummerRendering: RenderingByBlockElement<PitchDuration> =
    (cell: number): ContourPiece<PitchDuration> =>
        to.ContourPiece<PitchDuration>(slice(positiveIntegers, INITIAL, to.Ordinal(cell))
            .map((integer: number): ContourElement<PitchDuration> => {
                if (isEven(integer)) {
                    return to.ContourElement<PitchDuration>([ 0, 1 ])
                }

                return to.ContourElement<PitchDuration>([
                    apply.Scalar(apply.Translation(integer, SPRINGY_SUMMER_TRANSLATION), SPRINGY_SUMMER_SCALAR),
                    1,
                ])
            }),
        )

export {
    springySummerRendering,
}
