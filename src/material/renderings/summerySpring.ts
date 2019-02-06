import { PitchDuration, RenderingByBlockElement } from '@musical-patterns/pattern'
import { apply, ContourElement, ContourPiece, from, INITIAL, positiveIntegers, to } from '@musical-patterns/utilities'
import { INDEX_OF_PITCH_INDEX_WITHIN_CONTOUR_ELEMENT } from '../../constants'
import { SUMMERY_SPRING_SCALAR, SUMMERY_SPRING_TRANSLATION } from './constants'

const summerySpringRendering: RenderingByBlockElement<PitchDuration> =
    (blockElement: number): ContourPiece<PitchDuration> => {
        const contour: ContourPiece<PitchDuration> = to.ContourPiece(positiveIntegers
            .slice(from.Ordinal(INITIAL), blockElement)
            .map((integer: number): ContourElement<PitchDuration> => ([
                apply.Scalar(apply.Translation(integer, SUMMERY_SPRING_TRANSLATION), SUMMERY_SPRING_SCALAR),
                1,
            ])),
        )
        const index: ContourElement<PitchDuration> = apply.Ordinal(contour, INITIAL)
        index[ from.Ordinal(INDEX_OF_PITCH_INDEX_WITHIN_CONTOUR_ELEMENT) ] = 0

        return contour
    }

export {
    summerySpringRendering,
}
