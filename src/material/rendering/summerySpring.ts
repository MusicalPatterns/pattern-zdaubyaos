import {
    PitchDuration,
    RenderingByBlockElement,
    STANDARD_PITCH_INDEX_INDICATING_REST,
} from '@musical-patterns/material'
import {
    apply,
    arraySet,
    ContourElement,
    ContourPiece,
    DOUBLE,
    from,
    INITIAL,
    Integer,
    POSITIVE_INTEGERS,
    Scalar,
    slice,
    to,
} from '@musical-patterns/utilities'
import { INDEX_OF_PITCH_INDEX_WITHIN_CONTOUR_ELEMENT } from '../../constants'
import { SUMMERY_SPRING_TRANSLATION } from './constants'

const summerySpringRendering: RenderingByBlockElement<PitchDuration> =
    (cell: number): ContourPiece<PitchDuration> => {
        const contour: ContourPiece<PitchDuration> = to.ContourPiece(slice(POSITIVE_INTEGERS, INITIAL, to.Ordinal(cell))
            .map((integer: Integer): ContourElement<PitchDuration> => to.ContourElement<PitchDuration>([
                apply.Multiple(apply.Translation(integer, SUMMERY_SPRING_TRANSLATION), DOUBLE),
                1,
            ])),
        )
        const initialElement: ContourElement<PitchDuration> = apply.Ordinal(contour, INITIAL)
        arraySet(
            initialElement,
            INDEX_OF_PITCH_INDEX_WITHIN_CONTOUR_ELEMENT,
            from.Ordinal<Scalar>(STANDARD_PITCH_INDEX_INDICATING_REST),
        )

        return contour
    }

export {
    summerySpringRendering,
}
