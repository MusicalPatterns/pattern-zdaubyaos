import { glisNoteType, manualNoteType, tremNoteType } from './noteTypes'
import { ManualNoteType, NoteType } from './types'
import {
    ByBlockStrategy,
    YaosBlockResolution,
    YaosBlockStrategy,
    YaosBlockStyle,
    YaosRendering,
    ZdaubRendering,
} from './zdaubyaosTypes'

const NOTE_TYPES_BY_YAOS_RENDERINGS: {[x in YaosRendering]: NoteType | ManualNoteType } = {
    [YaosRendering.FALL]: glisNoteType,
    [YaosRendering.SPRING]: tremNoteType,
    [YaosRendering.SPRINGY_SUMMER]: tremNoteType,
    [YaosRendering.SUMMER]: tremNoteType,
    [YaosRendering.SUMMERY_SPRING]: tremNoteType,
}

const NOTE_TYPES_BY_ZDAUB_RENDERINGS: {[x in ZdaubRendering]: NoteType | ManualNoteType } = {
    [ZdaubRendering.GLIS]: glisNoteType,
    [ZdaubRendering.TREM]: tremNoteType,
    [ZdaubRendering.BONY]: manualNoteType,
}

const YAOS_BLOCK_STYLES_BY_STRATEGY_THEN_RESOLUTION: ByBlockStrategy = {
    [YaosBlockStrategy.INAIDJIYAIOUZD]: {
        [YaosBlockResolution.HIGHREG]: YaosBlockStyle.OUZD,
        [YaosBlockResolution.LOWREG]: YaosBlockStyle.INAI,
        [YaosBlockResolution.MIDIRREG]: YaosBlockStyle.DJIYAI,
    },
    [YaosBlockStrategy.UMOWCHUWOWIEST]: {
        [YaosBlockResolution.HIGHREG]: YaosBlockStyle.IEST,
        [YaosBlockResolution.LOWREG]: YaosBlockStyle.UMOW,
        [YaosBlockResolution.MIDIRREG]: YaosBlockStyle.CHUWOW,
    },
}

export {
    NOTE_TYPES_BY_YAOS_RENDERINGS,
    NOTE_TYPES_BY_ZDAUB_RENDERINGS,
    YAOS_BLOCK_STYLES_BY_STRATEGY_THEN_RESOLUTION,
}
