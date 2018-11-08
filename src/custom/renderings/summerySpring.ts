import { applyOffset, applyScale, from, Index, INITIAL, numbers, to } from '../../../../../src'
import { INDEX_OF_PITCH_INDEX_WITHIN_CONTOUR_ELEMENT } from '../../constants'
import { ContourPiece, to as zdaubyaosTo } from '../../nominal'
import { ContourElement } from '../../types'
import { SUMMERY_SPRING_OFFSET, SUMMERY_SPRING_SCALAR } from './constants'
import { RenderingByBlockElement } from './types'

const summerySpringRendering: RenderingByBlockElement =
    (blockElement: Index): ContourPiece => {
        const contour: ContourPiece = zdaubyaosTo.ContourPiece(numbers
            .slice(from.Index(INITIAL), from.Index(blockElement))
            .map((n: number): ContourElement => ([
                to.Index(applyScale(applyOffset(n, SUMMERY_SPRING_OFFSET), SUMMERY_SPRING_SCALAR)),
                to.Index(1),
            ])),
        )
        contour[ from.Index(INITIAL) ][ from.Index(INDEX_OF_PITCH_INDEX_WITHIN_CONTOUR_ELEMENT) ] = to.Index(0)

        return contour
    }

export {
    summerySpringRendering,
}
