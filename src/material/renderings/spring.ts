import { RenderingByBlockElement, StandardContour } from '@musical-patterns/pattern'
import { apply, ContourElement, ContourPiece, from, INITIAL, numbers, to } from '@musical-patterns/utilities'
import { INDEX_OF_PITCH_INDEX_WITHIN_CONTOUR_ELEMENT } from '../../constants'
import { SINGLE_DURATION } from './constants'

const springRendering: RenderingByBlockElement<StandardContour> =
    (blockElement: number): ContourPiece<StandardContour> => {
        const numbersWeNeed: number[] = numbers.slice(from.Index(INITIAL), blockElement)
        const contour: ContourPiece<StandardContour> = to.ContourPiece(
            numbersWeNeed.map((n: number): ContourElement<StandardContour> => [ n, SINGLE_DURATION ]),
        )
        const contourElement: ContourElement<StandardContour> = apply.Index(contour, INITIAL)
        contourElement[ from.Index(INDEX_OF_PITCH_INDEX_WITHIN_CONTOUR_ELEMENT) ] = 0

        return contour
    }

export {
    springRendering,
}
