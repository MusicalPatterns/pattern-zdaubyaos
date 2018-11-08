import { Index } from '../../../../../src'
import { ContourPiece, to as zdaubyaosTo } from '../../nominal'
import { RenderingByBlockElement } from './types'

const glisRendering: RenderingByBlockElement =
    (blockElement: Index): ContourPiece => zdaubyaosTo.ContourPiece([
        [
            blockElement,
            blockElement,
        ],
    ])

export {
    glisRendering,
}
