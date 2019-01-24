import { NoteSpec } from '@musical-patterns/compiler'
import { apply, Scalar } from '@musical-patterns/utilities'

const applyGainScalar: (part: NoteSpec[], gainScalar: Scalar) => NoteSpec[] =
    (part: NoteSpec[], gainScalar: Scalar): NoteSpec[] =>
        part.map((noteSpec: NoteSpec): NoteSpec => ({
            ...noteSpec,
            gainSpec: noteSpec.gainSpec && {
                ...noteSpec.gainSpec,
                scalar: apply.Scalar(noteSpec.gainSpec.scalar, gainScalar),
            },
        }))

export {
    applyGainScalar,
}
