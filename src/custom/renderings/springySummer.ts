import { applyOffset, applyScale, ContourPiece, EVEN, from, Index, INITIAL, numbers, to } from '../../../../../src'
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
                    applyScale(applyOffset(n, SPRINGY_SUMMER_OFFSET), SPRINGY_SUMMER_SCALAR),
                    1,
                ]
            }),
        )

export {
    springySummerRendering,
}
