import rest from '../../../../src/rest'
import calculateDuration from '../../../../src/utilities/calculateDuration'
import repeat from '../../../../src/utilities/repeat'
import repeatCall from '../../../../src/utilities/repeatCall'
import sequence from '../../../../src/utilities/sequence'
import { backboneFifteenANotes, backboneTwentyfourCNotes } from '../notes/backboneNotes'
import getYaosNotes from '../notes/getYaosNotes'
import { thirtyfiveYaosAccidentInspiredNotes, thirtyfiveYaosBassNotes, thirtyfiveZdaubNotes } from '../notes/otherNotes'
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
    repeat(thirtyfiveYaosBassNotes, 4),
])

const thirtyfiveYaosAccidentInspiredPart: Part = sequence([
    repeat(thirtyfiveYaosAccidentInspiredNotes, 4),
])

const thirtyfiveZdaubPart: Part = sequence([
    repeat(thirtyfiveZdaubNotes, 2),
    repeat(rest(calculateDuration(thirtyfiveZdaubNotes)), 2),
])

export {
    trueYetOfBackbonePart,
    experimentWithIestttPart,
    experimentWithUmowwwPart,
    thirtyfiveYaosBassPart,
    thirtyfiveYaosAccidentInspiredPart,
    thirtyfiveZdaubPart,
}
