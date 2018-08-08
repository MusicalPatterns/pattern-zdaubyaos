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
    repeatCall(() => getYaosNotes(
        BlockResolution.MIDIRREGULAR, BlockStrategy.UMOWCHUWOWIEST, BarDuration.FIFTEEN, Rendering.SUMMER,
    ),         4),
    getYaosNotes(BlockResolution.HIGHREGULAR, BlockStrategy.UMOWCHUWOWIEST, BarDuration.FIFTEEN, Rendering.SUMMER),
    getYaosNotes(BlockResolution.LOWREGULAR, BlockStrategy.UMOWCHUWOWIEST, BarDuration.FIFTEEN, Rendering.SUMMER),
    getYaosNotes(BlockResolution.HIGHREGULAR, BlockStrategy.UMOWCHUWOWIEST, BarDuration.FIFTEEN, Rendering.SUMMER),
    getYaosNotes(BlockResolution.LOWREGULAR, BlockStrategy.UMOWCHUWOWIEST, BarDuration.FIFTEEN, Rendering.SUMMER),
    funBetweenFifteenAndTwentyfourMomentNotes,
    repeatCall(() => getYaosNotes(
        BlockResolution.MIDIRREGULAR, BlockStrategy.INAIDJIYAIOUZD, BarDuration.TWENTYFOUR, Rendering.SPRING,
    ),         4),
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
