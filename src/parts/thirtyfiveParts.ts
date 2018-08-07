import rest from '../../../../src/rest'
import calculateDuration from '../../../../src/utilities/calculateDuration'
import repeat from '../../../../src/utilities/repeat'
import sequence from '../../../../src/utilities/sequence'
import {
    thirtyfiveYaosAccidentInspiredNotes,
    thirtyfiveYaosBassNotes,
    thirtyfiveZdaubNotes,
    thirtyfiveZdaubOnlyWiggleNotes,
} from '../notes/thirtyfiveNotes'
import { Part } from '../types'

const thirtyfiveYaosBassPart: Part = sequence([
    repeat(thirtyfiveYaosBassNotes, 5),
])

const thirtyfiveYaosAccidentInspiredPart: Part = sequence([
    repeat(thirtyfiveYaosAccidentInspiredNotes, 5),
])

const thirtyfiveZdaubPart: Part = sequence([
    repeat(rest(calculateDuration(thirtyfiveZdaubNotes)), 1),
    repeat(thirtyfiveZdaubNotes, 2),
    repeat(thirtyfiveZdaubOnlyWiggleNotes, 6),
])

export {
    thirtyfiveYaosBassPart,
    thirtyfiveYaosAccidentInspiredPart,
    thirtyfiveZdaubPart,
}
