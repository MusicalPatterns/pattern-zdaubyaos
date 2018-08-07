import { Note } from '../../../../src/types'
import { Notes } from '../types'

const adjustPitchIndex: (notes: Notes, pitchIndexAdjustment?: number) => Notes =
    (notes: Notes, pitchIndexAdjustment: number = 0): Notes =>
        notes.map((note: Note): Note => ({...note, pitchIndex: note.pitchIndex + pitchIndexAdjustment}))

export default adjustPitchIndex
