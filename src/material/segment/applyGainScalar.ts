import { Note } from '@musical-patterns/material'
import { Amplitude, as, insteadOf, Scalar, UnitScalar, use } from '@musical-patterns/utilities'

const applyGainScalar: (notes: Note[], gainScalar: UnitScalar<Amplitude>) => Note[] =
    (notes: Note[], gainScalar: UnitScalar<Amplitude>): Note[] =>
        notes.map((note: Note): Note => ({
            ...note,
            gain: note.gain && {
                ...note.gain,
                scalar: use.UnitScalar(
                    note.gain.scalar || as.Scalar<Amplitude>(0),
                    insteadOf<UnitScalar, Scalar<Amplitude>>(gainScalar),
                ),
            },
        }))

export {
    applyGainScalar,
}
