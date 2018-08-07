import {
    thirtyfiveYaosAccidentInspired,
    thirtyfiveYaosBass,
    thirtyfiveZdaub,
    thirtyfiveZdaubOnlyWiggle,
} from '../contours/thirtyfiveContours'
import { glisNoteType } from '../noteTypes'
import { Notes } from '../types'

const thirtyfiveYaosBassNotes: Notes = thirtyfiveYaosBass.map(glisNoteType)

const thirtyfiveYaosAccidentInspiredNotes: Notes = thirtyfiveYaosAccidentInspired.map(glisNoteType)

const thirtyfiveZdaubNotes: Notes = thirtyfiveZdaub.map(glisNoteType)

const thirtyfiveZdaubOnlyWiggleNotes: Notes = thirtyfiveZdaubOnlyWiggle.map(glisNoteType)

export {
    thirtyfiveYaosBassNotes,
    thirtyfiveYaosAccidentInspiredNotes,
    thirtyfiveZdaubNotes,
    thirtyfiveZdaubOnlyWiggleNotes,
}
