// tslint:disable no-reaching-imports

export { thunkNotes } from './notes'
export { materializeEntities } from './entities'
export { computeNote } from './features'
export { materializeScales } from './scales'
export {
    thunkRenderings,
    RenderingName,
    Renderings,
} from './rendering/indexForTest'
export {
    thunkOtherContourPieces,
    thunkThirtyfiveContourPieces,
    getTrueContours,
    thunkTrueContourPieces,
    thunkAlmostTrueContourPieces,
    TrueContourPiecesByRenderingName,
    TrueContourPiecesByBarTargetThenBlockStyleThenRenderingName,
    AlmostTrueContourPieces,
    OtherContourPieces,
    ThirtyfiveContourPieces,
} from './custom/indexForTest'
export {
    applyIntensityScalar,
    applyPitchIndexShift,
} from './segment/indexForTest'

export {
    BarTarget,
    BlockStyle,
} from './types'
