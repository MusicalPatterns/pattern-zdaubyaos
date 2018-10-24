import { NoteSpec, NoteSpecs } from '../../../../src/compile/types'
import * as from from '../../../../src/utilities/from'
import { Index, SumOfIndices } from '../../../../src/utilities/nominalTypes'
import * as to from '../../../../src/utilities/to'

const calculateTotalZdaubyaosDuration: (noteSpecs: NoteSpecs) => SumOfIndices =
    (noteSpecs: NoteSpecs): SumOfIndices =>
        noteSpecs.reduce(
            (m: SumOfIndices, { durationSpec }: NoteSpec) => {
                const durationIndex: Index = durationSpec && durationSpec.index || to.Index(0)

                return to.SumOfIndices(from.SumOfIndices(m) + from.Index(durationIndex) + 1)
            },
            to.SumOfIndices(0),
        )

export default calculateTotalZdaubyaosDuration
