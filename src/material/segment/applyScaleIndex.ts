import { Note, Scale } from '@musical-patterns/material'
import { Ordinal, Pitch } from '@musical-patterns/utilities'

const applyScaleIndex: (notes: Note[], scaleIndex: Ordinal<Array<Scale<Pitch>>>) => Note[] =
    (notes: Note[], scaleIndex: Ordinal<Array<Scale<Pitch>>>): Note[] =>
        notes.map((note: Note): Note => ({
            ...note,
            pitch: { ...note.pitch, scaleIndex },
        }))

export {
    applyScaleIndex,
}
