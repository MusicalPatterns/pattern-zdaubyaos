import { Note } from '@musical-patterns/material'
import { Amplitude, as, insteadOf, NormalScalar, Scalar, use } from '@musical-patterns/utilities'

const applyGainScalar: (notes: Note[], gainScalar: NormalScalar<Amplitude>) => Note[] =
    (notes: Note[], gainScalar: NormalScalar<Amplitude>): Note[] =>
        notes.map((note: Note): Note => ({
            ...note,
            gain: note.gain && {
                ...note.gain,
                scalar: use.NormalScalar(
                    note.gain.scalar || as.Scalar<Amplitude>(0),
                    insteadOf<NormalScalar, Scalar<Amplitude>>(gainScalar),
                ),
            },
        }))

export {
    applyGainScalar,
}
