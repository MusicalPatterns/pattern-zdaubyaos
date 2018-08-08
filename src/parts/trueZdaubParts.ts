import repeatCall from '../../../../src/utilities/repeatCall'
import sequence from '../../../../src/utilities/sequence'
import {
    ascentFifteenGlisNotes,
    ascentFifteenTremNotes,
    escapeFifteenGlisNotes,
    escapeFifteenTremNotes,
    noodlingFifteenGlisNotes,
    noodlingFifteenTremNotes,
} from '../notes/zdaubFifteenNotes'
import {
    inscapeTwentyfourGlisNotes,
    inscapeTwentyfourTremNotes,
    noodlingTwentyfourGlisNotes,
    noodlingTwentyfourTremNotes,
} from '../notes/zdaubTwentyfourNotes'
import { glisNoteType } from '../noteTypes'
import { Part } from '../types'

const trueZdaubGlisPart: Part = sequence([
    repeatCall(() => noodlingFifteenGlisNotes, 3),
    escapeFifteenGlisNotes,
    ascentFifteenGlisNotes,
    inscapeTwentyfourGlisNotes,
    repeatCall(() => noodlingTwentyfourGlisNotes, 3),
])

const trueZdaubGlisVariantPart: Part = sequence([
    repeatCall(() => noodlingFifteenGlisNotes, 4),
    escapeFifteenGlisNotes,
    [
        4, 5, 6,
        7, 8,
        9, 8,
        6, 4, 2, 4, 6,
        8, 6, 4, 2, 4,
        6, 4, 2, 4, 6,
        8, 6, 4, 2, 4, 2,
    ].map(glisNoteType),
])

const trueZdaubTremPart: Part = sequence([
    repeatCall(() => noodlingFifteenTremNotes, 3),
    escapeFifteenTremNotes,
    ascentFifteenTremNotes,
    inscapeTwentyfourTremNotes,
    repeatCall(() => noodlingTwentyfourTremNotes, 3),
])

export {
    trueZdaubTremPart,
    trueZdaubGlisPart,
    trueZdaubGlisVariantPart,
}
