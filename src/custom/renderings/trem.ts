import { from, Index, to } from '@musical-patterns/utilities'
import { ContourPiece, repeat, to as labTo } from '../../../../../src'
import { RenderingByBlockElement } from './types'

const tremRendering: RenderingByBlockElement =
    (blockElement: Index): ContourPiece =>
        labTo.ContourPiece(repeat([ [ from.Index(blockElement), 1 ] ], to.Count(from.Index(blockElement))))

export {
    tremRendering,
}
