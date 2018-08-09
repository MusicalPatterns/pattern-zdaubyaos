import {
    thirtyfiveYaosAccidentInspiredContour,
    thirtyfiveYaosBassContour,
    thirtyfiveZdaubContour,
    thirtyfiveZdaubOnlyWiggleContour,
} from '../contours/thirtyfiveContours'
import makeNote from '../makeNote'
import { Notes } from '../types'

const thirtyfiveYaosBassNotes: Notes = thirtyfiveYaosBassContour.map(makeNote)
const thirtyfiveYaosAccidentInspiredNotes: Notes = thirtyfiveYaosAccidentInspiredContour.map(makeNote)
const thirtyfiveZdaubNotes: Notes = thirtyfiveZdaubContour.map(makeNote)
const thirtyfiveZdaubOnlyWiggleNotes: Notes = thirtyfiveZdaubOnlyWiggleContour.map(makeNote)

export {
    thirtyfiveYaosBassNotes,
    thirtyfiveYaosAccidentInspiredNotes,
    thirtyfiveZdaubNotes,
    thirtyfiveZdaubOnlyWiggleNotes,
}
