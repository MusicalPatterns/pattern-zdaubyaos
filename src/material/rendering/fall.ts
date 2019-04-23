import { PitchDuration, RenderingByBlockElement } from '@musical-patterns/material'
import { as, ContourPiece, negative, use } from '@musical-patterns/utilities'

const fallRendering: RenderingByBlockElement<PitchDuration> =
    (cell: number): ContourPiece<PitchDuration> =>
        as.ContourPiece<PitchDuration>([
            [
                1,
                1,
            ],
            [
                use.Cardinal(cell, as.Cardinal(negative(1))),
                use.Cardinal(cell, as.Cardinal(negative(1))),
            ],
        ])

export {
    fallRendering,
}
