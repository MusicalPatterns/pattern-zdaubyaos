// tslint:disable no-reaching-imports

export { buildParts } from './parts'
export { buildEntities } from './entities'
export { buildNoteSpec } from './notes'
export { buildScales } from './scales'
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
} from './custom/indexForTest'
export {
    applyGainScalar,
    applyPitchIndexTranslation,
} from './segments/indexForTest'

export {
    BarTarget,
    BlockStyle,
} from './types'
