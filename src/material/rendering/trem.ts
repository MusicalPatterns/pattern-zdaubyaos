import { PitchDuration, RenderingByBlockElement } from '@musical-patterns/material'
import { as, ContourPiece, repeat } from '@musical-patterns/utilities'

const tremRendering: RenderingByBlockElement<PitchDuration> =
    (cell: number): ContourPiece<PitchDuration> =>
        as.ContourPiece<PitchDuration>(repeat([ as.ContourElement<PitchDuration>([ cell, 1 ]) ], as.Cardinal(cell)))

export {
    tremRendering,
}
