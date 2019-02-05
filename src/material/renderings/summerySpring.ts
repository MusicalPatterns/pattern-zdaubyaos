import { PitchDuration, RenderingByBlockElement } from '@musical-patterns/pattern'
import { apply, ContourElement, ContourPiece, from, INITIAL, positiveIntegers, to } from '@musical-patterns/utilities'
import { INDEX_OF_PITCH_INDEX_WITHIN_CONTOUR_ELEMENT } from '../../constants'
import { SUMMERY_SPRING_OFFSET, SUMMERY_SPRING_SCALAR } from './constants'

const summerySpringRendering: RenderingByBlockElement<PitchDuration> =
    (blockElement: number): ContourPiece<PitchDuration> => {
        const contour: ContourPiece<PitchDuration> = to.ContourPiece(positiveIntegers
            .slice(from.Index(INITIAL), blockElement)
            .map((integer: number): ContourElement<PitchDuration> => ([
                apply.Scalar(apply.Offset(integer, SUMMERY_SPRING_OFFSET), SUMMERY_SPRING_SCALAR),
                1,
            ])),
        )
        const index: ContourElement<PitchDuration> = apply.Index(contour, INITIAL)
        index[ from.Index(INDEX_OF_PITCH_INDEX_WITHIN_CONTOUR_ELEMENT) ] = 0

        return contour
    }

export {
    summerySpringRendering,
}
