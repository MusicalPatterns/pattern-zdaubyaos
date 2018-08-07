import {
    polyrhythmicAscentA,
    polyrhythmicAscentB,
    polyrhythmicAscentC,
    secretLongChord,
} from '../contours/otherContours'
import { glisNoteType } from '../noteTypes'
import { Notes } from '../types'

const polyrhythmicAscentANotes: Notes = polyrhythmicAscentA.map(glisNoteType)

const polyrhythmicAscentBNotes: Notes = polyrhythmicAscentB.map(glisNoteType)

const polyrhythmicAscentCNotes: Notes = polyrhythmicAscentC.map(glisNoteType)

const secretLongChordNotes: Notes = secretLongChord.map(glisNoteType)

export {
    polyrhythmicAscentANotes,
    polyrhythmicAscentBNotes,
    polyrhythmicAscentCNotes,
    secretLongChordNotes,
}
