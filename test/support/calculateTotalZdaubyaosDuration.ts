import { Note } from '@musical-patterns/compiler'
import { apply, from, Ordinal, sum, to } from '@musical-patterns/utilities'

const calculateTotalZdaubyaosDuration: (notes: Note[]) => number =
    (notes: Note[]): number =>
        notes.reduce(
            (accumulator: number, { duration }: Note): number => {
                const durationIndex: Ordinal = duration && duration.index || to.Ordinal(0)

                return apply.Translation(accumulator, to.Translation(sum(from.Ordinal(durationIndex), 1)))
            },
            0,
        )

export {
    calculateTotalZdaubyaosDuration,
}
