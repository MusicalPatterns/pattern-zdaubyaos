import { RenderingByBlockElement, StandardContour } from '@musical-patterns/pattern'
import { apply, ContourElement, ContourPiece, from, INITIAL, positiveIntegers, to } from '@musical-patterns/utilities'
import { INDEX_OF_PITCH_INDEX_WITHIN_CONTOUR_ELEMENT } from '../../constants'
import { SUMMERY_SPRING_OFFSET, SUMMERY_SPRING_SCALAR } from './constants'

const summerySpringRendering: RenderingByBlockElement<StandardContour> =
    (blockElement: number): ContourPiece<StandardContour> => {
        const contour: ContourPiece<StandardContour> = to.ContourPiece(positiveIntegers
            .slice(from.Index(INITIAL), blockElement)
            .map((integer: number): ContourElement<StandardContour> => ([
                apply.Scalar(apply.Offset(integer, SUMMERY_SPRING_OFFSET), SUMMERY_SPRING_SCALAR),
                1,
            ])),
        )
        const index: ContourElement<StandardContour> = apply.Index(contour, INITIAL)
        index[ from.Index(INDEX_OF_PITCH_INDEX_WITHIN_CONTOUR_ELEMENT) ] = 0

        return contour
    }

export {
    summerySpringRendering,
}
