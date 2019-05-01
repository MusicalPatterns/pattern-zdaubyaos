import { PitchValue, RenderingByBlockElement } from '@musical-patterns/material'
import { as, ContourPiece } from '@musical-patterns/utilities'

const flatlineRendering: RenderingByBlockElement<PitchValue> =
    (blockElement: number): ContourPiece<PitchValue> => as.ContourPiece<PitchValue>([
        [
            1,
            blockElement,
        ],
    ])

export {
    flatlineRendering,
}
