import { Note } from '../../../../src/types'
import { Scalar } from '../../../../src/utilities/nominalTypes'
import scale from '../../../../src/utilities/scale'
import * as to from '../../../../src/utilities/to'
import { Notes } from '../types'

const scaleGain: (notes: Notes, gainScalar?: Scalar) => Notes =
    (notes: Notes, gainScalar: Scalar = to.Scalar(1)): Notes =>
        notes.map((note: Note): Note => ({...note, gain: scale(note.gain, gainScalar)}))

export default scaleGain
