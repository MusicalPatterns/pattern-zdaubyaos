import { ContourPiece, Index, to } from '../../../../../src'
import { RenderingByBlockElement } from './types'

const glisRendering: RenderingByBlockElement =
    (blockElement: Index): ContourPiece => to.ContourPiece([
        [
            blockElement,
            blockElement,
        ],
    ])

export {
    glisRendering,
}
