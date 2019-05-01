import { PitchValue, RenderingByBlockElement } from '@musical-patterns/material'
import { as, ContourPiece, negative, use } from '@musical-patterns/utilities'

const fallRendering: RenderingByBlockElement<PitchValue> =
    (blockElement: number): ContourPiece<PitchValue> =>
        as.ContourPiece<PitchValue>([
            [
                1,
                1,
            ],
            [
                use.Cardinal(blockElement, as.Cardinal(negative(1))),
                use.Cardinal(blockElement, as.Cardinal(negative(1))),
            ],
        ])

export {
    fallRendering,
}
