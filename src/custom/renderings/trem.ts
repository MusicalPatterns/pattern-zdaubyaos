import { from, Index, repeat, to } from '@musical-patterns/utilities'
import { ContourPiece, to as labTo } from '../../../../../nominal'
import { RenderingByBlockElement } from './types'

const tremRendering: RenderingByBlockElement =
    (blockElement: Index): ContourPiece =>
        labTo.ContourPiece(repeat([ [ from.Index(blockElement), 1 ] ], to.Count(from.Index(blockElement))))

export {
    tremRendering,
}
