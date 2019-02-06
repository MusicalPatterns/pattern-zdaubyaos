import { NoteSpec } from '@musical-patterns/compiler'
import { from, Ordinal, SumOfIndices, to } from '@musical-patterns/utilities'

const calculateTotalZdaubyaosDuration: (noteSpecs: NoteSpec[]) => SumOfIndices =
    (noteSpecs: NoteSpec[]): SumOfIndices =>
        noteSpecs.reduce(
            (accumulator: SumOfIndices, { durationSpec }: NoteSpec) => {
                const durationIndex: Ordinal = durationSpec && durationSpec.index || to.Ordinal(0)

                return to.SumOfIndices(from.SumOfIndices(accumulator) + from.Ordinal(durationIndex) + 1)
            },
            to.SumOfIndices(0),
        )

export {
    calculateTotalZdaubyaosDuration,
}
