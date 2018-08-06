import repeat from '../../../../src/repeat'
import sequence from '../../../../src/sequence'
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
import { glisNoteType } from '../noteTypes'
import { Season } from '../types'
import repeatCall from '../../../../src/repeatCall'

const trueseasonZdaubGlis: Season = sequence([
    repeatCall(() => noodlingFifteenGlisNotes, 3),
    escapeFifteenGlisNotes,
    ascentFifteenGlisNotes,
    inscapeTwentyfourGlisNotes,
    repeatCall(() => noodlingTwentyfourGlisNotes, 3),
])

const trueseasonZdaubGlisVariant: Season = sequence([
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

const trueseasonZdaubBony: Season = sequence([
    repeatCall(() => noodlingFifteenBonyNotes, 3),
    escapeFifteenBonyNotes,
    ascentFifteenBonyNotes,
    inscapeTwentyfourBonyNotes,
    repeatCall(() => noodlingTwentyfourBonyNotes, 3),
])

const trueseasonZdaubTrem: Season = sequence([
    repeatCall(() => noodlingFifteenTremNotes, 3),
    escapeFifteenTremNotes,
    ascentFifteenTremNotes,
    inscapeTwentyfourTremNotes,
    repeatCall(() => noodlingTwentyfourTremNotes, 3),
])

export {
    trueseasonZdaubTrem,
    trueseasonZdaubBony,
    trueseasonZdaubGlis,
    trueseasonZdaubGlisVariant,
}
