// tslint:disable:no-reaching-imports

export {
    buildParts,
    buildEntities,
    buildScalars,
    buildNoteSpec,
    buildScales,
    buildRenderings,
    Renderings,
    RenderingName,
} from './material/indexForTest'
export {
    buildOtherContourPieces,
    buildThirtyfiveContourPieces,
    getTrueContours,
    buildTrueContourPieces,
    buildAlmostTrueContourPieces,
    applyGainScalar,
    applyPitchIndexOffset,
    TrueContourPieces,
} from './custom/indexForTest'
export { pattern } from './patterns'

export {
    BarTarget,
    BlockStyle,
    ZdaubyaosContour,
} from './types'

// tslint:disable-next-line:no-default-import
import * as snapshot from './snapshot.json'

export { snapshot }
