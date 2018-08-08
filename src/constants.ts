import { glisNoteType, tremNoteType } from './noteTypes'
import { BlockResolution, BlockStrategy, BlockStyle, ByBlockStrategy, NoteType, Rendering } from './types'

const NOTE_TYPES_FOR_RENDERINGS: {[x in Rendering]: NoteType } = {
    [Rendering.FALL]: glisNoteType,
    [Rendering.SPRING]: tremNoteType,
    [Rendering.SPRINGY_SUMMER]: tremNoteType,
    [Rendering.SUMMER]: tremNoteType,
    [Rendering.SUMMERY_SPRING]: tremNoteType,
}

const BLOCKS_BY_STRATEGY_THEN_RESOLUTION: ByBlockStrategy = {
    [BlockStrategy.INAIDJIYAIOUZD]: {
        [BlockResolution.HIGHREGULAR]: BlockStyle.OUZD,
        [BlockResolution.LOWREGULAR]: BlockStyle.INAI,
        [BlockResolution.MIDIRREGULAR]: BlockStyle.DJIYAI,
    },
    [BlockStrategy.UMOWCHUWOWIEST]: {
        [BlockResolution.HIGHREGULAR]: BlockStyle.IEST,
        [BlockResolution.LOWREGULAR]: BlockStyle.UMOW,
        [BlockResolution.MIDIRREGULAR]: BlockStyle.CHUWOW,
    },
}

export {
    NOTE_TYPES_FOR_RENDERINGS,
    BLOCKS_BY_STRATEGY_THEN_RESOLUTION,
}
