import { PitchDuration, RenderingByBlockElement } from '@musical-patterns/pattern'
import { apply, ContourPiece, negative, to } from '@musical-patterns/utilities'

const fallRendering: RenderingByBlockElement<PitchDuration> =
    (cell: number): ContourPiece<PitchDuration> =>
        to.ContourPiece<PitchDuration>([
            [
                1,
                1,
            ],
            [
                apply.Translation(cell, to.Translation(negative(1))),
                apply.Translation(cell, to.Translation(negative(1))),
            ],
        ])

export {
    fallRendering,
}
