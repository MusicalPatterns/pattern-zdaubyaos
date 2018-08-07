import calculateDuration from '../../../../src/calculateDuration'
import repeat from '../../../../src/repeat'
import repeatCall from '../../../../src/repeatCall'
import rest from '../../../../src/rest'
import sequence from '../../../../src/sequence'
import adjustGain from '../adjustGain'
import adjustPitchIndex from '../adjustPitchIndex'
import { backboneFifteenANotes, backboneTwentyfourCNotes } from '../notes/backboneNotes'
import getYaosNotes from '../notes/getYaosNotes'
import { thirtyfiveYaosAccidentInspiredNotes, thirtyfiveYaosBassNotes, thirtyfiveZdaubNotes } from '../notes/otherNotes'
import { Part } from '../types'

const trueYetOfBackbonePart: Part = sequence([
    adjustGain(repeatCall(() => backboneFifteenANotes, 8), 0.33),
    adjustGain(repeatCall(() => backboneTwentyfourCNotes, 4), 0.33),
])

const experimentWithIestttPart: Part = sequence([
    adjustPitchIndex(
        repeatCall(
            () => getYaosNotes({
                blockresolution: 'highregular',
                blockstrategy: 'umowchuwowiest',
                duration: 'twentyfour',
                rendering: 'fall',
            }),
            1,
        ),
        2,
    ),
    repeatCall(
        () => getYaosNotes({
            blockresolution: 'highregular',
            blockstrategy: 'umowchuwowiest',
            duration: 'twentyfour',
            rendering: 'spring',
        }),
        1,
    ),
    repeatCall(
        () => getYaosNotes({
            blockresolution: 'highregular',
            blockstrategy: 'umowchuwowiest',
            duration: 'twentyfour',
            rendering: 'summer',
        }),
        1,
    ),
])

const experimentWithUmowwwPart: Part = sequence([
    adjustPitchIndex(getYaosNotes({
        blockresolution: 'lowregular',
        blockstrategy: 'umowchuwowiest',
        duration: 'twentyfour',
        rendering: 'fall',
    }),              2),
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
    repeat(adjustGain(thirtyfiveYaosBassNotes, 2), 4),
])

const thirtyfiveYaosAccidentInspiredPart: Part = sequence([
    repeat(thirtyfiveYaosAccidentInspiredNotes, 4),
])

const thirtyfiveZdaubPart: Part = sequence([
    repeat(adjustGain(thirtyfiveZdaubNotes, 0.66), 2),
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
