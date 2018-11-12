import { ContourPiece, from, Index, to } from '../../../../../src'
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
