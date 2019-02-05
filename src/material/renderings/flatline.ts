import { PitchDuration, RenderingByBlockElement } from '@musical-patterns/pattern'
import { ContourPiece, to } from '@musical-patterns/utilities'

const flatlineRendering: RenderingByBlockElement<PitchDuration> =
    (blockElement: number): ContourPiece<PitchDuration> => to.ContourPiece<PitchDuration>([
        [
            1,
            blockElement,
        ],
    ])

export {
    flatlineRendering,
}
