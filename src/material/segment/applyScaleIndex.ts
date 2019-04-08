import { Note } from '@musical-patterns/material'
import { Ordinal } from '@musical-patterns/utilities'

const applyScaleIndex: (notes: Note[], scaleIndex: Ordinal) => Note[] =
    (notes: Note[], scaleIndex: Ordinal): Note[] =>
        notes.map((note: Note): Note => ({
            ...note,
            pitch: { ...note.pitch, scaleIndex },
        }))

export {
    applyScaleIndex,
}
