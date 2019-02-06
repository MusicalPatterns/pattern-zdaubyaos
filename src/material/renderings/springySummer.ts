import { PitchDuration, RenderingByBlockElement } from '@musical-patterns/pattern'
import {
    apply,
    ContourElement,
    ContourPiece,
    from,
    INITIAL,
    isEven,
    positiveIntegers,
    to,
} from '@musical-patterns/utilities'
import { SPRINGY_SUMMER_SCALAR, SPRINGY_SUMMER_TRANSLATION } from './constants'

const springySummerRendering: RenderingByBlockElement<PitchDuration> =
    (blockElement: number): ContourPiece<PitchDuration> =>
        to.ContourPiece<PitchDuration>(positiveIntegers.slice(from.Ordinal(INITIAL), blockElement)
            .map((integer: number): ContourElement<PitchDuration> => {
                if (isEven(integer)) {
                    return [ 0, 1 ]
                }

                return [
                    apply.Scalar(apply.Translation(integer, SPRINGY_SUMMER_TRANSLATION), SPRINGY_SUMMER_SCALAR),
                    1,
                ]
            }),
        )

export {
    springySummerRendering,
}
