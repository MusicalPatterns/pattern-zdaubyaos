import { Note } from '../../../src/types'
import { Notes } from './types'

const adjustGain: (notes: Notes, gainAdjustment?: number) => Notes =
    (notes: Notes, gainAdjustment: number = 1): Notes =>
        notes.map((note: Note): Note => ({...note, gain: note.gain * gainAdjustment}))

export default adjustGain
