import {
    PitchDuration,
    RenderingByBlockElement,
    STANDARD_PITCH_INDEX_INDICATING_REST,
} from '@musical-patterns/material'
import {
    arraySet,
    as,
    ContourElement,
    ContourPiece,
    DOUBLE,
    INITIAL,
    Integer,
    POSITIVE_INTEGERS,
    slice,
    use,
} from '@musical-patterns/utilities'
import { INDEX_OF_PITCH_INDEX_WITHIN_CONTOUR_ELEMENT } from '../../constants'
import { SUMMERY_SPRING_TRANSLATION } from './constants'

const summerySpringRendering: RenderingByBlockElement<PitchDuration> =
    (cell: number): ContourPiece<PitchDuration> => {
        const contour: ContourPiece<PitchDuration> = as.ContourPiece(
            slice(POSITIVE_INTEGERS, INITIAL, as.Ordinal<Integer[]>(cell))
                .map((integer: Integer): ContourElement<PitchDuration> => as.ContourElement<PitchDuration>([
                    use.Multiple(use.Translation(integer, SUMMERY_SPRING_TRANSLATION), DOUBLE),
                    1,
                ])),
        )
        const initialElement: ContourElement<PitchDuration> = use.Ordinal(contour, INITIAL)
        arraySet(
            initialElement,
            INDEX_OF_PITCH_INDEX_WITHIN_CONTOUR_ELEMENT,
            as.number(STANDARD_PITCH_INDEX_INDICATING_REST),
        )

        return contour
    }

export {
    summerySpringRendering,
}
