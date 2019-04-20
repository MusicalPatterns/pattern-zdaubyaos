import { Note } from '@musical-patterns/material'
import { Ordinal, Scalar, Translation, use } from '@musical-patterns/utilities'

const applyPitchIndexTranslation: (notes: Note[], pitchIndexTranslation: Translation<Ordinal<Scalar>>) => Note[] =
    (notes: Note[], pitchIndexTranslation: Translation<Ordinal<Scalar>>): Note[] =>
        notes.map((note: Note): Note => ({
            ...note,
            pitch: note.pitch && {
                ...note.pitch,
                index: use.Translation(note.pitch.index, pitchIndexTranslation),
            },
        }))

export {
    applyPitchIndexTranslation,
}
