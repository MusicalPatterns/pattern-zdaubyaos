import { NoteSpec, NoteSpecs } from '../../../../src/compile/types'
import applyScale from '../../../../src/utilities/applyScale'
import { Scalar } from '../../../../src/utilities/nominalTypes'
import * as to from '../../../../src/utilities/to'

const applyDurationScalar: (noteSpecs: NoteSpecs, durationScalar: Scalar) => NoteSpecs =
    (noteSpecs: NoteSpecs, durationScalar: Scalar): NoteSpecs =>
        noteSpecs.map((noteSpec: NoteSpec): NoteSpec => ({
            ...noteSpec,
            durationSpec: noteSpec.durationSpec && {
                ...noteSpec.durationSpec,
                scalar: applyScale(noteSpec.durationSpec.scalar || to.Scalar(1), durationScalar),
            },
        }))

export default applyDurationScalar
