import { PitchDuration, RenderingByBlockElement } from '@musical-patterns/pattern'
import {
    apply,
    ContourElement,
    ContourPiece,
    from,
    INITIAL,
    Integer,
    positiveIntegers,
    slice,
    to,
} from '@musical-patterns/utilities'
import { INDEX_OF_PITCH_INDEX_WITHIN_CONTOUR_ELEMENT } from '../../constants'
import { SINGLE_DURATION } from './constants'

const springRendering: RenderingByBlockElement<PitchDuration> =
    (cell: number): ContourPiece<PitchDuration> => {
        const integers: Integer[] = slice(positiveIntegers, INITIAL, to.Ordinal(cell))
        const contour: ContourPiece<PitchDuration> = to.ContourPiece(
            integers.map((integer: Integer): ContourElement<PitchDuration> =>
                to.ContourElement<PitchDuration>([ integer, SINGLE_DURATION ]),
            ),
        )
        const contourElement: ContourElement<PitchDuration> = apply.Ordinal(contour, INITIAL)
        contourElement[ from.Ordinal(INDEX_OF_PITCH_INDEX_WITHIN_CONTOUR_ELEMENT) ] = 0

        return contour
    }

export {
    springRendering,
}
