import { ContourPiece, RenderingByBlockElement, to as patternTo } from '@musical-patterns/pattern'
import { from, Index, repeat, to } from '@musical-patterns/utilities'

const tremRendering: RenderingByBlockElement =
    (blockElement: Index): ContourPiece =>
        patternTo.ContourPiece(repeat([ [ from.Index(blockElement), 1 ] ], to.Count(from.Index(blockElement))))

export {
    tremRendering,
}
