import { Note } from '@musical-patterns/material'
import { as, insteadOf, Intensity, NormalScalar, Scalar, use } from '@musical-patterns/utilities'

const applyIntensityScalar: (notes: Note[], intensityScalar: NormalScalar<Intensity>) => Note[] =
    (notes: Note[], intensityScalar: NormalScalar<Intensity>): Note[] =>
        notes.map((note: Note): Note => ({
            ...note,
            intensity: note.intensity && {
                ...note.intensity,
                scalar: use.NormalScalar(
                    note.intensity.scalar || as.Scalar<Intensity>(0),
                    insteadOf<NormalScalar, Scalar<Intensity>>(intensityScalar),
                ),
            },
        }))

export {
    applyIntensityScalar,
}
