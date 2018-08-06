import repeat from '../../../../src/repeat'
import sequence from '../../../../src/sequence'
import { backboneFifteenANotes, backboneTwentyfourCNotes } from '../notes/backboneNotes'
import { Season } from '../types'
import getYaosNotes from '../notes/getYaosNotes'
import repeatCall from '../../../../src/repeatCall'

const trueseasonYetOfBackbone: Season = sequence([
    repeatCall(() => backboneFifteenANotes, 8),
    repeatCall(() => backboneTwentyfourCNotes, 4),
])

const experimentWithIesttt: Season = sequence([
    repeatCall(() => getYaosNotes({
        duration: 'twentyfour',
        blockstrategy: 'umowchuwowiest',
        blockresolution: 'highregular',
        rendering: 'spring',
    }), 3),
    repeatCall(() => getYaosNotes({
        duration: 'twentyfour',
        blockstrategy: 'umowchuwowiest',
        blockresolution: 'highregular',
        rendering: 'summer',
    }), 3),
    repeatCall(() => getYaosNotes({
        duration: 'twentyfour',
        blockstrategy: 'umowchuwowiest',
        blockresolution: 'highregular',
        rendering: 'fall',
    }), 3),
])

const experimentWithUmowww: Season = sequence([
    repeatCall(() => getYaosNotes({
        duration: 'twentyfour',
        blockstrategy: 'umowchuwowiest',
        blockresolution: 'lowregular',
        rendering: 'spring',
    }), 3),
    repeatCall(() => getYaosNotes({
        duration: 'twentyfour',
        blockstrategy: 'umowchuwowiest',
        blockresolution: 'lowregular',
        rendering: 'summer',
    }), 3),
    repeatCall(() => getYaosNotes({
        duration: 'twentyfour',
        blockstrategy: 'umowchuwowiest',
        blockresolution: 'lowregular',
        rendering: 'fall',
    }), 3),
])

export {
    trueseasonYetOfBackbone,
    experimentWithIesttt,
    experimentWithUmowww,
}
