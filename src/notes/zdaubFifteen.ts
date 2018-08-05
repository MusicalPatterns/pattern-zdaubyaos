import {
    ascentFifteenBony,
    ascentFifteenGlis,
    ascentFifteenTrem,
    escapeFifteenBony,
    escapeFifteenGlis,
    escapeFifteenTrem,
    noodlingFifteenBony,
    noodlingFifteenGlis,
    noodlingFifteenTrem,
} from '../contours/zdaubFifteen'
import { glisNoteType, manualNoteType, tremNoteType } from '../noteTypes'
import { Notes } from '../types'

const noodlingFifteenGlisNotes: Notes = noodlingFifteenGlis.map(glisNoteType)
const escapeFifteenGlisNotes: Notes = escapeFifteenGlis.map(glisNoteType)
const ascentFifteenGlisNotes: Notes = ascentFifteenGlis.map(glisNoteType)
const noodlingFifteenTremNotes: Notes = noodlingFifteenTrem.map(tremNoteType)
const escapeFifteenTremNotes: Notes = escapeFifteenTrem.map(tremNoteType)
const ascentFifteenTremNotes: Notes = ascentFifteenTrem.map(tremNoteType)
const noodlingFifteenBonyNotes: Notes = noodlingFifteenBony.map(manualNoteType)
const escapeFifteenBonyNotes: Notes = escapeFifteenBony.map(manualNoteType)
const ascentFifteenBonyNotes: Notes = ascentFifteenBony.map(manualNoteType)

export {
    noodlingFifteenGlisNotes,
    escapeFifteenGlisNotes,
    ascentFifteenGlisNotes,
    noodlingFifteenTremNotes,
    escapeFifteenTremNotes,
    ascentFifteenTremNotes,
    noodlingFifteenBonyNotes,
    escapeFifteenBonyNotes,
    ascentFifteenBonyNotes,
}
