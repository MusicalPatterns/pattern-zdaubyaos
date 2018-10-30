import { Index } from '../../../../../src'
import { to as zdaubyaosTo } from '../../nominal'
import { ContourPiece } from '../../types'
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
