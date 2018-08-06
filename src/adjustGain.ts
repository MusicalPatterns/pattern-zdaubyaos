import { Note } from '../../../src/types'
import { Notes } from './types'

const adjustGain: (notes: Notes, adjustment?: number) => Notes =
    (notes: Notes, adjustment: number = 1): Notes =>
        notes.map((note: Note): Note => ({...note, gain: note.gain * adjustment}))

export default adjustGain
