import {
    chuwowFall,
    chuwowSpring,
    chuwowSummer,
    djiyaiSummer,
    iestFall,
    iestSpring,
    iestSummer,
    inaiSummer,
    ouzdSummer,
    umowFall,
    umowSpring,
    umowSummer,
} from '../contours/yaosFifteen'
import { glisNoteType, tremNoteType } from '../noteTypes'
import { Notes } from '../types'

const umowSpringNotes: Notes = umowSpring.map(tremNoteType)

const chuwowSpringNotes: Notes = chuwowSpring.map(tremNoteType)

const iestSpringNotes: Notes = iestSpring.map(tremNoteType)

const umowSummerNotes: Notes = umowSummer.map(tremNoteType)

const chuwowSummerNotes: Notes = chuwowSummer.map(tremNoteType)

const iestSummerNotes: Notes = iestSummer.map(tremNoteType)

const inaiSummerNotes: Notes = inaiSummer.map(tremNoteType)

const djiyaiSummerNotes: Notes = djiyaiSummer.map(tremNoteType)

const ouzdSummerNotes: Notes = ouzdSummer.map(tremNoteType)

const umowFallNotes: Notes = umowFall.map(glisNoteType)

const chuwowFallNotes: Notes = chuwowFall.map(glisNoteType)

const iestFallNotes: Notes = iestFall.map(glisNoteType)

export {
    umowSpringNotes,
    chuwowSpringNotes,
    iestSpringNotes,
    umowSummerNotes,
    chuwowSummerNotes,
    iestSummerNotes,
    inaiSummerNotes,
    djiyaiSummerNotes,
    ouzdSummerNotes,
    umowFallNotes,
    chuwowFallNotes,
    iestFallNotes,
}
