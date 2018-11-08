import { EVEN, from, Index, INITIAL, numbers, to } from '../../../../../src'
import { ContourPiece, to as zdaubyaosTo } from '../../nominal'
import { ContourElement } from '../../types'
import { RenderingByBlockElement } from './types'

const summerRendering: RenderingByBlockElement =
    (blockElement: Index): ContourPiece =>
        zdaubyaosTo.ContourPiece(numbers.slice(from.Index(INITIAL), from.Index(blockElement))
            .map((n: number): ContourElement =>
                n % EVEN === 0 ? [ to.Index(0), to.Index(1) ] : [ to.Index(n), to.Index(1) ]))

export {
    summerRendering,
}
