import {
    thirtyfiveYaosAccidentInspired,
    thirtyfiveYaosBass,
    thirtyfiveZdaub,
    thirtyfiveZdaubOnlyWiggle,
} from '../contours/thirtyfiveContours'
import makeNote from '../makeNote'
import { Notes } from '../types'

const thirtyfiveYaosBassNotes: Notes = thirtyfiveYaosBass.map(makeNote)
const thirtyfiveYaosAccidentInspiredNotes: Notes = thirtyfiveYaosAccidentInspired.map(makeNote)
const thirtyfiveZdaubNotes: Notes = thirtyfiveZdaub.map(makeNote)
const thirtyfiveZdaubOnlyWiggleNotes: Notes = thirtyfiveZdaubOnlyWiggle.map(makeNote)

export {
    thirtyfiveYaosBassNotes,
    thirtyfiveYaosAccidentInspiredNotes,
    thirtyfiveZdaubNotes,
    thirtyfiveZdaubOnlyWiggleNotes,
}
