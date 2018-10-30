import { applyScale, NoteSpec, Part, Scalar } from '../../../../../src'

const applyGainScalar: (part: Part, gainScalar: Scalar) => Part =
    (part: Part, gainScalar: Scalar): Part =>
        part.map((noteSpec: NoteSpec): NoteSpec => ({
            ...noteSpec,
            gainSpec: noteSpec.gainSpec && {
                ...noteSpec.gainSpec,
                scalar: applyScale(noteSpec.gainSpec.scalar, gainScalar),
            },
        }))

export {
    applyGainScalar,
}
