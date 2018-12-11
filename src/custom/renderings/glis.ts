import { ContourPiece, RenderingByBlockElement, to } from '@musical-patterns/pattern'
import { from, Index } from '@musical-patterns/utilities'

const glisRendering: RenderingByBlockElement =
    (blockElement: Index): ContourPiece => to.ContourPiece([
        [
            from.Index(blockElement),
            from.Index(blockElement),
        ],
    ])

export {
    glisRendering,
}
