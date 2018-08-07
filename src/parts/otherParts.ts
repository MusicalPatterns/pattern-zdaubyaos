import repeatCall from '../../../../src/utilities/repeatCall'
import sequence from '../../../../src/utilities/sequence'
import { backboneFifteenANotes, backboneTwentyfourCNotes } from '../notes/backboneNotes'
import getYaosNotes from '../notes/getYaosNotes'
import {
    polyrhythmicAscentANotes,
    polyrhythmicAscentBNotes,
    polyrhythmicAscentCNotes,
    secretLongChordNotes,
} from '../notes/otherNotes'
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
import { Part } from '../types'

const trueYetOfBackbonePart: Part = sequence([
    repeatCall(() => backboneFifteenANotes, 8),
    repeatCall(() => backboneTwentyfourCNotes, 4),
])

const experimentWithIestttPart: Part = sequence([
    getYaosNotes('highregular', 'umowchuwowiest', 'twentyfour', 'fall'),
    getYaosNotes('highregular', 'umowchuwowiest', 'twentyfour', 'spring'),
    getYaosNotes('highregular', 'umowchuwowiest', 'twentyfour', 'summer'),
])
const experimentWithUmowwwPart: Part = sequence([
    getYaosNotes('lowregular', 'umowchuwowiest', 'twentyfour', 'fall'),
    getYaosNotes('lowregular', 'umowchuwowiest', 'twentyfour', 'spring'),
    getYaosNotes('lowregular', 'umowchuwowiest', 'twentyfour', 'summer'),
])

const polyrhythmicYaosFifteenPart: Part = sequence([
    repeatCall(() => getYaosNotes('midirregular', 'inaidjiyaiouzd', 'fifteen', 'summer'), 8),
])
const polyrhythmicYaosTwentyfourPart: Part = sequence([
    repeatCall(() => getYaosNotes('midirregular', 'umowchuwowiest', 'twentyfour', 'summerySpring'), 5),
])

const polyrhythmicAscentAPart: Part = polyrhythmicAscentANotes
const polyrhythmicAscentBPart: Part = polyrhythmicAscentBNotes
const polyrhythmicAscentCPart: Part = polyrhythmicAscentCNotes

const secretLongChordPart: Part = secretLongChordNotes

export {
    trueYetOfBackbonePart,
    experimentWithIestttPart,
    experimentWithUmowwwPart,
    polyrhythmicYaosFifteenPart,
    polyrhythmicYaosTwentyfourPart,
    polyrhythmicAscentAPart,
    polyrhythmicAscentBPart,
    polyrhythmicAscentCPart,
    secretLongChordPart,
}
