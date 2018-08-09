import {
    backboneFifteenContour,
    backboneTwentyfourContour,
    secretLongChordContour,
    shiftyContour,
    shiftyFifteenContour,
    shiftyTwentyfourContour,
    shiftyTwentyfourVariantContour,
} from '../contours/otherContours'
import makeNote from '../makeNote'
import { Notes } from '../types'

const secretLongChordNotes: Notes = secretLongChordContour.map(makeNote)
const backboneFifteenNotes: Notes = backboneFifteenContour.map(makeNote)
const backboneTwentyfourNotes: Notes = backboneTwentyfourContour.map(makeNote)
const shiftyFifteenNotes: Notes = shiftyFifteenContour.map(makeNote)
const shiftyTwentyfourNotes: Notes = shiftyTwentyfourContour.map(makeNote)
const shiftyTwentyfourVariantNotes: Notes = shiftyTwentyfourVariantContour.map(makeNote)
const shiftyNotes: Notes = shiftyContour.map(makeNote)

export {
    secretLongChordNotes,
    backboneFifteenNotes,
    backboneTwentyfourNotes,
    shiftyFifteenNotes,
    shiftyTwentyfourNotes,
    shiftyTwentyfourVariantNotes,
    shiftyNotes,
}
