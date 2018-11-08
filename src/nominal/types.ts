import { ContourElement } from '../types'

enum _ContourPieceBrand {}
type ContourPiece = _ContourPieceBrand & ContourElement[]

enum _ContourWholeBrand {}
type ContourWhole = _ContourWholeBrand & ContourElement[]

export {
    ContourPiece,
    ContourWhole,
}
