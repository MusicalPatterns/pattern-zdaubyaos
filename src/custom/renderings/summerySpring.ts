import {
    applyOffset,
    applyScale,
    ContourPiece,
    dereference,
    from,
    Index,
    INITIAL,
    numbers,
    to,
} from '../../../../../src'
import { INDEX_OF_PITCH_INDEX_WITHIN_CONTOUR_ELEMENT } from '../../constants'
import { ContourElement } from '../../types'
import { SUMMERY_SPRING_OFFSET, SUMMERY_SPRING_SCALAR } from './constants'
import { RenderingByBlockElement } from './types'

const summerySpringRendering: RenderingByBlockElement =
    (blockElement: Index): ContourPiece => {
        const contour: ContourPiece = to.ContourPiece(numbers
            .slice(from.Index(INITIAL), from.Index(blockElement))
            .map((n: number): ContourElement => ([
                applyScale(applyOffset(n, SUMMERY_SPRING_OFFSET), SUMMERY_SPRING_SCALAR),
                1,
            ])),
        )
        dereference(contour, INITIAL)[ from.Index(INDEX_OF_PITCH_INDEX_WITHIN_CONTOUR_ELEMENT) ] = 0

        return contour
    }

export {
    summerySpringRendering,
}
