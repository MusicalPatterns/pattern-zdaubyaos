import { shifty, shiftyFifteen, shiftyTwentyfour, shiftyTwentyfourVariant } from '../contours/shifty'
import { glisNoteType } from '../noteTypes'
import { Notes } from '../types'

const shiftyFifteenNotes: Notes = shiftyFifteen.map(glisNoteType)

const shiftyTwentyfourNotes: Notes = shiftyTwentyfour.map(glisNoteType)

const shiftyTwentyfourVariantNotes: Notes = shiftyTwentyfourVariant.map(glisNoteType)

const shiftyNotes: Notes = shifty.map(glisNoteType)

export {
    shiftyFifteenNotes,
    shiftyTwentyfourNotes,
    shiftyTwentyfourVariantNotes,
    shiftyNotes,
}
