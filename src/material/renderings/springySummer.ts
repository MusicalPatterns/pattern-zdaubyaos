import { RenderingByBlockElement } from '@musical-patterns/pattern'
import { apply, ContourElement, ContourPiece, EVEN, from, INITIAL, numbers, to } from '@musical-patterns/utilities'
import { ZdaubyaosContour } from '../../types'
import { SPRINGY_SUMMER_OFFSET, SPRINGY_SUMMER_SCALAR } from './constants'

const springySummerRendering: RenderingByBlockElement<ZdaubyaosContour> =
    (blockElement: number): ContourPiece<ZdaubyaosContour> =>
        to.ContourPiece<ZdaubyaosContour>(numbers.slice(from.Index(INITIAL), blockElement)
            .map((n: number): ContourElement<ZdaubyaosContour> => {
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
