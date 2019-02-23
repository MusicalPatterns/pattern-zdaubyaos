// tslint:disable no-reaching-imports

export {
    buildParts,
    buildEntities,
    buildScalars,
    buildNoteSpec,
    buildScales,
    buildRenderings,
    Renderings,
    RenderingName,
    buildOtherContourPieces,
    buildThirtyfiveContourPieces,
    getTrueContours,
    buildTrueContourPieces,
    buildAlmostTrueContourPieces,
    applyGainScalar,
    applyPitchIndexTranslation,
    TrueContourPiecesByRenderingName,
    TrueContourPiecesByBarTargetThenBlockStyleThenRenderingName,
} from './material/indexForTest'
export { pattern } from './patterns'

export {
    BarTarget,
    BlockStyle,
} from './types'

// tslint:disable-next-line no-default-import
import * as snapshot from './snapshot.json'

export { snapshot }
