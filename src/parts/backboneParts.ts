import repeatCall from '../../../../src/repeatCall'
import sequence from '../../../../src/sequence'
import adjustPitchIndex from '../adjustPitchIndex'
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
    adjustPitchIndex(repeatCall(() => backboneFifteenANotes, 3), 1),
    adjustPitchIndex(repeatCall(() => backboneTwentyfourCNotes, 2), 1),
])

const backboneBPart: Part = sequence([
    adjustPitchIndex(repeatCall(() => backboneFifteenBNotes, 3), 1),
    adjustPitchIndex(repeatCall(() => backboneTwentyfourENotes, 2), 1),
])

const backboneCPart: Part = sequence([
    adjustPitchIndex(repeatCall(() => backboneFifteenCNotes, 3), 1),
    adjustPitchIndex(repeatCall(() => backboneTwentyfourGNotes, 2), 1),
])

export {
    backboneAPart,
    backboneBPart,
    backboneCPart,
}
