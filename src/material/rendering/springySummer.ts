import { PitchValue, RenderingByBlockElement, STANDARD_PITCH_INDEX_INDICATING_REST } from '@musical-patterns/material'
import {
    as,
    ContourElement,
    ContourPiece,
    INCREMENT,
    Integer,
    isEven,
    ONE,
    ONE_HALF,
    range,
    use,
} from '@musical-patterns/utilities'
import { SPRINGY_SUMMER_TRANSLATION } from './constants'

const springySummerRendering: RenderingByBlockElement<PitchValue> =
    (blockElement: number): ContourPiece<PitchValue> =>
        as.ContourPiece<PitchValue>(range(ONE, use.Cardinal(as.Integer(blockElement), INCREMENT))
            .map((integer: Integer): ContourElement<PitchValue> => {
                if (isEven(integer)) {
                    return as.ContourElement<PitchValue>([
                        as.number(STANDARD_PITCH_INDEX_INDICATING_REST),
                        1,
                    ])
                }

                return as.ContourElement<PitchValue>([
                    use.Scalar(use.Translation(integer, SPRINGY_SUMMER_TRANSLATION), ONE_HALF),
                    1,
                ])
            }),
        )

export {
    springySummerRendering,
}
