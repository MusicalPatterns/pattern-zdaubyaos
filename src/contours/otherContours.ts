import repeat from '../../../../src/repeat'
import { Contour } from '../types'

const thirtyfiveA: Contour = repeat([
    1, 5,
    1, 5,
    1, 3,
    1, 5,
    1, 5,
    1, 3,
    1, 2,
],                                  6)

const thirtyfiveB: Contour = repeat([
    1, 2, 3,
    1, 2, 3, 4,
    1, 2, 3,
    1, 2, 3, 4,
    1, 2,
],                                  6)

const thirtyfiveC: Contour = [
    19, 16,
    13, 10, 7, 4, 1,
    4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1,
    4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1,
    13, 10, 7, 4, 1,
    4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1,
]

export {
    thirtyfiveA,
    thirtyfiveB,
    thirtyfiveC,
}
