import { ContourPiece, from, Index, repeat, to } from '../../../../../src'
import { RenderingByBlockElement } from './types'

const tremRendering: RenderingByBlockElement =
    (blockElement: Index): ContourPiece =>
        to.ContourPiece(repeat([ [ from.Index(blockElement), 1 ] ], to.Count(from.Index(blockElement))))

export {
    tremRendering,
}
