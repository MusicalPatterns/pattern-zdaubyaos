import { applyScale, NoteSpec, Scalar, to } from '../../../../src'

const applyDurationScalar: (noteSpecs: NoteSpec[], durationScalar: Scalar) => NoteSpec[] =
    (noteSpecs: NoteSpec[], durationScalar: Scalar): NoteSpec[] =>
        noteSpecs.map((noteSpec: NoteSpec): NoteSpec => ({
            ...noteSpec,
            durationSpec: noteSpec.durationSpec && {
                ...noteSpec.durationSpec,
                scalar: applyScale(noteSpec.durationSpec.scalar || to.Scalar(1), durationScalar),
            },
        }))

export {
    applyDurationScalar,
}
