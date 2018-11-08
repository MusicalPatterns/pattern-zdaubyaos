import { from, Index, INITIAL, numbers, to } from '../../../../../src'
import { INDEX_OF_PITCH_INDEX_WITHIN_CONTOUR_ELEMENT } from '../../constants'
import { ContourPiece, to as zdaubyaosTo } from '../../nominal'
import { ContourElement } from '../../types'
import { SINGLE_DURATION } from './constants'
import { RenderingByBlockElement } from './types'

const springRendering: RenderingByBlockElement =
    (blockElement: Index): ContourPiece => {
        const numbersWeNeed: number[] = numbers.slice(from.Index(INITIAL), from.Index(blockElement))
        const contour: ContourPiece = zdaubyaosTo.ContourPiece(
            numbersWeNeed.map((n: number): ContourElement => [ to.Index(n), SINGLE_DURATION ]),
        )
        const contourElement: ContourElement = contour[ from.Index(INITIAL) ]
        contourElement[ from.Index(INDEX_OF_PITCH_INDEX_WITHIN_CONTOUR_ELEMENT) ] = to.Index(0)

        return contour
    }

export {
    springRendering,
}
