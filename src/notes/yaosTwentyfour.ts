import {
    chuwowwwFall, chuwowwwSpring,
    djiyaiiiFall, djiyaiiiSpring, djiyaiiiSummer,
    inaiiiAlternatingspringandsummer,
    inaiiiSpring,
    inaiiiSummer,
    umowwwFall,
} from '../contours/yaosTwentyfour'
import { glisNoteType, tremNoteType } from '../noteTypes'
import { Notes } from '../types'

const chuwowwwSpringNotes: Notes = chuwowwwSpring.map(tremNoteType)

const inaiiiSpringNotes: Notes = inaiiiSpring.map(tremNoteType)

const djiyaiiiSpringNotes: Notes = djiyaiiiSpring.map(tremNoteType)

const inaiiiSummerNotes: Notes = inaiiiSummer.map(tremNoteType)

const djiyaiiiSummerNotes: Notes = djiyaiiiSummer.map(tremNoteType)

const umowwwFallNotes: Notes = umowwwFall.map(glisNoteType)

const chuwowwwFallNotes: Notes = chuwowwwFall.map(glisNoteType)

const djiyaiiiFallNotes: Notes = djiyaiiiFall.map(glisNoteType)

const inaiiiAlternatingspringandsummerNotes: Notes = inaiiiAlternatingspringandsummer.map(tremNoteType)

export {
    chuwowwwSpringNotes,
    inaiiiSpringNotes,
    djiyaiiiSpringNotes,
    inaiiiSummerNotes,
    djiyaiiiSummerNotes,
    umowwwFallNotes,
    chuwowwwFallNotes,
    djiyaiiiFallNotes,
    inaiiiAlternatingspringandsummerNotes,
}
