import rest from '../../../../src/rest'
import calculateDuration from '../../../../src/utilities/calculateDuration'
import repeat from '../../../../src/utilities/repeat'
import repeatCall from '../../../../src/utilities/repeatCall'
import sequence from '../../../../src/utilities/sequence'
import { backboneFifteenANotes, backboneTwentyfourCNotes } from '../notes/backboneNotes'
import getYaosNotes from '../notes/getYaosNotes'
import {
    thirtyfiveYaosAccidentInspiredNotes,
    thirtyfiveYaosBassNotes,
    thirtyfiveZdaubNotes,
    thirtyfiveZdaubOnlyWiggleNotes,
} from '../notes/otherNotes'
import { Part } from '../types'

const trueYetOfBackbonePart: Part = sequence([
    repeatCall(() => backboneFifteenANotes, 8),
    repeatCall(() => backboneTwentyfourCNotes, 4),
])

const experimentWithIestttPart: Part = sequence([
    getYaosNotes('highregular', 'umowchuwowiest', 'twentyfour', 'fall'),
    getYaosNotes('highregular', 'umowchuwowiest', 'twentyfour', 'spring'),
    getYaosNotes('highregular', 'umowchuwowiest', 'twentyfour', 'summer'),
])

const experimentWithUmowwwPart: Part = sequence([
    getYaosNotes('lowregular', 'umowchuwowiest', 'twentyfour', 'fall'),
    getYaosNotes('lowregular', 'umowchuwowiest', 'twentyfour', 'spring'),
    getYaosNotes('lowregular', 'umowchuwowiest', 'twentyfour', 'summer'),
])

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

const polyrhythmicYaosFifteenPart: Part = sequence([
    repeatCall(() => getYaosNotes('midirregular', 'inaidjiyaiouzd', 'fifteen', 'summer'), 8),
])

const polyrhythmicYaosTwentyfourPart: Part = sequence([
    repeatCall(() => getYaosNotes('midirregular', 'umowchuwowiest', 'twentyfour', 'summerySpring'), 5),
])

export {
    trueYetOfBackbonePart,
    experimentWithIestttPart,
    experimentWithUmowwwPart,
    thirtyfiveYaosBassPart,
    thirtyfiveYaosAccidentInspiredPart,
    thirtyfiveZdaubPart,
    polyrhythmicYaosFifteenPart,
    polyrhythmicYaosTwentyfourPart,
}
