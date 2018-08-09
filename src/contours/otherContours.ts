import repeat from '../../../../src/utilities/repeat'
import { Contour } from '../types'
import * as to from '../utilities/to'

const secretLongChord: Contour = to.Contour([
    [1, 24],
])

const backboneFifteenContour: Contour = to.Contour(repeat([[1, 1], [2, 2]], 5))

const backboneTwentyfourContour: Contour = to.Contour(repeat([[1, 1], [3, 3]], 6))

const shiftyFifteen: Contour = to.Contour([
    [2, 2], [1, 1],
    [5, 5], [1, 1],
    [2, 2], [4, 4],
])

const shiftyTwentyfour: Contour = to.Contour([
    [3, 3], [1, 1],
    [3, 3], [1, 1],
    [3, 3], [4, 4],
    [5, 5], [4, 4],
])

const shiftyTwentyfourVariant: Contour = to.Contour([
    [4, 4], [7, 7], [4, 4],
    [1, 1], [3, 3], [1, 1], [3, 3], [1, 1],
])

const shifty: Contour = to.Contour([
    [2, 2], [1, 1], [2, 2], [1, 1], [2, 2], [1, 1], [2, 2], [1, 1], [2, 2], [1, 1],
    [2, 2], [1, 1], [2, 2], [1, 1], [2, 2], [3, 3], [4, 4],
    [3, 3], [2, 2], [1, 1], [2, 2], [1, 1], [2, 2], [1, 1], [2, 2], [1, 1],
    [3, 3], [5, 5], [7, 7], [9, 9],
    [11, 11], [13, 13],
    [15, 15], [17, 17], [19, 19], [21, 21],
    // (this spreads across 3 bars)
    // (this spreads across 3 bars)
    [23, 23], [25, 25],
    // (this spreads across 2 bars)
])

export {
    secretLongChord,
    backboneFifteenContour,
    backboneTwentyfourContour,
    shiftyFifteen,
    shiftyTwentyfour,
    shiftyTwentyfourVariant,
    shifty,
}
