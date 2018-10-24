import * as from from '../../../../src/utilities/from'
import { Index } from '../../../../src/utilities/nominalTypes'
import * as to from '../../../../src/utilities/to'
import { Contour, ContourElement } from '../types'

const calculateContourDuration: (notes: Contour) => Index =
    (notes: Contour): Index =>
        notes.reduce(
            (m: Index, [ _, duration ]: ContourElement) =>
                to.Index(from.Index(m) + from.Index(duration)),
            to.Index(0),
        )

export default calculateContourDuration
