import { PitchValue, RenderingByBlockElement, STANDARD_PITCH_INDEX_INDICATING_REST } from '@musical-patterns/material'
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

const springRendering: RenderingByBlockElement<PitchValue> =
    (blockElement: number): ContourPiece<PitchValue> => {
        const integers: Integer[] = range(ONE, use.Cardinal(as.Integer(blockElement), INCREMENT))
        const contour: ContourPiece<PitchValue> = as.ContourPiece<PitchValue>(
            integers.map((integer: Integer): ContourElement<PitchValue> =>
                as.ContourElement<PitchValue>([ integer, SINGLE_DURATION ]),
            ),
        )
        const contourElement: ContourElement<PitchValue> = use.Ordinal(contour, INITIAL)
        contourElement[ as.number(INDEX_OF_PITCH_INDEX_WITHIN_CONTOUR_ELEMENT) ] =
            as.number(STANDARD_PITCH_INDEX_INDICATING_REST)

        return contour
    }

export {
    springRendering,
}
