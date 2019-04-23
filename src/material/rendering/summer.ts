import {
    PitchDuration,
    RenderingByBlockElement,
    STANDARD_PITCH_INDEX_INDICATING_REST,
} from '@musical-patterns/material'
import {
    as,
    ContourElement,
    ContourPiece,
    INITIAL,
    Integer,
    isEven,
    notAs,
    POSITIVE_INTEGERS,
    Scalar,
    slice,
} from '@musical-patterns/utilities'

const summerRendering: RenderingByBlockElement<PitchDuration> =
    (cell: number): ContourPiece<PitchDuration> =>
        as.ContourPiece<PitchDuration>(slice(POSITIVE_INTEGERS, INITIAL, as.Ordinal<Integer[]>(cell))
            .map((integer: Integer): ContourElement<PitchDuration> =>
                as.ContourElement<PitchDuration>(isEven(integer) ?
                    [ notAs.Ordinal<Scalar[]>(STANDARD_PITCH_INDEX_INDICATING_REST), 1 ] :
                    [ integer, 1 ],
                ),
            ),
        )

export {
    summerRendering,
}
