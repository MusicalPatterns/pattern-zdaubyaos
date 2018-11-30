import { ContourPiece, to } from '@musical-patterns/pattern'
import { from, Index } from '@musical-patterns/utilities'
import { RenderingByBlockElement } from './types'

const flatlineRendering: RenderingByBlockElement =
    (blockElement: Index): ContourPiece => to.ContourPiece([
        [
            1,
            from.Index(blockElement),
        ],
    ])

export {
    flatlineRendering,
}
