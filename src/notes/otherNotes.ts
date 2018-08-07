import {
    funBetweenFifteenAndTwentyfourMoment,
    polyrhythmicAscentA,
    polyrhythmicAscentB,
    polyrhythmicAscentC,
    secretLongChord,
} from '../contours/otherContours'
import { glisNoteType, manualNoteType } from '../noteTypes'
import { Notes } from '../types'

const polyrhythmicAscentANotes: Notes = polyrhythmicAscentA.map(glisNoteType)

const polyrhythmicAscentBNotes: Notes = polyrhythmicAscentB.map(glisNoteType)

const polyrhythmicAscentCNotes: Notes = polyrhythmicAscentC.map(glisNoteType)

const secretLongChordNotes: Notes = secretLongChord.map(manualNoteType)

const funBetweenFifteenAndTwentyfourMomentNotes: Notes = funBetweenFifteenAndTwentyfourMoment.map(manualNoteType)

export {
    polyrhythmicAscentANotes,
    polyrhythmicAscentBNotes,
    polyrhythmicAscentCNotes,
    secretLongChordNotes,
    funBetweenFifteenAndTwentyfourMomentNotes,
}
