import { PitchDuration, RenderingByBlockElement } from '@musical-patterns/pattern'
import { ContourPiece, to } from '@musical-patterns/utilities'

const glisRendering: RenderingByBlockElement<PitchDuration> =
    (blockElement: number): ContourPiece<PitchDuration> => to.ContourPiece<PitchDuration>([
        [
            blockElement,
            blockElement,
        ],
    ])

export {
    glisRendering,
}
