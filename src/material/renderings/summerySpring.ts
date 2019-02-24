import { PitchDuration, RenderingByBlockElement, STANDARD_PITCH_INDEX_INDICATING_REST } from '@musical-patterns/pattern'
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
import { SUMMERY_SPRING_SCALAR, SUMMERY_SPRING_TRANSLATION } from './constants'

const summerySpringRendering: RenderingByBlockElement<PitchDuration> =
    (cell: number): ContourPiece<PitchDuration> => {
        const contour: ContourPiece<PitchDuration> = to.ContourPiece(slice(positiveIntegers, INITIAL, to.Ordinal(cell))
            .map((integer: Integer): ContourElement<PitchDuration> => to.ContourElement<PitchDuration>([
                apply.Scalar(apply.Translation(integer, SUMMERY_SPRING_TRANSLATION), SUMMERY_SPRING_SCALAR),
                1,
            ])),
        )
        const index: ContourElement<PitchDuration> = apply.Ordinal(contour, INITIAL)
        index[ from.Ordinal(INDEX_OF_PITCH_INDEX_WITHIN_CONTOUR_ELEMENT) ] = STANDARD_PITCH_INDEX_INDICATING_REST

        return contour
    }

export {
    summerySpringRendering,
}
