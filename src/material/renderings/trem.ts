import { PitchDuration, RenderingByBlockElement } from '@musical-patterns/pattern'
import { ContourPiece, repeat, to } from '@musical-patterns/utilities'

const tremRendering: RenderingByBlockElement<PitchDuration> =
    (blockElement: number): ContourPiece<PitchDuration> =>
        to.ContourPiece<PitchDuration>(repeat([ [ blockElement, 1 ] ], to.Count(blockElement)))

export {
    tremRendering,
}
