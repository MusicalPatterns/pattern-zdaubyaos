import { Note, Notes } from '../../../../src/types'
import { Offset } from '../../../../src/utilities/nominalTypes'
import offset from '../../../../src/utilities/offset'

const offsetPitchIndex: (notes: Notes, pitchIndexOffset: Offset) => Notes =
    (notes: Notes, pitchIndexOffset: Offset): Notes =>
        notes.map((note: Note): Note => ({...note, pitchIndex: offset(note.pitchIndex, pitchIndexOffset)}))

export default offsetPitchIndex
