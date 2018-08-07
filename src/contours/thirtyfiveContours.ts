import repeat from '../../../../src/utilities/repeat'
import { Contour } from '../types'

const thirtyfiveYaosBass: Contour = repeat([
    1, 5,
    1, 5,
    1, 3,
    1, 5,
    1, 5,
    1, 3,
    1, 2,
],                                         6)

const thirtyfiveYaosAccidentInspired: Contour = repeat([
    1, 2, 3,
    1, 2, 3, 4,
    1, 2, 3,
    1, 2, 3, 4,
    1, 2,
],                                                     6)

const thirtyfiveZdaub: Contour = [
    4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1,
    4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1,
    13, 10, 7, 4, 1,
    4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1,
    19, 16,
    13, 10, 7, 4, 1,
]

const thirtyfiveZdaubOnlyWiggle: Contour = [
    4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1,
    4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1,
]

export {
    thirtyfiveYaosBass,
    thirtyfiveYaosAccidentInspired,
    thirtyfiveZdaub,
    thirtyfiveZdaubOnlyWiggle,
}
