import { ContourPiece, to } from '@musical-patterns/utilities'
import { RenderingByBlockElement } from '@musical-patterns/utilities-pattern'
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
