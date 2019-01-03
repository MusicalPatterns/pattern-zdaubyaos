import { ContourPiece, repeat, to } from '@musical-patterns/utilities'
import { RenderingByBlockElement } from '@musical-patterns/utilities-pattern'
import { ZdaubyaosContour } from '../../types'

const tremRendering: RenderingByBlockElement<ZdaubyaosContour> =
    (blockElement: number): ContourPiece<ZdaubyaosContour> =>
        to.ContourPiece<ZdaubyaosContour>(repeat([ [ blockElement, 1 ] ], to.Count(blockElement)))

export {
    tremRendering,
}
