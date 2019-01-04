import { RenderingByBlockElement } from '@musical-patterns/pattern'
import { ContourPiece, to } from '@musical-patterns/utilities'
import { ZdaubyaosContour } from '../../types'

const glisRendering: RenderingByBlockElement<ZdaubyaosContour> =
    (blockElement: number): ContourPiece<ZdaubyaosContour> => to.ContourPiece<ZdaubyaosContour>([
        [
            blockElement,
            blockElement,
        ],
    ])

export {
    glisRendering,
}
