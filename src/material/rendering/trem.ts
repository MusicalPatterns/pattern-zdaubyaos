import { PitchValue, RenderingByBlockElement } from '@musical-patterns/material'
import { as, ContourPiece, repeat } from '@musical-patterns/utilities'

const tremRendering: RenderingByBlockElement<PitchValue> =
    (blockElement: number): ContourPiece<PitchValue> =>
        as.ContourPiece<PitchValue>(repeat(
            [ as.ContourElement<PitchValue>([ blockElement, 1 ]) ],
            as.Cardinal<ContourPiece<PitchValue>>(blockElement),
        ))

export {
    tremRendering,
}
