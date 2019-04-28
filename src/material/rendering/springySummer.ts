import {
    PitchDuration,
    RenderingByBlockElement,
    STANDARD_PITCH_INDEX_INDICATING_REST,
} from '@musical-patterns/material'
import {
    as,
    ContourElement,
    ContourPiece, INCREMENT,
    Integer,
    isEven,
    ONE,
    ONE_HALF,
    range,
    use,
} from '@musical-patterns/utilities'
import { SPRINGY_SUMMER_TRANSLATION } from './constants'

const springySummerRendering: RenderingByBlockElement<PitchDuration> =
    (blockElement: number): ContourPiece<PitchDuration> =>
        as.ContourPiece<PitchDuration>(range(ONE, use.Cardinal(as.Integer(blockElement), INCREMENT))
            .map((integer: Integer): ContourElement<PitchDuration> => {
                if (isEven(integer)) {
                    return as.ContourElement<PitchDuration>([
                        as.number(STANDARD_PITCH_INDEX_INDICATING_REST),
                        1,
                    ])
                }

                return as.ContourElement<PitchDuration>([
                    use.Scalar(use.Translation(integer, SPRINGY_SUMMER_TRANSLATION), ONE_HALF),
                    1,
                ])
            }),
        )

export {
    springySummerRendering,
}
