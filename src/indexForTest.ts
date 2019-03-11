// tslint:disable no-reaching-imports

export {
    computeNotes,
    materializeEntities,
    computeNote,
    materializeScales,
    computeRenderings,
    Renderings,
    RenderingName,
    computeOtherContourPieces,
    computeThirtyfiveContourPieces,
    getTrueContours,
    computeTrueContourPieces,
    computeAlmostTrueContourPieces,
    applyGainScalar,
    applyPitchIndexTranslation,
    TrueContourPiecesByRenderingName,
    TrueContourPiecesByBarTargetThenBlockStyleThenRenderingName,
    BarTarget,
    BlockStyle,
    AlmostTrueContourPieces,
    OtherContourPieces,
    ThirtyfiveContourPieces,
} from './material/indexForTest'
export { pattern } from './patterns'

// tslint:disable-next-line no-default-import
import * as snapshot from './snapshot.json'

export { snapshot }
