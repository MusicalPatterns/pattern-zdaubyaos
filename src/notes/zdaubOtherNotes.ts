import { zdaubGlisVariantContour } from '../contours/zdaubOtherContours'
import { glisNoteType } from '../noteTypes'
import { Notes } from '../types'

const zdaubGlisVariantNotes: Notes = zdaubGlisVariantContour.map(glisNoteType)

export {
    zdaubGlisVariantNotes,
}
