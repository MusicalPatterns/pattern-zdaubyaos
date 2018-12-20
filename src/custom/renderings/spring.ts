import { RenderingByBlockElement } from '@musical-patterns/pattern'
import { apply, ContourElement, ContourPiece, from, INITIAL, numbers, to } from '@musical-patterns/utilities'
import { INDEX_OF_PITCH_INDEX_WITHIN_CONTOUR_ELEMENT } from '../../constants'
import { ZdaubyaosContour } from '../../types'
import { SINGLE_DURATION } from './constants'

const springRendering: RenderingByBlockElement<ZdaubyaosContour> =
    (blockElement: number): ContourPiece<ZdaubyaosContour> => {
        const numbersWeNeed: number[] = numbers.slice(from.Index(INITIAL), blockElement)
        const contour: ContourPiece<ZdaubyaosContour> = to.ContourPiece(
            numbersWeNeed.map((n: number): ContourElement<ZdaubyaosContour> => [ n, SINGLE_DURATION ]),
        )
        const contourElement: ContourElement<ZdaubyaosContour> = apply.Index(contour, INITIAL)
        contourElement[ from.Index(INDEX_OF_PITCH_INDEX_WITHIN_CONTOUR_ELEMENT) ] = 0

        return contour
    }

export {
    springRendering,
}
