import { RenderingByBlockElement, StandardContour } from '@musical-patterns/pattern'
import { ContourPiece, to } from '@musical-patterns/utilities'

const glisRendering: RenderingByBlockElement<StandardContour> =
    (blockElement: number): ContourPiece<StandardContour> => to.ContourPiece<StandardContour>([
        [
            blockElement,
            blockElement,
        ],
    ])

export {
    glisRendering,
}
