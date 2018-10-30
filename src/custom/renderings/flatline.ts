import { Index, to } from '../../../../../src'
import { to as zdaubyaosTo } from '../../nominal'
import { ContourPiece } from '../../types'
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
