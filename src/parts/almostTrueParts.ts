import { Part } from '../types'
import sequence from '../../../../src/utilities/sequence'
import repeatCall from '../../../../src/utilities/repeatCall'
import getYaosNotes from '../notes/getYaosNotes'
import {
    ascentFifteenBonyNotes,
    ascentFifteenGlisNotes,
    ascentFifteenTremNotes,
    escapeFifteenBonyNotes,
    escapeFifteenGlisNotes,
    escapeFifteenTremNotes,
    noodlingFifteenBonyNotes,
    noodlingFifteenGlisNotes,
    noodlingFifteenTremNotes,
} from '../notes/zdaubFifteenNotes'
import {
    inscapeTwentyfourBonyNotes,
    inscapeTwentyfourGlisNotes,
    inscapeTwentyfourTremNotes,
    noodlingTwentyfourBonyNotes,
    noodlingTwentyfourGlisNotes,
    noodlingTwentyfourTremNotes,
} from '../notes/zdaubTwentyfourNotes'

const almostTrueYaosUmowchuwowiestAndInaidjiyaiouzdFallAndPitchAdjustmentPart: Part = sequence([
    repeatCall(() => getYaosNotes('midirregular', 'umowchuwowiest', 'fifteen', 'fall'), 1),
    repeatCall(() => getYaosNotes('midirregular', 'umowchuwowiest', 'fifteen', 'fall'), 1),
    repeatCall(() => getYaosNotes('midirregular', 'inaidjiyaiouzd', 'fifteen', 'fall'), 1),
    repeatCall(() => getYaosNotes('highregular', 'inaidjiyaiouzd', 'fifteen', 'fall'), 1),
    repeatCall(() => getYaosNotes('lowregular', 'inaidjiyaiouzd', 'fifteen', 'fall'), 1),
    repeatCall(() => getYaosNotes('highregular', 'inaidjiyaiouzd', 'fifteen', 'fall'), 1),
    repeatCall(() => getYaosNotes('lowregular', 'inaidjiyaiouzd', 'fifteen', 'fall'), 1),
    repeatCall(() => getYaosNotes('midirregular', 'umowchuwowiest', 'twentyfour', 'fall'), 1),
    repeatCall(() => getYaosNotes('midirregular', 'inaidjiyaiouzd', 'twentyfour', 'fall'), 1),
])

const almostTrueExtendedEndingZdaubTremPart: Part = sequence([
    repeatCall(() => noodlingFifteenTremNotes, 3),
    escapeFifteenTremNotes,
    ascentFifteenTremNotes,
    inscapeTwentyfourTremNotes,
    repeatCall(() => noodlingTwentyfourTremNotes, 5),
])
const almostTrueExtendedEndingZdaubBonyPart: Part = sequence([
    repeatCall(() => noodlingFifteenBonyNotes, 3),
    escapeFifteenBonyNotes,
    ascentFifteenBonyNotes,
    inscapeTwentyfourBonyNotes,
    repeatCall(() => noodlingTwentyfourBonyNotes, 5),
])
const almostTrueExtendedEndingZdaubGlisPart: Part = sequence([
    repeatCall(() => noodlingFifteenGlisNotes, 3),
    escapeFifteenGlisNotes,
    ascentFifteenGlisNotes,
    inscapeTwentyfourGlisNotes,
    repeatCall(() => noodlingTwentyfourGlisNotes, 5),
])

export {
    almostTrueYaosUmowchuwowiestAndInaidjiyaiouzdFallAndPitchAdjustmentPart,
    almostTrueExtendedEndingZdaubTremPart,
    almostTrueExtendedEndingZdaubBonyPart,
    almostTrueExtendedEndingZdaubGlisPart,
}
