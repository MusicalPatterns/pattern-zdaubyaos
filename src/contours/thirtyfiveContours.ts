import repeat from '../../../../src/utilities/repeat'
import { Contour } from '../types'
import * as to from '../utilities/to'

const thirtyfiveYaosBass: Contour = to.Contour(repeat([
    [1, 1], [5, 5],
    [1, 1], [5, 5],
    [1, 1], [3, 3],
    [1, 1], [5, 5],
    [1, 1], [5, 5],
    [1, 1], [3, 3],
    [1, 1], [2, 2],
],                                                    6))

const thirtyfiveYaosAccidentInspired: Contour = to.Contour(repeat([
    [1, 1], [2, 2], [3, 3],
    [1, 1], [2, 2], [3, 3], [4, 4],
    [1, 1], [2, 2], [3, 3],
    [1, 1], [2, 2], [3, 3], [4, 4],
    [1, 1], [2, 2],
],                                                                6))

const thirtyfiveZdaub: Contour = to.Contour([
    [4, 4], [1, 1], [4, 4], [1, 1], [4, 4], [1, 1], [4, 4], [1, 1], [4, 4], [1, 1], [4, 4], [1, 1], [4, 4], [1, 1],
    [4, 4], [1, 1], [4, 4], [1, 1], [4, 4], [1, 1], [4, 4], [1, 1], [4, 4], [1, 1], [4, 4], [1, 1], [4, 4], [1, 1],
    [13, 13], [10, 10], [7, 7], [4, 4], [1, 1],
    [4, 4], [1, 1], [4, 4], [1, 1], [4, 4], [1, 1], [4, 4], [1, 1], [4, 4], [1, 1], [4, 4], [1, 1], [4, 4], [1, 1],
    [19, 19], [16, 16],
    [13, 13], [10, 10], [7, 7], [4, 4], [1, 1],
])

const thirtyfiveZdaubOnlyWiggle: Contour = to.Contour(repeat([
    [4, 4], [1, 1],
],                                                           14))

export {
    thirtyfiveYaosBass,
    thirtyfiveYaosAccidentInspired,
    thirtyfiveZdaub,
    thirtyfiveZdaubOnlyWiggle,
}
