import { apply, from, Index, numbers } from '@musical-patterns/shared'
import { EVEN, INITIAL } from '../../../../../constants'
import { ContourPiece, to } from '../../../../../nominal'
import { ContourElement } from '../../types'
import { SPRINGY_SUMMER_OFFSET, SPRINGY_SUMMER_SCALAR } from './constants'
import { RenderingByBlockElement } from './types'

const springySummerRendering: RenderingByBlockElement =
    (blockElement: Index): ContourPiece =>
        to.ContourPiece(numbers.slice(from.Index(INITIAL), from.Index(blockElement))
            .map((n: number): ContourElement => {
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
