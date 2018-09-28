import { Note, Notes } from '../../../../src/types'
import { Scalar } from '../../../../src/utilities/nominalTypes'
import scale from '../../../../src/utilities/scale'

const scaleGain: (notes: Notes, gainScalar: Scalar) => Notes =
    (notes: Notes, gainScalar: Scalar): Notes =>
        notes.map((note: Note): Note => ({...note, gain: scale(note.gain, gainScalar)}))

export default scaleGain
