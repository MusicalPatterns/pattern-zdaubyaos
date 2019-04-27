import { Note } from '@musical-patterns/material'
import { as, Gain, insteadOf, NormalScalar, Scalar, use } from '@musical-patterns/utilities'

const applyGainScalar: (notes: Note[], gainScalar: NormalScalar<Gain>) => Note[] =
    (notes: Note[], gainScalar: NormalScalar<Gain>): Note[] =>
        notes.map((note: Note): Note => ({
            ...note,
            gain: note.gain && {
                ...note.gain,
                scalar: use.NormalScalar(
                    note.gain.scalar || as.Scalar<Gain>(0),
                    insteadOf<NormalScalar, Scalar<Gain>>(gainScalar),
                ),
            },
        }))

export {
    applyGainScalar,
}
