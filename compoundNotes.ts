// tslint:disable:no-magic-numbers

import repeat from '../../src/repeat'
import sequence from '../../src/sequence'
import { Note } from '../../src/types'
import {
    chuwow,
    chuwowAlt,
    chuwowDoubleAlt,
    iest,
    iestAlt,
    iestDoubleAlt,
    umow,
    umowAlt, umowDoubleAlt,
} from './contours/fifteen'
import {
    twentyfourRhythm,
    twentyfourRhythmAlt,
    twentyfourRhythmDoubleAlt,
} from './contours/twentyfour'
import {
    backboneFifteenHigherAndHigherNotes,
    backboneFifteenHigherNotes,
    backboneFifteenNotes, backboneFifteenShiftedInspiredNotes, backboneTwentyfourHigherAndHigherNotes,
    backboneTwentyfourHigherNotes,
    backboneTwentyfourNotes, backboneTwentyfourShiftedInspiredAltNotes, backboneTwentyfourShiftedInspiredNotes,
} from './notes'
import { umowchuwowiestNoteType } from './noteTypes'

const umowchuwowiestNotes: Note[] = sequence([
    repeat(chuwow, 4),
    iest,
    umow,
    iest,
    umow,
    repeat(twentyfourRhythm, 4),
]).map(umowchuwowiestNoteType)

const umowchuwowiestAltNotes: Note[] = sequence([
    repeat(chuwowAlt, 4),
    iestAlt,
    umowAlt,
    iestAlt,
    umowAlt,
    repeat(twentyfourRhythmAlt, 4),
]).map(umowchuwowiestNoteType)

const umowchuwowiestDoubleAltNotes: Note[] = sequence([
    repeat(chuwowDoubleAlt, 4),
    iestDoubleAlt,
    umowDoubleAlt,
    iestDoubleAlt,
    umowDoubleAlt,
    repeat(twentyfourRhythmDoubleAlt, 4),
]).map(umowchuwowiestNoteType)

const setOfBackboneNotes: Note[] = sequence([
    repeat(backboneFifteenNotes, 5),
    repeat(backboneTwentyfourNotes, 6),
])

const setOfBackboneHigherNotes: Note[] = sequence([
    repeat(backboneFifteenHigherNotes, 5),
    repeat(backboneTwentyfourHigherNotes, 6),
])

const setOfBackboneHigherAndHigherNotes: Note[] = sequence([
    repeat(backboneFifteenHigherAndHigherNotes, 5),
    repeat(backboneTwentyfourHigherAndHigherNotes, 6),
])

const shiftedRhythmNotes: Note[] = sequence([
    repeat(backboneFifteenShiftedInspiredNotes, 3),
    repeat(backboneTwentyfourShiftedInspiredNotes, 4),
    repeat(backboneTwentyfourShiftedInspiredAltNotes, 3),
])

const rightNumberOfBackboneFifteenNotes: Note[] = repeat(backboneFifteenNotes, 8)

const rightNumberOfBackboneTwentyfourNotes: Note[] = repeat(backboneTwentyfourNotes, 4)

const rightNumberOfBackboneNotes: Note[] = sequence([
    rightNumberOfBackboneFifteenNotes,
    rightNumberOfBackboneTwentyfourNotes,
])

export {
    umowchuwowiestNotes,
    umowchuwowiestAltNotes,
    umowchuwowiestDoubleAltNotes,
    setOfBackboneNotes,
    setOfBackboneHigherNotes,
    setOfBackboneHigherAndHigherNotes,
    shiftedRhythmNotes,
    rightNumberOfBackboneNotes,
}
