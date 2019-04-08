import { Note } from '@musical-patterns/material'
import { Amplitude, apply, Scalar } from '@musical-patterns/utilities'

const applyGainScalar: (notes: Note[], gainScalar: Scalar<Amplitude>) => Note[] =
    (notes: Note[], gainScalar: Scalar<Amplitude>): Note[] =>
        notes.map((note: Note): Note => ({
            ...note,
            gain: note.gain && {
                ...note.gain,
                scalar: apply.Scalar(note.gain.scalar, gainScalar),
            },
        }))

export {
    applyGainScalar,
}
