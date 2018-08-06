import { contoursByBlocksThenRendering } from '../contours/yaosFifteenContours'
import { glisNoteType, tremNoteType } from '../noteTypes'
import { Notes } from '../types'

const umowSpringNotes: Notes = contoursByBlocksThenRendering.umow.spring.map(tremNoteType)

const chuwowSpringNotes: Notes = contoursByBlocksThenRendering.chuwow.spring.map(tremNoteType)

const iestSpringNotes: Notes = contoursByBlocksThenRendering.iest.spring.map(tremNoteType)

const ouzdSpringNotes: Notes = contoursByBlocksThenRendering.ouzd.spring.map(tremNoteType)

const umowSummerNotes: Notes = contoursByBlocksThenRendering.umow.summer.map(tremNoteType)

const chuwowSummerNotes: Notes = contoursByBlocksThenRendering.chuwow.summer.map(tremNoteType)

const iestSummerNotes: Notes = contoursByBlocksThenRendering.iest.summer.map(tremNoteType)

const inaiSummerNotes: Notes = contoursByBlocksThenRendering.inai.summer.map(tremNoteType)

const djiyaiSummerNotes: Notes = contoursByBlocksThenRendering.djiyai.summer.map(tremNoteType)

const ouzdSummerNotes: Notes = contoursByBlocksThenRendering.ouzd.summer.map(tremNoteType)

const umowFallNotes: Notes = contoursByBlocksThenRendering.umow.fall.map(glisNoteType)

const chuwowFallNotes: Notes = contoursByBlocksThenRendering.chuwow.fall.map(glisNoteType)

const iestFallNotes: Notes = contoursByBlocksThenRendering.iest.fall.map(glisNoteType)

const ouzdFallNotes: Notes = contoursByBlocksThenRendering.ouzd.fall.map(glisNoteType)

const inaiFallNotes: Notes = contoursByBlocksThenRendering.inai.fall.map(glisNoteType)

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
