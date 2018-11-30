import { ContourPiece, to } from '@musical-patterns/pattern'
import { from, Index } from '@musical-patterns/utilities'
import { RenderingByBlockElement } from './types'

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
