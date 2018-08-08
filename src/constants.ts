import { glisNoteType, tremNoteType } from './noteTypes'
import { BlockStyle, ByBlockStrategy, NoteType } from './types'

const NOTE_TYPES_FOR_RENDERINGS: {[index: string]: NoteType } = {
    fall: glisNoteType,
    spring: tremNoteType,
    springySummer: tremNoteType,
    summer: tremNoteType,
    summerySpring: tremNoteType,
}

const BLOCKS_BY_STRATEGY_THEN_RESOLUTION: ByBlockStrategy = {
    inaidjiyaiouzd: {
        highregular: BlockStyle.OUZD,
        lowregular: BlockStyle.INAI,
        midirregular: BlockStyle.DJIYAI,
    },
    umowchuwowiest: {
        highregular: BlockStyle.IEST,
        lowregular: BlockStyle.UMOW,
        midirregular: BlockStyle.CHUWOW,
    },
}

export {
    NOTE_TYPES_FOR_RENDERINGS,
    BLOCKS_BY_STRATEGY_THEN_RESOLUTION,
}
