import { from, Index } from '@musical-patterns/utilities'
import { ContourPiece, to } from '../../../../../nominal'
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
