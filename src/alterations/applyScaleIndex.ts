import { Note } from '../../../../src/types'
import { Index } from '../../../../src/utilities/nominalTypes'
import { Notes } from '../types'

const applyScaleIndex: (notes: Notes, scaleIndex: Index) => Notes =
    (notes: Notes, scaleIndex: Index): Notes =>
        notes.map((note: Note): Note => ({...note, scaleIndex}))

export default applyScaleIndex
