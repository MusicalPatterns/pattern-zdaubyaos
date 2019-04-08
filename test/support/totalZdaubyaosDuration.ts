import { computeNotesTotalDurationByIndex, Note } from '@musical-patterns/material'
import { to, translateFromZeroIndexedToOneIndexed } from '@musical-patterns/utilities'

const computeTotalZdaubyaosDuration: (notes: Note[]) => number =
    (notes: Note[]): number => {
        const notesWithDurationIndicesAdjustedToBeOneIndexed: Note[] = notes.map((note: Note) => ({
            ...note,
            duration: {
                ...note.duration,
                index: note.duration && note.duration.index ?
                    translateFromZeroIndexedToOneIndexed(note.duration.index) :
                    to.Ordinal(1),
            },
        }))

        return computeNotesTotalDurationByIndex(notesWithDurationIndicesAdjustedToBeOneIndexed)
    }

export {
    computeTotalZdaubyaosDuration,
}
