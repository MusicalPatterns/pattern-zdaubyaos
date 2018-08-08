import repeatCall from '../../../../src/utilities/repeatCall'
import sequence from '../../../../src/utilities/sequence'
import { backboneFifteenANotes, backboneTwentyfourCNotes } from '../notes/backboneNotes'
import getYaosNotes from '../notes/getYaosNotes'
import { funBetweenFifteenAndTwentyfourMomentNotes } from '../notes/otherNotes'
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
    superinscapeTwentyfourBonyNotes,
} from '../notes/zdaubTwentyfourNotes'
import { Part } from '../types'

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

const almostTrueYetOfBackbonePart: Part = sequence([
    repeatCall(() => backboneFifteenANotes, 8),
    repeatCall(() => backboneTwentyfourCNotes, 3),
])

const almostTrueZdaubBonyWithSuperinscapePart: Part = sequence([
    repeatCall(() => noodlingFifteenBonyNotes, 3),
    escapeFifteenBonyNotes,
    ascentFifteenBonyNotes,
    superinscapeTwentyfourBonyNotes,
    inscapeTwentyfourBonyNotes,
    noodlingTwentyfourBonyNotes,
])

const almostTrueYaosUmowchuwowiestSummerToSpringPartWithFun: Part = sequence([
    repeatCall(() => getYaosNotes('midirregular', 'umowchuwowiest', 'fifteen', 'summer'), 4),
    repeatCall(() => getYaosNotes('highregular', 'umowchuwowiest', 'fifteen', 'summer'), 1),
    repeatCall(() => getYaosNotes('lowregular', 'umowchuwowiest', 'fifteen', 'summer'), 1),
    repeatCall(() => getYaosNotes('highregular', 'umowchuwowiest', 'fifteen', 'summer'), 1),
    repeatCall(() => getYaosNotes('lowregular', 'umowchuwowiest', 'fifteen', 'summer'), 1),
    funBetweenFifteenAndTwentyfourMomentNotes,
    repeatCall(() => getYaosNotes('midirregular', 'inaidjiyaiouzd', 'twentyfour', 'spring'), 4),
])

export {
    almostTrueYaosUmowchuwowiestAndInaidjiyaiouzdFallAndPitchAdjustmentPart,
    almostTrueExtendedEndingZdaubTremPart,
    almostTrueExtendedEndingZdaubBonyPart,
    almostTrueExtendedEndingZdaubGlisPart,
    almostTrueYetOfBackbonePart,
    almostTrueZdaubBonyWithSuperinscapePart,
    almostTrueYaosUmowchuwowiestSummerToSpringPartWithFun,
}
