import { PitchDuration, RenderingByBlockElement } from '@musical-patterns/material'
import { as, ContourPiece, negative, use } from '@musical-patterns/utilities'

const fallRendering: RenderingByBlockElement<PitchDuration> =
    (blockElement: number): ContourPiece<PitchDuration> =>
        as.ContourPiece<PitchDuration>([
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
