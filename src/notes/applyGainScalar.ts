import { applyScale, NoteSpec, Scalar } from '../../../../src'

const applyGainScalar: (noteSpecs: NoteSpec[], gainScalar: Scalar) => NoteSpec[] =
    (noteSpecs: NoteSpec[], gainScalar: Scalar): NoteSpec[] =>
        noteSpecs.map((noteSpec: NoteSpec): NoteSpec => ({
            ...noteSpec,
            gainSpec: noteSpec.gainSpec && {
                ...noteSpec.gainSpec,
                scalar: applyScale(noteSpec.gainSpec.scalar, gainScalar),
            },
        }))

export {
    applyGainScalar,
}
