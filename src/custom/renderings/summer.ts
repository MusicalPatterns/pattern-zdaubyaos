import { from, Index, numbers } from '@musical-patterns/utilities'
import { ContourPiece, EVEN, INITIAL, to } from '../../../../../src'
import { ContourElement } from '../../types'
import { RenderingByBlockElement } from './types'

const summerRendering: RenderingByBlockElement =
    (blockElement: Index): ContourPiece =>
        to.ContourPiece(numbers.slice(from.Index(INITIAL), from.Index(blockElement))
            .map((n: number): ContourElement =>
                n % EVEN === 0 ? [ 0, 1 ] : [ n, 1 ]))

export {
    summerRendering,
}
