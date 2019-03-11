// tslint:disable no-reaching-imports

export { computeNotes } from './notes'
export { materializeEntities } from './entities'
export { computeNote } from './features'
export { materializeScales } from './scales'
export {
    computeRenderings,
    RenderingName,
    Renderings,
} from './renderings/indexForTest'
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
    applyPitchIndexTranslation,
} from './segments/indexForTest'

export {
    BarTarget,
    BlockStyle,
} from './types'
