import { RenderingByBlockElement } from '@musical-patterns/pattern'
import { ContourPiece, to } from '@musical-patterns/utilities'
import { ZdaubyaosContour } from '../../types'

const flatlineRendering: RenderingByBlockElement<ZdaubyaosContour> =
    (blockElement: number): ContourPiece<ZdaubyaosContour> => to.ContourPiece<ZdaubyaosContour>([
        [
            1,
            blockElement,
        ],
    ])

export {
    flatlineRendering,
}
