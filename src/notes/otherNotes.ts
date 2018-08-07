import { thirtyfiveYaosAccidentInspired, thirtyfiveYaosBass, thirtyfiveZdaub } from '../contours/otherContours'
import { glisNoteType } from '../noteTypes'
import { Notes } from '../types'

const thirtyfiveYaosBassNotes: Notes = thirtyfiveYaosBass.map(glisNoteType)

const thirtyfiveYaosAccidentInspiredNotes: Notes = thirtyfiveYaosAccidentInspired.map(glisNoteType)

const thirtyfiveZdaubNotes: Notes = thirtyfiveZdaub.map(glisNoteType)

export {
    thirtyfiveYaosBassNotes,
    thirtyfiveYaosAccidentInspiredNotes,
    thirtyfiveZdaubNotes,
}
