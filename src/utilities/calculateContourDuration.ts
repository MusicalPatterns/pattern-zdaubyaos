import { from, Index, to } from '../../../../src'
import { Contour, ContourElement } from '../types'

const calculateContourDuration: (notes: Contour) => Index =
    (notes: Contour): Index =>
        notes.reduce(
            (m: Index, [ _, duration ]: ContourElement) =>
                to.Index(from.Index(m) + from.Index(duration)),
            to.Index(0),
        )

export {
    calculateContourDuration,
}
