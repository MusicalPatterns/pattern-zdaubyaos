import { ContourPiece, RenderingByBlockElement, to } from '@musical-patterns/pattern'
import { EVEN, from, Index, INITIAL, numbers } from '@musical-patterns/utilities'
import { ContourElement } from '../../types'

const summerRendering: RenderingByBlockElement =
    (blockElement: Index): ContourPiece =>
        to.ContourPiece(numbers.slice(from.Index(INITIAL), from.Index(blockElement))
            .map((n: number): ContourElement =>
                n % EVEN === 0 ? [ 0, 1 ] : [ n, 1 ]))

export {
    summerRendering,
}
