import { Index, to } from '../../../../src'
import { ContourPiece, to as zdaubyaosTo } from '../nominal'

const rest: (duration: Index) => ContourPiece =
    (duration: Index): ContourPiece =>
        zdaubyaosTo.ContourPiece([ [ to.Index(0), duration ] ])

export {
    rest,
}
