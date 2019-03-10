// tslint:disable no-reaching-imports

export { buildNotes } from './notes'
export { materializeEntities } from './entities'
export { buildNote } from './features'
export { materializeScales } from './scales'
export {
    buildRenderings,
    RenderingName,
    Renderings,
} from './renderings/indexForTest'
export {
    buildOtherContourPieces,
    buildThirtyfiveContourPieces,
    getTrueContours,
    buildTrueContourPieces,
    buildAlmostTrueContourPieces,
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
