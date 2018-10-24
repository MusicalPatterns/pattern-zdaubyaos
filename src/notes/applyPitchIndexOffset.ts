import { NoteSpec, NoteSpecs } from '../../../../src/compile/types'
import applyOffset from '../../../../src/utilities/applyOffset'
import { Offset } from '../../../../src/utilities/nominalTypes'

const applyPitchIndexOffset: (notes: NoteSpecs, pitchIndexOffset: Offset) => NoteSpecs =
    (noteSpecs: NoteSpecs, pitchIndexOffset: Offset): NoteSpecs =>
        noteSpecs.map((noteSpec: NoteSpec): NoteSpec => ({
            ...noteSpec,
            pitchSpec: noteSpec.pitchSpec && {
                ...noteSpec.pitchSpec,
                index: applyOffset(noteSpec.pitchSpec.index, pitchIndexOffset),
            },
        }))

export default applyPitchIndexOffset
