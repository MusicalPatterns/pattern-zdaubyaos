import { applyOffset, applyScale, EVEN, from, Index, INITIAL, numbers, to } from '../../../../../src'
import { ContourPiece, to as zdaubyaosTo } from '../../nominal'
import { ContourElement } from '../../types'
import { SPRINGY_SUMMER_OFFSET, SPRINGY_SUMMER_SCALAR } from './constants'
import { RenderingByBlockElement } from './types'

const springySummerRendering: RenderingByBlockElement =
    (blockElement: Index): ContourPiece =>
        zdaubyaosTo.ContourPiece(numbers.slice(from.Index(INITIAL), from.Index(blockElement))
            .map((n: number): ContourElement => {
                if (n % EVEN === 0) {
                    return [ to.Index(0), to.Index(1) ]
                }

                return [
                    to.Index(applyScale(applyOffset(n, SPRINGY_SUMMER_OFFSET), SPRINGY_SUMMER_SCALAR)),
                    to.Index(1),
                ]
            }),
        )

export {
    springySummerRendering,
}
