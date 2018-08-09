import {
    backboneFifteenContour,
    backboneTwentyfourContour,
    secretLongChord,
    shifty,
    shiftyFifteen,
    shiftyTwentyfour,
    shiftyTwentyfourVariant,
} from '../contours/otherContours'
import { glisNoteType, manualNoteType } from '../noteTypes'
import { Notes } from '../types'

const secretLongChordNotes: Notes = secretLongChord.map(manualNoteType)

const backboneFifteenNotes: Notes = backboneFifteenContour.map(glisNoteType)

const backboneTwentyfourNotes: Notes = backboneTwentyfourContour.map(glisNoteType)

const shiftyFifteenNotes: Notes = shiftyFifteen.map(glisNoteType)

const shiftyTwentyfourNotes: Notes = shiftyTwentyfour.map(glisNoteType)

const shiftyTwentyfourVariantNotes: Notes = shiftyTwentyfourVariant.map(glisNoteType)

const shiftyNotes: Notes = shifty.map(glisNoteType)

export {
    secretLongChordNotes,
    backboneFifteenNotes,
    backboneTwentyfourNotes,
    shiftyFifteenNotes,
    shiftyTwentyfourNotes,
    shiftyTwentyfourVariantNotes,
    shiftyNotes,
}
