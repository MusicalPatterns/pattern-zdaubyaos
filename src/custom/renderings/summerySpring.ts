import { apply, from, Index, numbers } from '@musical-patterns/utilities'
import { INITIAL } from '../../../../../constants'
import { ContourPiece, to } from '../../../../../nominal'
import { INDEX_OF_PITCH_INDEX_WITHIN_CONTOUR_ELEMENT } from '../../constants'
import { ContourElement } from '../../types'
import { SUMMERY_SPRING_OFFSET, SUMMERY_SPRING_SCALAR } from './constants'
import { RenderingByBlockElement } from './types'

const summerySpringRendering: RenderingByBlockElement =
    (blockElement: Index): ContourPiece => {
        const contour: ContourPiece = to.ContourPiece(numbers
            .slice(from.Index(INITIAL), from.Index(blockElement))
            .map((n: number): ContourElement => ([
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
