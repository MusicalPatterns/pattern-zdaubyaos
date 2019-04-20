import {
    PitchDuration,
    RenderingByBlockElement,
    STANDARD_PITCH_INDEX_INDICATING_REST,
} from '@musical-patterns/material'
import {
    as,
    ContourElement,
    ContourPiece,
    INITIAL,
    Integer,
    notAs,
    POSITIVE_INTEGERS,
    Scalar,
    slice,
    use,
} from '@musical-patterns/utilities'
import { INDEX_OF_PITCH_INDEX_WITHIN_CONTOUR_ELEMENT } from '../../constants'
import { SINGLE_DURATION } from './constants'

const springRendering: RenderingByBlockElement<PitchDuration> =
    (cell: number): ContourPiece<PitchDuration> => {
        const integers: Integer[] = slice(POSITIVE_INTEGERS, INITIAL, as.Ordinal(cell))
        const contour: ContourPiece<PitchDuration> = as.ContourPiece(
            integers.map((integer: Integer): ContourElement<PitchDuration> =>
                as.ContourElement<PitchDuration>([ integer, SINGLE_DURATION ]),
            ),
        )
        const contourElement: ContourElement<PitchDuration> = use.Ordinal(contour, INITIAL)
        contourElement[ notAs.Ordinal(INDEX_OF_PITCH_INDEX_WITHIN_CONTOUR_ELEMENT) ] =
            notAs.Ordinal<Scalar>(STANDARD_PITCH_INDEX_INDICATING_REST)

        return contour
    }

export {
    springRendering,
}
