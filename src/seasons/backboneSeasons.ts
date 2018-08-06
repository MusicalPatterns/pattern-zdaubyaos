import repeat from '../../../../src/repeat'
import sequence from '../../../../src/sequence'
import {
    backboneFifteenANotes,
    backboneFifteenBNotes,
    backboneFifteenCNotes,
    backboneTwentyfourCNotes,
    backboneTwentyfourENotes,
    backboneTwentyfourGNotes,
} from '../notes/backboneNotes'
import { Season } from '../types'

const backboneseasonA: Season = sequence([
    repeat(backboneFifteenANotes, 5),
    repeat(backboneTwentyfourCNotes, 6),
])

const backboneseasonB: Season = sequence([
    repeat(backboneFifteenBNotes, 5),
    repeat(backboneTwentyfourENotes, 6),
])

const backboneseasonC: Season = sequence([
    repeat(backboneFifteenCNotes, 5),
    repeat(backboneTwentyfourGNotes, 6),
])

export {
    backboneseasonA,
    backboneseasonB,
    backboneseasonC,
}
