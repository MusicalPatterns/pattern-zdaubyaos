import { RenderingByBlockElement, StandardContour } from '@musical-patterns/pattern'
import { ContourPiece, to } from '@musical-patterns/utilities'

const fallRendering: RenderingByBlockElement<StandardContour> =
    (blockElement: number): ContourPiece<StandardContour> =>
        to.ContourPiece<StandardContour>([
            [
                1,
                1,
            ],
            [
                blockElement - 1,
                blockElement - 1,
            ],
        ])

export {
    fallRendering,
}
