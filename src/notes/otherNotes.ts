import {
    backboneFifteenContour,
    backboneTwentyfourContour,
    secretLongChord,
    shifty,
    shiftyFifteen,
    shiftyTwentyfour,
    shiftyTwentyfourVariant,
} from '../contours/otherContours'
import makeNote from '../makeNote'
import { Notes } from '../types'

const secretLongChordNotes: Notes = secretLongChord.map(makeNote)

const backboneFifteenNotes: Notes = backboneFifteenContour.map(makeNote)

const backboneTwentyfourNotes: Notes = backboneTwentyfourContour.map(makeNote)

const shiftyFifteenNotes: Notes = shiftyFifteen.map(makeNote)

const shiftyTwentyfourNotes: Notes = shiftyTwentyfour.map(makeNote)

const shiftyTwentyfourVariantNotes: Notes = shiftyTwentyfourVariant.map(makeNote)

const shiftyNotes: Notes = shifty.map(makeNote)

export {
    secretLongChordNotes,
    backboneFifteenNotes,
    backboneTwentyfourNotes,
    shiftyFifteenNotes,
    shiftyTwentyfourNotes,
    shiftyTwentyfourVariantNotes,
    shiftyNotes,
}
