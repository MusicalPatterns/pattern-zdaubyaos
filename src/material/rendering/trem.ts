import { PitchDuration, RenderingByBlockElement } from '@musical-patterns/material'
import { as, ContourPiece, repeat } from '@musical-patterns/utilities'

const tremRendering: RenderingByBlockElement<PitchDuration> =
    (blockElement: number): ContourPiece<PitchDuration> =>
        as.ContourPiece<PitchDuration>(repeat(
            [ as.ContourElement<PitchDuration>([ blockElement, 1 ]) ],
            as.Cardinal<ContourPiece<PitchDuration>>(blockElement),
        ))

export {
    tremRendering,
}
