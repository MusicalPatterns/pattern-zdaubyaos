import { PitchDuration, RenderingByBlockElement } from '@musical-patterns/pattern'
import { ContourElement, ContourPiece, from, INITIAL, isEven, positiveIntegers, to } from '@musical-patterns/utilities'

const summerRendering: RenderingByBlockElement<PitchDuration> =
    (blockElement: number): ContourPiece<PitchDuration> =>
        to.ContourPiece<PitchDuration>(positiveIntegers.slice(from.Ordinal(INITIAL), blockElement)
            .map((integer: number): ContourElement<PitchDuration> =>
                isEven(integer) ? [ 0, 1 ] : [ integer, 1 ]))

export {
    summerRendering,
}
