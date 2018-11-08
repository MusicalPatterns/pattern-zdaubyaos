import { Index, to } from '../../../../../src'
import { ContourPiece, to as zdaubyaosTo } from '../../nominal'
import { RenderingByBlockElement } from './types'

const flatlineRendering: RenderingByBlockElement =
    (blockElement: Index): ContourPiece => zdaubyaosTo.ContourPiece([
        [
            to.Index(1),
            blockElement,
        ],
    ])

export {
    flatlineRendering,
}
