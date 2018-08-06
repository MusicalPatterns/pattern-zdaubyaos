import {
    chuwowwwFall,
    chuwowwwSpring,
    chuwowwwSummer,
    djiyaiiiFall,
    djiyaiiiSpring,
    djiyaiiiSpringySummer,
    djiyaiiiSummer,
    iestttFall,
    iestttSpring,
    iestttSummer,
    inaiiiFall,
    inaiiiSpring,
    inaiiiSummer,
    inaiiiVariety,
    ouzdddFall,
    ouzdddSpring,
    ouzdddSummer,
    umowwwFall,
    umowwwSpring,
    umowwwSummer,
} from '../contours/yaosTwentyfourContours'
import { glisNoteType, manualNoteType, tremNoteType } from '../noteTypes'
import { Notes } from '../types'

const umowwwSpringNotes: Notes = umowwwSpring.map(tremNoteType)
const chuwowwwSpringNotes: Notes = chuwowwwSpring.map(tremNoteType)
const iestttSpringNotes: Notes = iestttSpring.map(tremNoteType)

const inaiiiSpringNotes: Notes = inaiiiSpring.map(tremNoteType)
const djiyaiiiSpringNotes: Notes = djiyaiiiSpring.map(tremNoteType)
const ouzdddSpringNotes: Notes = ouzdddSpring.map(tremNoteType)

const umowwwSummerNotes: Notes = umowwwSummer.map(tremNoteType)
const chuwowwwSummerNotes: Notes = chuwowwwSummer.map(tremNoteType)
const iestttSummerNotes: Notes = iestttSummer.map(tremNoteType)

const inaiiiSummerNotes: Notes = inaiiiSummer.map(tremNoteType)
const djiyaiiiSummerNotes: Notes = djiyaiiiSummer.map(tremNoteType)
const ouzdddSummerNotes: Notes = ouzdddSummer.map(tremNoteType)

const umowwwFallNotes: Notes = umowwwFall.map(glisNoteType)
const chuwowwwFallNotes: Notes = chuwowwwFall.map(glisNoteType)
const iestttFallNotes: Notes = iestttFall.map(glisNoteType)

const inaiiiFallNotes: Notes = inaiiiFall.map(glisNoteType)
const djiyaiiiFallNotes: Notes = djiyaiiiFall.map(glisNoteType)
const ouzdddFallNotes: Notes = ouzdddFall.map(glisNoteType)

const inaiiiVarietyNotes: Notes = inaiiiVariety.map(manualNoteType)

const djiyaiiiSpringySummerNotes: Notes = djiyaiiiSpringySummer.map(tremNoteType)

export {
    umowwwSpringNotes,
    chuwowwwSpringNotes,
    iestttSpringNotes,
    inaiiiSpringNotes,
    djiyaiiiSpringNotes,
    ouzdddSpringNotes,
    umowwwSummerNotes,
    chuwowwwSummerNotes,
    iestttSummerNotes,
    inaiiiSummerNotes,
    djiyaiiiSummerNotes,
    ouzdddSummerNotes,
    umowwwFallNotes,
    chuwowwwFallNotes,
    iestttFallNotes,
    inaiiiFallNotes,
    djiyaiiiFallNotes,
    ouzdddFallNotes,
    inaiiiVarietyNotes,
    djiyaiiiSpringySummerNotes,
}
