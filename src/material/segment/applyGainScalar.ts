import { Note } from '@musical-patterns/material'
import { Amplitude, as, insteadOf, NormalScalar, Scalar, use } from '@musical-patterns/utilities'

const applyGainScalar: (notes: Note[], gainScalar: NormalScalar<Amplitude>) => Note[] =
    (notes: Note[], gainScalar: NormalScalar<Amplitude>): Note[] =>
        notes.map((note: Note): Note => ({
            ...note,
            gain: note.gain && {
                ...note.gain,
                scalar: use.Scalar(
                    note.gain.scalar || as.Scalar<Scalar>(0),
                    insteadOf<Scalar, Scalar<Scalar>>(gainScalar),
                ),
            },
        }))

export {
    applyGainScalar,
}
