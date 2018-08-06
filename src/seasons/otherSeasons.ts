import repeatCall from '../../../../src/repeatCall'
import sequence from '../../../../src/sequence'
import { backboneFifteenANotes, backboneTwentyfourCNotes } from '../notes/backboneNotes'
import getYaosNotes from '../notes/getYaosNotes'
import { thirtyfiveANotes, thirtyfiveBNotes, thirtyfiveCNotes } from '../notes/otherNotes'
import { Season } from '../types'

const trueseasonYetOfBackbone: Season = sequence([
    repeatCall(() => backboneFifteenANotes, 8),
    repeatCall(() => backboneTwentyfourCNotes, 4),
])

const experimentseasonWithIesttt: Season = sequence([
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

const experimentseasonWithUmowww: Season = sequence([
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

const thirtyfiveseasonA: Season = thirtyfiveANotes

const thirtyfiveseasonB: Season = thirtyfiveBNotes

const thirtyfiveseasonC: Season = thirtyfiveCNotes

export {
    trueseasonYetOfBackbone,
    experimentseasonWithIesttt,
    experimentseasonWithUmowww,
    thirtyfiveseasonA,
    thirtyfiveseasonB,
    thirtyfiveseasonC,
}
