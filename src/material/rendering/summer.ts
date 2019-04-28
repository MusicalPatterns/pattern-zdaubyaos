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
    Integer,
    isEven,
    ONE,
    range,
    use,
} from '@musical-patterns/utilities'

const summerRendering: RenderingByBlockElement<PitchDuration> =
    (blockElement: number): ContourPiece<PitchDuration> =>
        as.ContourPiece<PitchDuration>(range(ONE, use.Cardinal(as.Integer(blockElement), INCREMENT))
            .map((integer: Integer): ContourElement<PitchDuration> =>
                as.ContourElement<PitchDuration>(isEven(integer) ?
                    [ as.number(STANDARD_PITCH_INDEX_INDICATING_REST), 1 ] :
                    [ integer, 1 ],
                ),
            ),
        )

export {
    summerRendering,
}
