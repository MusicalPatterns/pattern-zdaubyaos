import repeatCall from '../../../../src/utilities/repeatCall'
import sequence from '../../../../src/utilities/sequence'
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
    repeatCall(() => backboneFifteenANotes, 1),
    repeatCall(() => backboneTwentyfourCNotes, 1),
])

const backboneBPart: Part = sequence([
    repeatCall(() => backboneFifteenBNotes, 1),
    repeatCall(() => backboneTwentyfourENotes, 1),
])

const backboneCPart: Part = sequence([
    repeatCall(() => backboneFifteenCNotes, 1),
    repeatCall(() => backboneTwentyfourGNotes, 1),
])

export {
    backboneAPart,
    backboneBPart,
    backboneCPart,
}
