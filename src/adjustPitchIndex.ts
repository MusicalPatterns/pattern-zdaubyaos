import { Note } from '../../../src/types'
import { Notes } from './types'

const adjustPitchIndex: (notes: Notes, pitchAdjustment?: number) => Notes =
    (notes: Notes, pitchAdjustment: number = 0): Notes =>
        notes.map((note: Note): Note => ({...note, pitchIndex: note.pitchIndex + pitchAdjustment}))

export default adjustPitchIndex
