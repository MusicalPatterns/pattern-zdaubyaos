import { NoteSpec, NoteSpecs } from '../../../../src/compile/types'
import * as from from '../../../../src/utilities/from'
import { Index } from '../../../../src/utilities/nominalTypes'
import * as to from '../../../../src/utilities/to'

const calculateTotalZdaubyaosDuration: (noteSpecs: NoteSpecs) => Index =
    (noteSpecs: NoteSpecs): Index =>
        noteSpecs.reduce(
            (m: Index, { durationSpec }: NoteSpec) =>
                to.Index(from.Index(m) + from.Index(durationSpec && durationSpec.index || to.Index(0)) + 1),
            to.Index(0),
        )

export default calculateTotalZdaubyaosDuration
