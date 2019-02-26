import { NoteSpec } from '@musical-patterns/compiler'
import { Amplitude, apply, Scalar } from '@musical-patterns/utilities'

const applyGainScalar: (part: NoteSpec[], gainScalar: Scalar<Amplitude>) => NoteSpec[] =
    (part: NoteSpec[], gainScalar: Scalar<Amplitude>): NoteSpec[] =>
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
