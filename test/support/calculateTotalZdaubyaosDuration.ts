import { NoteSpec } from '@musical-patterns/compiler'
import { apply, from, Ordinal, sum, to } from '@musical-patterns/utilities'

const calculateTotalZdaubyaosDuration: (noteSpecs: NoteSpec[]) => number =
    (noteSpecs: NoteSpec[]): number =>
        noteSpecs.reduce(
            (accumulator: number, { durationSpec }: NoteSpec): number => {
                const durationIndex: Ordinal = durationSpec && durationSpec.index || to.Ordinal(0)

                return apply.Translation(accumulator, to.Translation(sum(from.Ordinal(durationIndex), 1)))
            },
            0,
        )

export {
    calculateTotalZdaubyaosDuration,
}
