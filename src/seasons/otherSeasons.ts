import repeat from '../../../../src/repeat'
import sequence from '../../../../src/sequence'
import { backboneFifteenANotes, backboneTwentyfourCNotes } from '../notes/backboneNotes'
import { Season } from '../types'
import getYaosNotes from '../notes/getYaosNotes'

const trueseasonYetOfBackbone: Season = sequence([
    repeat(backboneFifteenANotes, 8),
    repeat(backboneTwentyfourCNotes, 4),
])

const experimentWithIesttt: Season = sequence([
    repeat(getYaosNotes({
        duration: 'twentyfour',
        blockstrategy: 'umowchuwowiest',
        blockresolution: 'highregular',
        rendering: 'spring',
    }), 3),
    repeat(getYaosNotes({
        duration: 'twentyfour',
        blockstrategy: 'umowchuwowiest',
        blockresolution: 'highregular',
        rendering: 'summer',
    }), 3),
    repeat(getYaosNotes({
        duration: 'twentyfour',
        blockstrategy: 'umowchuwowiest',
        blockresolution: 'highregular',
        rendering: 'fall',
    }), 3),
])

const experimentWithUmowww: Season = sequence([
    repeat(getYaosNotes({
        duration: 'twentyfour',
        blockstrategy: 'umowchuwowiest',
        blockresolution: 'lowregular',
        rendering: 'spring',
    }), 3),
    repeat(getYaosNotes({
        duration: 'twentyfour',
        blockstrategy: 'umowchuwowiest',
        blockresolution: 'lowregular',
        rendering: 'summer',
    }), 3),
    repeat(getYaosNotes({
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
