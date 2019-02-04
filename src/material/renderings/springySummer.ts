import { RenderingByBlockElement, StandardContour } from '@musical-patterns/pattern'
import {
    apply,
    ContourElement,
    ContourPiece,
    EVEN,
    from,
    INITIAL,
    positiveIntegers,
    to,
} from '@musical-patterns/utilities'
import { SPRINGY_SUMMER_OFFSET, SPRINGY_SUMMER_SCALAR } from './constants'

const springySummerRendering: RenderingByBlockElement<StandardContour> =
    (blockElement: number): ContourPiece<StandardContour> =>
        to.ContourPiece<StandardContour>(positiveIntegers.slice(from.Index(INITIAL), blockElement)
            .map((n: number): ContourElement<StandardContour> => {
                if (n % EVEN === 0) {
                    return [ 0, 1 ]
                }

                return [
                    apply.Scalar(apply.Offset(n, SPRINGY_SUMMER_OFFSET), SPRINGY_SUMMER_SCALAR),
                    1,
                ]
            }),
        )

export {
    springySummerRendering,
}
