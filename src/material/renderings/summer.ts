import { RenderingByBlockElement, StandardContour } from '@musical-patterns/pattern'
import { ContourElement, ContourPiece, EVEN, from, INITIAL, positiveIntegers, to } from '@musical-patterns/utilities'

const summerRendering: RenderingByBlockElement<StandardContour> =
    (blockElement: number): ContourPiece<StandardContour> =>
        to.ContourPiece<StandardContour>(positiveIntegers.slice(from.Index(INITIAL), blockElement)
            .map((n: number): ContourElement<StandardContour> =>
                n % EVEN === 0 ? [ 0, 1 ] : [ n, 1 ]))

export {
    summerRendering,
}
