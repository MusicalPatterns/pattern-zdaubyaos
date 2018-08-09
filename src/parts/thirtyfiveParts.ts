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
    repeat(thirtyfiveYaosBassNotes, 30),
])

const thirtyfiveYaosAccidentInspiredPart: Part = sequence([
    repeat(thirtyfiveYaosAccidentInspiredNotes, 30),
])

const thirtyfiveZdaubPart: Part = sequence([
    rest(calculateDuration(thirtyfiveZdaubNotes)),
    repeat(thirtyfiveZdaubNotes, 2),
    repeat(thirtyfiveZdaubOnlyWiggleNotes, 12),
])

export {
    thirtyfiveYaosBassPart,
    thirtyfiveYaosAccidentInspiredPart,
    thirtyfiveZdaubPart,
}
