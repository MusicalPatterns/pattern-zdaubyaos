import { Note } from '@musical-patterns/material'
import { as, Gain, insteadOf, Scalar, UnitScalar, use } from '@musical-patterns/utilities'

const applyGainScalar: (notes: Note[], gainScalar: UnitScalar<Gain>) => Note[] =
    (notes: Note[], gainScalar: UnitScalar<Gain>): Note[] =>
        notes.map((note: Note): Note => ({
            ...note,
            gain: note.gain && {
                ...note.gain,
                scalar: use.UnitScalar(
                    note.gain.scalar || as.Scalar<Gain>(0),
                    insteadOf<UnitScalar, Scalar<Gain>>(gainScalar),
                ),
            },
        }))

export {
    applyGainScalar,
}
