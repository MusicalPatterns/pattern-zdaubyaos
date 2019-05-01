import { PitchValue, RenderingByBlockElement } from '@musical-patterns/material'
import { as, ContourPiece } from '@musical-patterns/utilities'

const glisRendering: RenderingByBlockElement<PitchValue> =
    (blockElement: number): ContourPiece<PitchValue> => as.ContourPiece<PitchValue>([
        [
            blockElement,
            blockElement,
        ],
    ])

export {
    glisRendering,
}
