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
import { SPRINGY_SUMMER_OFFSET, SPRINGY_SUMMER_SCALAR } from './constants'

const springySummerRendering: RenderingByBlockElement<PitchDuration> =
    (blockElement: number): ContourPiece<PitchDuration> =>
        to.ContourPiece<PitchDuration>(positiveIntegers.slice(from.Index(INITIAL), blockElement)
            .map((integer: number): ContourElement<PitchDuration> => {
                if (isEven(integer)) {
                    return [ 0, 1 ]
                }

                return [
                    apply.Scalar(apply.Offset(integer, SPRINGY_SUMMER_OFFSET), SPRINGY_SUMMER_SCALAR),
                    1,
                ]
            }),
        )

export {
    springySummerRendering,
}
