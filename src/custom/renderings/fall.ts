import { ContourPiece, RenderingByBlockElement, to } from '@musical-patterns/pattern'
import { from, Index } from '@musical-patterns/utilities'

const fallRendering: RenderingByBlockElement =
    (blockElement: Index): ContourPiece =>
        to.ContourPiece([ [ 1, 1 ], [ from.Index(blockElement) - 1, from.Index(blockElement) - 1 ] ])

export {
    fallRendering,
}
