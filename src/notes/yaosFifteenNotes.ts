import {
    chuwowFall,
    chuwowSpring,
    chuwowSummer,
    djiyaiSummer,
    iestFall,
    iestSpring,
    iestSummer,
    inaiFall,
    inaiSummer,
    ouzdFall,
    ouzdSpring,
    ouzdSummer,
    umowFall,
    umowSpring,
    umowSummer,
} from '../contours/yaosFifteenContours'
import { glisNoteType, tremNoteType } from '../noteTypes'
import { Notes } from '../types'

const umowSpringNotes: Notes = umowSpring.map(tremNoteType)

const chuwowSpringNotes: Notes = chuwowSpring.map(tremNoteType)

const iestSpringNotes: Notes = iestSpring.map(tremNoteType)

const ouzdSpringNotes: Notes = ouzdSpring.map(tremNoteType)

const umowSummerNotes: Notes = umowSummer.map(tremNoteType)

const chuwowSummerNotes: Notes = chuwowSummer.map(tremNoteType)

const iestSummerNotes: Notes = iestSummer.map(tremNoteType)

const inaiSummerNotes: Notes = inaiSummer.map(tremNoteType)

const djiyaiSummerNotes: Notes = djiyaiSummer.map(tremNoteType)

const ouzdSummerNotes: Notes = ouzdSummer.map(tremNoteType)

const umowFallNotes: Notes = umowFall.map(glisNoteType)

const chuwowFallNotes: Notes = chuwowFall.map(glisNoteType)

const iestFallNotes: Notes = iestFall.map(glisNoteType)

const ouzdFallNotes: Notes = ouzdFall.map(glisNoteType)

const inaiFallNotes: Notes = inaiFall.map(glisNoteType)

export {
    umowSpringNotes,
    chuwowSpringNotes,
    iestSpringNotes,
    ouzdSpringNotes,
    umowSummerNotes,
    chuwowSummerNotes,
    iestSummerNotes,
    inaiSummerNotes,
    djiyaiSummerNotes,
    ouzdSummerNotes,
    umowFallNotes,
    chuwowFallNotes,
    iestFallNotes,
    ouzdFallNotes,
    inaiFallNotes,
}
