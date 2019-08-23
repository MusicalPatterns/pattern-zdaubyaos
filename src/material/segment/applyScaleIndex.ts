import { Note, Scale } from '@musical-patterns/material'
import { as, Ordinal, Pitch } from '@musical-patterns/utilities'

const applyScaleIndex: (notes: Note[], scaleIndex?: Ordinal<Array<Scale<Pitch>>>) => Note[] =
    (notes: Note[], scaleIndex?: Ordinal<Array<Scale<Pitch>>>): Note[] =>
        notes.map((note: Note): Note => ({
            ...note,
            pitch: { ...note.pitch, scaleIndex: scaleIndex || as.Ordinal<Array<Scale<Pitch>>>(0) },
        }))

export {
    applyScaleIndex,
}
