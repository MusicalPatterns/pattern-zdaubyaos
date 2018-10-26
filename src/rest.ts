import { Index, to } from '../../../src'
import { Contour } from './types'

const rest: (duration: Index) => Contour =
    (duration: Index): Contour =>
        [ [ to.Index(0), duration ] ]

export {
    rest,
}
