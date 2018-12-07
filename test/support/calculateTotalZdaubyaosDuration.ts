import { NoteSpec } from '@musical-patterns/compiler'
import { from, Index, SumOfIndices, to } from '@musical-patterns/utilities'

const calculateTotalZdaubyaosDuration: (noteSpecs: NoteSpec[]) => SumOfIndices =
    (noteSpecs: NoteSpec[]): SumOfIndices =>
        noteSpecs.reduce(
            (accumulator: SumOfIndices, { durationSpec }: NoteSpec) => {
                const durationIndex: Index = durationSpec && durationSpec.index || to.Index(0)

                return to.SumOfIndices(from.SumOfIndices(accumulator) + from.Index(durationIndex) + 1)
            },
            to.SumOfIndices(0),
        )

export {
    calculateTotalZdaubyaosDuration,
}
