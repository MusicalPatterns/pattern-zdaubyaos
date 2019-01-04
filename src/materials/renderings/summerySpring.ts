import { RenderingByBlockElement } from '@musical-patterns/pattern'
import { apply, ContourElement, ContourPiece, from, INITIAL, numbers, to } from '@musical-patterns/utilities'
import { INDEX_OF_PITCH_INDEX_WITHIN_CONTOUR_ELEMENT } from '../../constants'
import { ZdaubyaosContour } from '../../types'
import { SUMMERY_SPRING_OFFSET, SUMMERY_SPRING_SCALAR } from './constants'

const summerySpringRendering: RenderingByBlockElement<ZdaubyaosContour> =
    (blockElement: number): ContourPiece<ZdaubyaosContour> => {
        const contour: ContourPiece<ZdaubyaosContour> = to.ContourPiece(numbers
            .slice(from.Index(INITIAL), blockElement)
            .map((n: number): ContourElement<ZdaubyaosContour> => ([
                apply.Scalar(apply.Offset(n, SUMMERY_SPRING_OFFSET), SUMMERY_SPRING_SCALAR),
                1,
            ])),
        )
        apply.Index(contour, INITIAL)[ from.Index(INDEX_OF_PITCH_INDEX_WITHIN_CONTOUR_ELEMENT) ] = 0

        return contour
    }

export {
    summerySpringRendering,
}
