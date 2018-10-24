import { NoteSpec, NoteSpecs } from '../../../../src/compile/types'
import applyScale from '../../../../src/utilities/applyScale'
import { Scalar } from '../../../../src/utilities/nominalTypes'

const applyGainScalar: (noteSpecs: NoteSpecs, gainScalar: Scalar) => NoteSpecs =
    (noteSpecs: NoteSpecs, gainScalar: Scalar): NoteSpecs =>
        noteSpecs.map((noteSpec: NoteSpec): NoteSpec => ({
            ...noteSpec,
            gainSpec: noteSpec.gainSpec && {
                ...noteSpec.gainSpec,
                scalar: applyScale(noteSpec.gainSpec.scalar, gainScalar),
            },
        }))

export default applyGainScalar
