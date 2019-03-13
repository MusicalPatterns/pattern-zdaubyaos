import { Note } from '@musical-patterns/compiler'
import { apply, Translation } from '@musical-patterns/utilities'

const applyPitchIndexTranslation: (notes: Note[], pitchIndexTranslation: Translation) => Note[] =
    (notes: Note[], pitchIndexTranslation: Translation): Note[] =>
        notes.map((note: Note): Note => ({
            ...note,
            pitch: note.pitch && {
                ...note.pitch,
                index: apply.Translation(note.pitch.index, pitchIndexTranslation),
            },
        }))

export {
    applyPitchIndexTranslation,
}
