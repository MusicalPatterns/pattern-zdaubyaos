import {
    PitchDuration,
    RenderingByBlockElement,
    STANDARD_PITCH_INDEX_INDICATING_REST,
} from '@musical-patterns/material'
import {
    apply,
    ContourElement,
    ContourPiece,
    from,
    INITIAL,
    Integer,
    POSITIVE_INTEGERS,
    slice,
    to,
} from '@musical-patterns/utilities'
import { INDEX_OF_PITCH_INDEX_WITHIN_CONTOUR_ELEMENT } from '../../constants'
import { SINGLE_DURATION } from './constants'

const springRendering: RenderingByBlockElement<PitchDuration> =
    (cell: number): ContourPiece<PitchDuration> => {
        const integers: Integer[] = slice(POSITIVE_INTEGERS, INITIAL, to.Ordinal(cell))
        const contour: ContourPiece<PitchDuration> = to.ContourPiece(
            integers.map((integer: Integer): ContourElement<PitchDuration> =>
                to.ContourElement<PitchDuration>([ integer, SINGLE_DURATION ]),
            ),
        )
        const contourElement: ContourElement<PitchDuration> = apply.Ordinal(contour, INITIAL)
        contourElement[ from.Ordinal(INDEX_OF_PITCH_INDEX_WITHIN_CONTOUR_ELEMENT) ] =
            STANDARD_PITCH_INDEX_INDICATING_REST

        return contour
    }

export {
    springRendering,
}
