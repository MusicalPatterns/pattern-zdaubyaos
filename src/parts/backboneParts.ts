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
    repeatCall(() => backboneFifteenANotes, 3),
    repeatCall(() => backboneTwentyfourCNotes, 2),
])

const backboneBPart: Part = sequence([
    repeatCall(() => backboneFifteenBNotes, 3),
    repeatCall(() => backboneTwentyfourENotes, 2),
])

const backboneCPart: Part = sequence([
    repeatCall(() => backboneFifteenCNotes, 3),
    repeatCall(() => backboneTwentyfourGNotes, 2),
])

export {
    backboneAPart,
    backboneBPart,
    backboneCPart,
}
