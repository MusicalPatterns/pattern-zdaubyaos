import { PitchDuration, RenderingByBlockElement, STANDARD_PITCH_INDEX_INDICATING_REST } from '@musical-patterns/pattern'
import {
    apply,
    arraySet,
    ContourElement,
    ContourPiece,
    DOUBLE,
    INITIAL,
    Integer,
    positiveIntegers,
    slice,
    to,
} from '@musical-patterns/utilities'
import { INDEX_OF_PITCH_INDEX_WITHIN_CONTOUR_ELEMENT } from '../../constants'
import { SUMMERY_SPRING_TRANSLATION } from './constants'

const summerySpringRendering: RenderingByBlockElement<PitchDuration> =
    (cell: number): ContourPiece<PitchDuration> => {
        const contour: ContourPiece<PitchDuration> = to.ContourPiece(slice(positiveIntegers, INITIAL, to.Ordinal(cell))
            .map((integer: Integer): ContourElement<PitchDuration> => to.ContourElement<PitchDuration>([
                apply.Scalar(apply.Translation(integer, SUMMERY_SPRING_TRANSLATION), DOUBLE),
                1,
            ])),
        )
        const initialElement: ContourElement<PitchDuration> = apply.Ordinal(contour, INITIAL)
        arraySet(initialElement, INDEX_OF_PITCH_INDEX_WITHIN_CONTOUR_ELEMENT, STANDARD_PITCH_INDEX_INDICATING_REST)

        return contour
    }

export {
    summerySpringRendering,
}
