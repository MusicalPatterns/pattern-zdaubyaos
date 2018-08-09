import { glisNoteType, tremNoteType } from './noteTypes'
import { YaosBlockResolution, YaosBlockStrategy, YaosBlockStyle, ByBlockStrategy, NoteType, YaosRendering } from './types'

const NOTE_TYPES_BY_YAOS_RENDERINGS: {[x in YaosRendering]: NoteType } = {
    [YaosRendering.FALL]: glisNoteType,
    [YaosRendering.SPRING]: tremNoteType,
    [YaosRendering.SPRINGY_SUMMER]: tremNoteType,
    [YaosRendering.SUMMER]: tremNoteType,
    [YaosRendering.SUMMERY_SPRING]: tremNoteType,
}

const YAOS_BLOCK_STYLES_BY_STRATEGY_THEN_RESOLUTION: ByBlockStrategy = {
    [YaosBlockStrategy.INAIDJIYAIOUZD]: {
        [YaosBlockResolution.HIGHREGULAR]: YaosBlockStyle.OUZD,
        [YaosBlockResolution.LOWREGULAR]: YaosBlockStyle.INAI,
        [YaosBlockResolution.MIDIRREGULAR]: YaosBlockStyle.DJIYAI,
    },
    [YaosBlockStrategy.UMOWCHUWOWIEST]: {
        [YaosBlockResolution.HIGHREGULAR]: YaosBlockStyle.IEST,
        [YaosBlockResolution.LOWREGULAR]: YaosBlockStyle.UMOW,
        [YaosBlockResolution.MIDIRREGULAR]: YaosBlockStyle.CHUWOW,
    },
}

export {
    NOTE_TYPES_BY_YAOS_RENDERINGS,
    YAOS_BLOCK_STYLES_BY_STRATEGY_THEN_RESOLUTION,
}
