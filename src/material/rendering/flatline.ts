import { PitchDuration, RenderingByBlockElement } from '@musical-patterns/material'
import { ContourPiece, to } from '@musical-patterns/utilities'

const flatlineRendering: RenderingByBlockElement<PitchDuration> =
    (cell: number): ContourPiece<PitchDuration> => to.ContourPiece<PitchDuration>([
        [
            1,
            cell,
        ],
    ])

export {
    flatlineRendering,
}
