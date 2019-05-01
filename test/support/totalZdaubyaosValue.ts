import { computeNotesValueIndexSum, Note } from '@musical-patterns/material'
import { as, Scalar, translateFromZeroIndexedToOneIndexed, Value } from '@musical-patterns/utilities'

const computeTotalZdaubyaosValue: (notes: Note[]) => number =
    (notes: Note[]): number => {
        const notesWithValueIndicesAdjustedToBeOneIndexed: Note[] = notes.map((note: Note) => ({
            ...note,
            value: {
                ...note.value,
                index: note.value && note.value.index ?
                    translateFromZeroIndexedToOneIndexed(note.value.index) :
                    as.Ordinal<Array<Scalar<Value>>>(1),
            },
        }))

        return computeNotesValueIndexSum(notesWithValueIndicesAdjustedToBeOneIndexed)
    }

export {
    computeTotalZdaubyaosValue,
}
