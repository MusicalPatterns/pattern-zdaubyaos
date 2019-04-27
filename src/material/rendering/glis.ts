import { PitchDuration, RenderingByBlockElement } from '@musical-patterns/material'
import { as, ContourPiece } from '@musical-patterns/utilities'

const glisRendering: RenderingByBlockElement<PitchDuration> =
    (blockElement: number): ContourPiece<PitchDuration> => as.ContourPiece<PitchDuration>([
        [
            blockElement,
            blockElement,
        ],
    ])

export {
    glisRendering,
}
