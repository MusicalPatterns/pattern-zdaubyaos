// tslint:disable no-reaching-imports

export { computeNotes } from './notes'
export { materializeEntities } from './entities'
export { computeNote } from './features'
export { materializeScales } from './scales'
export {
    computeRenderings,
    RenderingName,
    Renderings,
} from './rendering/indexForTest'
export {
    computeOtherContourPieces,
    computeThirtyfiveContourPieces,
    getTrueContours,
    computeTrueContourPieces,
    computeAlmostTrueContourPieces,
    TrueContourPiecesByRenderingName,
    TrueContourPiecesByBarTargetThenBlockStyleThenRenderingName,
    AlmostTrueContourPieces,
    OtherContourPieces,
    ThirtyfiveContourPieces,
} from './custom/indexForTest'
export {
    applyGainScalar,
    applyPitchIndexShift,
} from './segment/indexForTest'

export {
    BarTarget,
    BlockStyle,
} from './types'
