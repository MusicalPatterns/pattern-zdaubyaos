import { Note, Scale } from '@musical-patterns/material'
import { Ordinal } from '@musical-patterns/utilities'

const applyScaleIndex: (notes: Note[], scaleIndex: Ordinal<Scale>) => Note[] =
    (notes: Note[], scaleIndex: Ordinal<Scale>): Note[] =>
        notes.map((note: Note): Note => ({
            ...note,
            pitch: { ...note.pitch, scaleIndex },
        }))

export {
    applyScaleIndex,
}
