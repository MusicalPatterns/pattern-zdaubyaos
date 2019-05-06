import { PitchValue, RenderingByBlockElement, STANDARD_PITCH_INDEX_INDICATING_REST } from '@musical-patterns/material'
import {
    arraySet,
    as,
    ContourElement,
    ContourPiece,
    DOUBLE,
    INCREMENT,
    INITIAL,
    Integer,
    ONE,
    range,
    use,
} from '@musical-patterns/utilities'
import { INDEX_OF_PITCH_INDEX_WITHIN_CONTOUR_ELEMENT } from '../../constants'
import { SUMMERY_SPRING_TRANSLATION } from './constants'

const summerySpringRendering: RenderingByBlockElement<PitchValue> =
    (blockElement: number): ContourPiece<PitchValue> => {
        const contour: ContourPiece<PitchValue> = as.ContourPiece<PitchValue>(
            range(ONE, use.Cardinal(as.Integer(blockElement), INCREMENT))
                .map((integer: Integer): ContourElement<PitchValue> => as.ContourElement<PitchValue>([
                    use.Multiple(use.Translation(integer, SUMMERY_SPRING_TRANSLATION), DOUBLE),
                    1,
                ])),
        )
        const initialElement: ContourElement<PitchValue> = use.Ordinal(contour, INITIAL)
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
