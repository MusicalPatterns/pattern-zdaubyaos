import repeatCall from '../../../../src/utilities/repeatCall'
import sequence from '../../../../src/utilities/sequence'
import getYaosNotes from '../notes/getYaosNotes'
import { backboneFifteenNotes, backboneTwentyfourNotes } from '../notes/otherNotes'
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
import { BarDuration, BlockResolution, BlockStrategy, Part, Rendering } from '../types'

const almostTrueYaosUmowchuwowiestAndInaidjiyaiouzdFallAndPitchAdjustmentPart: Part = sequence([
    getYaosNotes(BlockResolution.MIDIRREGULAR, BlockStrategy.UMOWCHUWOWIEST, BarDuration.FIFTEEN, Rendering.FALL),
    getYaosNotes(BlockResolution.MIDIRREGULAR, BlockStrategy.UMOWCHUWOWIEST, BarDuration.FIFTEEN, Rendering.FALL),
    getYaosNotes(BlockResolution.MIDIRREGULAR, BlockStrategy.INAIDJIYAIOUZD, BarDuration.FIFTEEN, Rendering.FALL),
    getYaosNotes(BlockResolution.HIGHREGULAR, BlockStrategy.INAIDJIYAIOUZD, BarDuration.FIFTEEN, Rendering.FALL),
    getYaosNotes(BlockResolution.LOWREGULAR, BlockStrategy.INAIDJIYAIOUZD, BarDuration.FIFTEEN, Rendering.FALL),
    getYaosNotes(BlockResolution.HIGHREGULAR, BlockStrategy.INAIDJIYAIOUZD, BarDuration.FIFTEEN, Rendering.FALL),
    getYaosNotes(BlockResolution.LOWREGULAR, BlockStrategy.INAIDJIYAIOUZD, BarDuration.FIFTEEN, Rendering.FALL),
    getYaosNotes(BlockResolution.MIDIRREGULAR, BlockStrategy.UMOWCHUWOWIEST, BarDuration.TWENTYFOUR, Rendering.FALL),
    getYaosNotes(BlockResolution.MIDIRREGULAR, BlockStrategy.INAIDJIYAIOUZD, BarDuration.TWENTYFOUR, Rendering.FALL),
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
    repeatCall(() => backboneFifteenNotes, 8),
    repeatCall(() => backboneTwentyfourNotes, 3),
])

const almostTrueZdaubBonyWithSuperinscapePart: Part = sequence([
    repeatCall(() => noodlingFifteenBonyNotes, 3),
    escapeFifteenBonyNotes,
    ascentFifteenBonyNotes,
    superinscapeTwentyfourBonyNotes,
    inscapeTwentyfourBonyNotes,
    noodlingTwentyfourBonyNotes,
])

export {
    almostTrueYaosUmowchuwowiestAndInaidjiyaiouzdFallAndPitchAdjustmentPart,
    almostTrueExtendedEndingZdaubTremPart,
    almostTrueExtendedEndingZdaubBonyPart,
    almostTrueExtendedEndingZdaubGlisPart,
    almostTrueYetOfBackbonePart,
    almostTrueZdaubBonyWithSuperinscapePart,
}
