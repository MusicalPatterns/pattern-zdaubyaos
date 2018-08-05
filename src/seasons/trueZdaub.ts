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
} from '../notes/zdaubFifteen'
import {
    inscapeTwentyfourBonyNotes,
    inscapeTwentyfourGlisNotes,
    inscapeTwentyfourTremNotes,
    noodlingTwentyfourBonyNotes,
    noodlingTwentyfourGlisNotes,
    noodlingTwentyfourTremNotes,
} from '../notes/zdaubTwentyfour'
import { glisNoteType } from '../noteTypes'
import { Season } from '../types'

const trueseasonZdaubGlis: Season = sequence([
    repeat(noodlingFifteenGlisNotes, 3),
    escapeFifteenGlisNotes,
    ascentFifteenGlisNotes,
    inscapeTwentyfourGlisNotes,
    repeat(noodlingTwentyfourGlisNotes, 3),
])

const trueseasonZdaubGlisVariant: Season = sequence([
    repeat(noodlingFifteenGlisNotes, 4),
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
    repeat(noodlingFifteenBonyNotes, 3),
    escapeFifteenBonyNotes,
    ascentFifteenBonyNotes,
    inscapeTwentyfourBonyNotes,
    repeat(noodlingTwentyfourBonyNotes, 3),
])

const trueseasonZdaubTrem: Season = sequence([
    repeat(noodlingFifteenTremNotes, 3),
    escapeFifteenTremNotes,
    ascentFifteenTremNotes,
    inscapeTwentyfourTremNotes,
    repeat(noodlingTwentyfourTremNotes, 3),
])

export {
    trueseasonZdaubTrem,
    trueseasonZdaubBony,
    trueseasonZdaubGlis,
    trueseasonZdaubGlisVariant,
}
