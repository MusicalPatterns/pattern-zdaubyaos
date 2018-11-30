import { ContourPiece, to as patternTo } from '@musical-patterns/pattern'
import { from, Index, repeat, to } from '@musical-patterns/utilities'
import { RenderingByBlockElement } from './types'

const tremRendering: RenderingByBlockElement =
    (blockElement: Index): ContourPiece =>
        patternTo.ContourPiece(repeat([ [ from.Index(blockElement), 1 ] ], to.Count(from.Index(blockElement))))

export {
    tremRendering,
}
