import { thirtyfiveA, thirtyfiveB, thirtyfiveC } from '../contours/otherContours'
import { glisNoteType } from '../noteTypes'
import { Notes } from '../types'

const thirtyfiveANotes: Notes = thirtyfiveA.map(glisNoteType)

const thirtyfiveBNotes: Notes = thirtyfiveB.map(glisNoteType)

const thirtyfiveCNotes: Notes = thirtyfiveC.map(glisNoteType)

export {
    thirtyfiveANotes,
    thirtyfiveBNotes,
    thirtyfiveCNotes,
}
