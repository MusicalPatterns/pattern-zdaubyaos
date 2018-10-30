import { from, Index, NoteSpec, Part, SumOfIndices, to } from '../../../../src/indexForTest'

const calculateTotalZdaubyaosDuration: (part: Part) => SumOfIndices =
    (part: Part): SumOfIndices =>
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
