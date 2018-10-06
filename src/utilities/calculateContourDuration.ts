import * as from from '../../../../src/utilities/from'
import { Time } from '../../../../src/utilities/nominalTypes'
import * as to from '../../../../src/utilities/to'
import { Contour, ContourElement } from '../types'

const calculateContourDuration: (notes: Contour) => Time =
    (notes: Contour): Time =>
        notes.reduce((m: Time, [ _, duration ]: ContourElement) =>
                to.Time(from.Time(m) + from.Time(duration)),
                     to.Time(0))

export default calculateContourDuration
