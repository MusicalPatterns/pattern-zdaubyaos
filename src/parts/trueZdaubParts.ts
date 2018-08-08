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
import { zdaubGlisVariantNotes } from '../notes/zdaubOtherNotes'
import {
    inscapeTwentyfourGlisNotes,
    inscapeTwentyfourTremNotes,
    noodlingTwentyfourGlisNotes,
    noodlingTwentyfourTremNotes,
} from '../notes/zdaubTwentyfourNotes'
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
    zdaubGlisVariantNotes,
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
