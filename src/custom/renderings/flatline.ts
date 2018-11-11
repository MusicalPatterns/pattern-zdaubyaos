import { ContourPiece, Index, to } from '../../../../../src'
import { RenderingByBlockElement } from './types'

const flatlineRendering: RenderingByBlockElement =
    (blockElement: Index): ContourPiece => to.ContourPiece([
        [
            to.Index(1),
            blockElement,
        ],
    ])

export {
    flatlineRendering,
}
