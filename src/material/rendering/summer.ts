import {
    PitchDuration,
    RenderingByBlockElement,
    STANDARD_PITCH_INDEX_INDICATING_REST,
} from '@musical-patterns/material'
import {
    ContourElement,
    ContourPiece,
    INITIAL,
    Integer,
    isEven,
    POSITIVE_INTEGERS,
    slice,
    to,
} from '@musical-patterns/utilities'

const summerRendering: RenderingByBlockElement<PitchDuration> =
    (cell: number): ContourPiece<PitchDuration> =>
        to.ContourPiece<PitchDuration>(slice(POSITIVE_INTEGERS, INITIAL, to.Ordinal(cell))
            .map((integer: Integer): ContourElement<PitchDuration> =>
                to.ContourElement<PitchDuration>(isEven(integer) ?
                    [ STANDARD_PITCH_INDEX_INDICATING_REST, 1 ] :
                    [ integer, 1 ],
                ),
            ),
        )

export {
    summerRendering,
}
