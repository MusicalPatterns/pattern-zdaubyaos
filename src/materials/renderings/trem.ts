import { RenderingByBlockElement } from '@musical-patterns/pattern'
import { ContourPiece, repeat, to } from '@musical-patterns/utilities'
import { ZdaubyaosContour } from '../../types'

const tremRendering: RenderingByBlockElement<ZdaubyaosContour> =
    (blockElement: number): ContourPiece<ZdaubyaosContour> =>
        to.ContourPiece<ZdaubyaosContour>(repeat([ [ blockElement, 1 ] ], to.Count(blockElement)))

export {
    tremRendering,
}
