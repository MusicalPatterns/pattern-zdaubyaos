import { Note, Notes } from '../../../../src/types'
import { Index } from '../../../../src/utilities/nominalTypes'

const applyScaleIndex: (notes: Notes, scaleIndex: Index) => Notes =
    (notes: Notes, scaleIndex: Index): Notes =>
        notes.map((note: Note): Note => ({ ...note, scaleIndex }))

export default applyScaleIndex
