import { ContourPiece, to } from '@musical-patterns/utilities'
import { RenderingByBlockElement } from '@musical-patterns/utilities-pattern'
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
