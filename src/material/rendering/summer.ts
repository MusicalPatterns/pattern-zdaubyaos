import { PitchValue, RenderingByBlockElement, STANDARD_PITCH_INDEX_INDICATING_REST } from '@musical-patterns/material'
import {
    as,
    ContourElement,
    ContourPiece,
    INCREMENT,
    Integer,
    isEven,
    ONE,
    range,
    use,
} from '@musical-patterns/utilities'

const summerRendering: RenderingByBlockElement<PitchValue> =
    (blockElement: number): ContourPiece<PitchValue> =>
        as.ContourPiece<PitchValue>(range(ONE, use.Cardinal(as.Integer(blockElement), INCREMENT))
            .map((integer: Integer): ContourElement<PitchValue> =>
                as.ContourElement<PitchValue>(isEven(integer) ?
                    [ as.number(STANDARD_PITCH_INDEX_INDICATING_REST), 1 ] :
                    [ integer, 1 ],
                ),
            ),
        )

export {
    summerRendering,
}
