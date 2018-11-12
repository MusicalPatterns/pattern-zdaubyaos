import { ContourPiece, from, Index, to } from '../../../../../src'
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
