import { RenderingByBlockElement, StandardContour } from '@musical-patterns/pattern'
import { ContourElement, ContourPiece, from, INITIAL, isEven, positiveIntegers, to } from '@musical-patterns/utilities'

const summerRendering: RenderingByBlockElement<StandardContour> =
    (blockElement: number): ContourPiece<StandardContour> =>
        to.ContourPiece<StandardContour>(positiveIntegers.slice(from.Index(INITIAL), blockElement)
            .map((integer: number): ContourElement<StandardContour> =>
                isEven(integer) ? [ 0, 1 ] : [ integer, 1 ]))

export {
    summerRendering,
}
