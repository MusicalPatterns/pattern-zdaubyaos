import { from, Index, repeat, to } from '../../../../../src'
import { to as zdaubyaosTo } from '../../nominal'
import { ContourPiece } from '../../types'
import { RenderingByBlockElement } from './types'

const tremRendering: RenderingByBlockElement =
    (blockElement: Index): ContourPiece =>
        zdaubyaosTo.ContourPiece(repeat([ [ from.Index(blockElement), 1 ] ], to.Count(from.Index(blockElement))))

export {
    tremRendering,
}
