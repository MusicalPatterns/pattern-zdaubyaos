import { from, Index, to } from '../../../../src'
import { ContourPiece } from '../nominal'
import { ContourElement } from '../types'

const calculateContourDuration: (notes: ContourPiece) => Index =
    (notes: ContourPiece): Index =>
        notes.reduce(
            (accumulator: Index, [ _, duration ]: ContourElement) =>
                to.Index(from.Index(accumulator) + from.Index(duration)),
            to.Index(0),
        )

export {
    calculateContourDuration,
}
