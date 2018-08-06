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
import { Part } from '../types'

const backboneAPart: Part = sequence([
    repeatCall(() => backboneFifteenANotes, 5),
    repeatCall(() => backboneTwentyfourCNotes, 6),
])

const backboneBPart: Part = sequence([
    repeatCall(() => backboneFifteenBNotes, 5),
    repeatCall(() => backboneTwentyfourENotes, 6),
])

const backboneCPart: Part = sequence([
    repeatCall(() => backboneFifteenCNotes, 5),
    repeatCall(() => backboneTwentyfourGNotes, 6),
])

export {
    backboneAPart,
    backboneBPart,
    backboneCPart,
}
