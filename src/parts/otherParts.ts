import repeatCall from '../../../../src/repeatCall'
import sequence from '../../../../src/sequence'
import { backboneFifteenANotes, backboneTwentyfourCNotes } from '../notes/backboneNotes'
import getYaosNotes from '../notes/getYaosNotes'
import { thirtyfiveANotes, thirtyfiveBNotes, thirtyfiveCNotes } from '../notes/otherNotes'
import { Part } from '../types'

const trueYetOfBackbonePart: Part = sequence([
    repeatCall(() => backboneFifteenANotes, 8),
    repeatCall(() => backboneTwentyfourCNotes, 4),
])

const experimentWithIestttPart: Part = sequence([
    repeatCall(() => getYaosNotes({
        blockresolution: 'highregular',
        blockstrategy: 'umowchuwowiest',
        duration: 'twentyfour',
        rendering: 'spring',
    }),        3),
    repeatCall(() => getYaosNotes({
        blockresolution: 'highregular',
        blockstrategy: 'umowchuwowiest',
        duration: 'twentyfour',
        rendering: 'summer',
    }),        3),
    repeatCall(() => getYaosNotes({
        blockresolution: 'highregular',
        blockstrategy: 'umowchuwowiest',
        duration: 'twentyfour',
        rendering: 'fall',
    }),        3),
])

const experimentWithUmowwwPart: Part = sequence([
    repeatCall(() => getYaosNotes({
        blockresolution: 'lowregular',
        blockstrategy: 'umowchuwowiest',
        duration: 'twentyfour',
        rendering: 'spring',
    }),        3),
    repeatCall(() => getYaosNotes({
        blockresolution: 'lowregular',
        blockstrategy: 'umowchuwowiest',
        duration: 'twentyfour',
        rendering: 'summer',
    }),        3),
    repeatCall(() => getYaosNotes({
        blockresolution: 'lowregular',
        blockstrategy: 'umowchuwowiest',
        duration: 'twentyfour',
        rendering: 'fall',
    }),        3),
])

const thirtyfiveAPart: Part = thirtyfiveANotes

const thirtyfiveBPart: Part = thirtyfiveBNotes

const thirtyfiveCPart: Part = thirtyfiveCNotes

export {
    trueYetOfBackbonePart,
    experimentWithIestttPart,
    experimentWithUmowwwPart,
    thirtyfiveAPart,
    thirtyfiveBPart,
    thirtyfiveCPart,
}
