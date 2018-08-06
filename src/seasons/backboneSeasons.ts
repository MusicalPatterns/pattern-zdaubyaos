import repeat from '../../../../src/repeat'
import repeatCall from '../../../../src/repeatCall'
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
    repeatCall(() => backboneFifteenANotes, 5),
    repeatCall(() => backboneTwentyfourCNotes, 6),
])

const backboneseasonB: Season = sequence([
    repeatCall(() => backboneFifteenBNotes, 5),
    repeatCall(() => backboneTwentyfourENotes, 6),
])

const backboneseasonC: Season = sequence([
    repeatCall(() => backboneFifteenCNotes, 5),
    repeatCall(() => backboneTwentyfourGNotes, 6),
])

export {
    backboneseasonA,
    backboneseasonB,
    backboneseasonC,
}
