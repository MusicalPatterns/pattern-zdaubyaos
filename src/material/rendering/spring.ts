import {
    PitchDuration,
    RenderingByBlockElement,
    STANDARD_PITCH_INDEX_INDICATING_REST,
} from '@musical-patterns/material'
import {
    as,
    ContourElement,
    ContourPiece,
    INCREMENT,
    INITIAL,
    Integer,
    ONE,
    range,
    use,
} from '@musical-patterns/utilities'
import { INDEX_OF_PITCH_INDEX_WITHIN_CONTOUR_ELEMENT } from '../../constants'
import { SINGLE_DURATION } from './constants'

const springRendering: RenderingByBlockElement<PitchDuration> =
    (blockElement: number): ContourPiece<PitchDuration> => {
        const integers: Integer[] = range(ONE, use.Cardinal(as.Integer(blockElement), INCREMENT))
        const contour: ContourPiece<PitchDuration> = as.ContourPiece(
            integers.map((integer: Integer): ContourElement<PitchDuration> =>
                as.ContourElement<PitchDuration>([ integer, SINGLE_DURATION ]),
            ),
        )
        const contourElement: ContourElement<PitchDuration> = use.Ordinal(contour, INITIAL)
        contourElement[ as.number(INDEX_OF_PITCH_INDEX_WITHIN_CONTOUR_ELEMENT) ] =
            as.number(STANDARD_PITCH_INDEX_INDICATING_REST)

        return contour
    }

export {
    springRendering,
}
