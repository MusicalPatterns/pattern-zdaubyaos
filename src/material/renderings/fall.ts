import { PitchDuration, RenderingByBlockElement } from '@musical-patterns/pattern'
import { ContourPiece, to } from '@musical-patterns/utilities'

const fallRendering: RenderingByBlockElement<PitchDuration> =
    (blockElement: number): ContourPiece<PitchDuration> =>
        to.ContourPiece<PitchDuration>([
            [
                1,
                1,
            ],
            [
                blockElement - 1,
                blockElement - 1,
            ],
        ])

export {
    fallRendering,
}
