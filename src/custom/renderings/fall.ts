import { RenderingByBlockElement } from '@musical-patterns/pattern'
import { ContourPiece, to } from '@musical-patterns/utilities'
import { ZdaubyaosContour } from '../../types'

const fallRendering: RenderingByBlockElement<ZdaubyaosContour> =
    (blockElement: number): ContourPiece<ZdaubyaosContour> =>
        to.ContourPiece<ZdaubyaosContour>([
            [
                1,
                1,
            ],
            [
                blockElement - 1,
                blockElement - 1,
            ],
        ])

export {
    fallRendering,
}
