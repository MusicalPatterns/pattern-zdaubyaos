import { Index, to } from '../../../../src'
import { to as zdaubyaosTo } from '../nominal'
import { ContourPiece } from '../types'

const rest: (duration: Index) => ContourPiece =
    (duration: Index): ContourPiece =>
        zdaubyaosTo.ContourPiece([ [ to.Index(0), duration ] ])

export {
    rest,
}
