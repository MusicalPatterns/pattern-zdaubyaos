import { RenderingByBlockElement, StandardContour } from '@musical-patterns/pattern'
import { ContourPiece, to } from '@musical-patterns/utilities'

const flatlineRendering: RenderingByBlockElement<StandardContour> =
    (blockElement: number): ContourPiece<StandardContour> => to.ContourPiece<StandardContour>([
        [
            1,
            blockElement,
        ],
    ])

export {
    flatlineRendering,
}
