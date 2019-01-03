import { ContourElement, ContourPiece, EVEN, from, INITIAL, numbers, to } from '@musical-patterns/utilities'
import { RenderingByBlockElement } from '@musical-patterns/utilities-pattern'
import { ZdaubyaosContour } from '../../types'

const summerRendering: RenderingByBlockElement<ZdaubyaosContour> =
    (blockElement: number): ContourPiece<ZdaubyaosContour> =>
        to.ContourPiece<ZdaubyaosContour>(numbers.slice(from.Index(INITIAL), blockElement)
            .map((n: number): ContourElement<ZdaubyaosContour> =>
                n % EVEN === 0 ? [ 0, 1 ] : [ n, 1 ]))

export {
    summerRendering,
}
