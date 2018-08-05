import {
    chuwowwwFall,
    chuwowwwSpring,
    djiyaiiiFall,
    djiyaiiiSpring,
    djiyaiiiSummer,
    inaiiiVariety,
    inaiiiSpring,
    inaiiiSummer,
    umowwwFall,
} from '../contours/yaosTwentyfour'
import { glisNoteType, manualNoteType, tremNoteType } from '../noteTypes'
import { Notes } from '../types'

const chuwowwwSpringNotes: Notes = chuwowwwSpring.map(tremNoteType)

const inaiiiSpringNotes: Notes = inaiiiSpring.map(tremNoteType)

const djiyaiiiSpringNotes: Notes = djiyaiiiSpring.map(tremNoteType)

const inaiiiSummerNotes: Notes = inaiiiSummer.map(tremNoteType)

const djiyaiiiSummerNotes: Notes = djiyaiiiSummer.map(tremNoteType)

const umowwwFallNotes: Notes = umowwwFall.map(glisNoteType)

const chuwowwwFallNotes: Notes = chuwowwwFall.map(glisNoteType)

const djiyaiiiFallNotes: Notes = djiyaiiiFall.map(glisNoteType)

const inaiiiVarietyNotes: Notes = inaiiiVariety.map(manualNoteType)

export {
    chuwowwwSpringNotes,
    inaiiiSpringNotes,
    djiyaiiiSpringNotes,
    inaiiiSummerNotes,
    djiyaiiiSummerNotes,
    umowwwFallNotes,
    chuwowwwFallNotes,
    djiyaiiiFallNotes,
    inaiiiVarietyNotes,
}
