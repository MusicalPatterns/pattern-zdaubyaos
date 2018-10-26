import { from, Index, NoteSpec, SumOfIndices, to } from '../../../../src/indexForTest'

const calculateTotalZdaubyaosDuration: (noteSpecs: NoteSpec[]) => SumOfIndices =
    (noteSpecs: NoteSpec[]): SumOfIndices =>
        noteSpecs.reduce(
            (m: SumOfIndices, { durationSpec }: NoteSpec) => {
                const durationIndex: Index = durationSpec && durationSpec.index || to.Index(0)

                return to.SumOfIndices(from.SumOfIndices(m) + from.Index(durationIndex) + 1)
            },
            to.SumOfIndices(0),
        )

export {
    calculateTotalZdaubyaosDuration,
}
