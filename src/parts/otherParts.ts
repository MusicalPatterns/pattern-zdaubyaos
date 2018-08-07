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
    getYaosNotes({
        blockresolution: 'highregular',
        blockstrategy: 'umowchuwowiest',
        duration: 'twentyfour',
        rendering: 'fall',
    }),
    getYaosNotes({
        blockresolution: 'highregular',
        blockstrategy: 'umowchuwowiest',
        duration: 'twentyfour',
        rendering: 'spring',
    }),
    getYaosNotes({
        blockresolution: 'highregular',
        blockstrategy: 'umowchuwowiest',
        duration: 'twentyfour',
        rendering: 'summer',
    }),
])

const experimentWithUmowwwPart: Part = sequence([
    getYaosNotes({
        blockresolution: 'lowregular',
        blockstrategy: 'umowchuwowiest',
        duration: 'twentyfour',
        rendering: 'fall',
    }),
    getYaosNotes({
        blockresolution: 'lowregular',
        blockstrategy: 'umowchuwowiest',
        duration: 'twentyfour',
        rendering: 'spring',
    }),
    getYaosNotes({
        blockresolution: 'lowregular',
        blockstrategy: 'umowchuwowiest',
        duration: 'twentyfour',
        rendering: 'summer',
    }),
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
