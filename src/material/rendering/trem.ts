import { PitchDuration, RenderingByBlockElement } from '@musical-patterns/material'
import { ContourPiece, repeat, to } from '@musical-patterns/utilities'

const tremRendering: RenderingByBlockElement<PitchDuration> =
    (cell: number): ContourPiece<PitchDuration> =>
        to.ContourPiece<PitchDuration>(repeat([ to.ContourElement<PitchDuration>([ cell, 1 ]) ], to.Cardinal(cell)))

export {
    tremRendering,
}
