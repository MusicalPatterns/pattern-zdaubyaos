import { ContourPiece, to } from '@musical-patterns/utilities'
import { RenderingByBlockElement } from '@musical-patterns/utilities-pattern'
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
