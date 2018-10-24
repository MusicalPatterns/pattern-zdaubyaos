import { NoteSpec, NoteSpecs } from '../../../../src/compile/types'
import { Index } from '../../../../src/utilities/nominalTypes'

const applyScaleIndex: (noteSpecs: NoteSpecs, scaleIndex: Index) => NoteSpecs =
    (noteSpecs: NoteSpecs, scaleIndex: Index): NoteSpecs =>
        noteSpecs.map((noteSpec: NoteSpec): NoteSpec => ({
            ...noteSpec,
            pitchSpec: { ...noteSpec.pitchSpec, scaleIndex },
        }))

export default applyScaleIndex
