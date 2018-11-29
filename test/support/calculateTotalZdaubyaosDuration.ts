import { from, Index, NoteSpec, PartSpec, SumOfIndices, to } from '@musical-patterns/utilities'

const calculateTotalZdaubyaosDuration: (part: PartSpec) => SumOfIndices =
    (part: PartSpec): SumOfIndices =>
        part.reduce(
            (accumulator: SumOfIndices, { durationSpec }: NoteSpec) => {
                const durationIndex: Index = durationSpec && durationSpec.index || to.Index(0)

                return to.SumOfIndices(from.SumOfIndices(accumulator) + from.Index(durationIndex) + 1)
            },
            to.SumOfIndices(0),
        )

export {
    calculateTotalZdaubyaosDuration,
}
