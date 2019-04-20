import { PitchDuration, RenderingByBlockElement } from '@musical-patterns/material'
import { as, ContourPiece } from '@musical-patterns/utilities'

const glisRendering: RenderingByBlockElement<PitchDuration> =
    (cell: number): ContourPiece<PitchDuration> => as.ContourPiece<PitchDuration>([
        [
            cell,
            cell,
        ],
    ])

export {
    glisRendering,
}
