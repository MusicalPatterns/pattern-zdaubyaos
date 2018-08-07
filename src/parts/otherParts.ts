import repeatCall from '../../../../src/repeatCall'
import sequence from '../../../../src/sequence'
import { backboneFifteenANotes, backboneTwentyfourCNotes } from '../notes/backboneNotes'
import getYaosNotes from '../notes/getYaosNotes'
import { thirtyfiveANotes, thirtyfiveBNotes, thirtyfiveCNotes } from '../notes/otherNotes'
import { Part } from '../types'
import adjustPitchIndex from '../adjustPitchIndex'
import repeat from '../../../../src/repeat'

const trueYetOfBackbonePart: Part = sequence([
    repeatCall(() => backboneFifteenANotes, 8),
    repeatCall(() => backboneTwentyfourCNotes, 4),
])

const experimentWithIestttPart: Part = sequence([
    adjustPitchIndex(repeatCall(() => getYaosNotes({
        blockresolution: 'highregular',
        blockstrategy: 'umowchuwowiest',
        duration: 'twentyfour',
        rendering: 'fall',
    }),        1), 2),
    // repeatCall(() => getYaosNotes({
    //     blockresolution: 'highregular',
    //     blockstrategy: 'umowchuwowiest',
    //     duration: 'twentyfour',
    //     rendering: 'spring',
    // }),        1),
    // repeatCall(() => getYaosNotes({
    //     blockresolution: 'highregular',
    //     blockstrategy: 'umowchuwowiest',
    //     duration: 'twentyfour',
    //     rendering: 'summer',
    // }),        1),
])

const experimentWithUmowwwPart: Part = sequence([
    adjustPitchIndex(repeatCall(() => getYaosNotes({
        blockresolution: 'lowregular',
        blockstrategy: 'umowchuwowiest',
        duration: 'twentyfour',
        rendering: 'fall',
    }),        1), 2),
    // repeatCall(() => getYaosNotes({
    //     blockresolution: 'lowregular',
    //     blockstrategy: 'umowchuwowiest',
    //     duration: 'twentyfour',
    //     rendering: 'spring',
    // }),        1),
    // repeatCall(() => getYaosNotes({
    //     blockresolution: 'lowregular',
    //     blockstrategy: 'umowchuwowiest',
    //     duration: 'twentyfour',
    //     rendering: 'summer',
    // }),        1),
])

const thirtyfiveAPart: Part = repeat(thirtyfiveANotes, 2)

const thirtyfiveBPart: Part = repeat(thirtyfiveBNotes, 2)

const thirtyfiveCPart: Part = repeat(thirtyfiveCNotes, 2)

export {
    trueYetOfBackbonePart,
    experimentWithIestttPart,
    experimentWithUmowwwPart,
    thirtyfiveAPart,
    thirtyfiveBPart,
    thirtyfiveCPart,
}
