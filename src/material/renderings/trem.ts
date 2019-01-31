import { RenderingByBlockElement, StandardContour } from '@musical-patterns/pattern'
import { ContourPiece, repeat, to } from '@musical-patterns/utilities'

const tremRendering: RenderingByBlockElement<StandardContour> =
    (blockElement: number): ContourPiece<StandardContour> =>
        to.ContourPiece<StandardContour>(repeat([ [ blockElement, 1 ] ], to.Count(blockElement)))

export {
    tremRendering,
}
