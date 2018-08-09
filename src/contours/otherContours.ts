import repeat from '../../../../src/utilities/repeat'
import { Contour, ManualContour } from '../types'
import * as to from '../utilities/to'

const secretLongChord: ManualContour = to.ManualContour([
    [1, 24],
])

const backboneFifteenContour: Contour = to.Contour(repeat([1, 2], 5))

const backboneTwentyfourContour: Contour = to.Contour(repeat([1, 3], 6))

const shiftyFifteen: Contour = to.Contour([
    2, 1,
    5, 1,
    2, 4,
])

const shiftyTwentyfour: Contour = to.Contour([
    3, 1,
    3, 1,
    3, 4,
    5, 4,
])

const shiftyTwentyfourVariant: Contour = to.Contour([
    4, 7, 4,
    1, 3, 1, 3, 1,
])

const shifty: Contour = to.Contour([
    2, 1, 2, 1, 2, 1, 2, 1, 2, 1,
    2, 1, 2, 1, 2, 3, 4,
    3, 2, 1, 2, 1, 2, 1, 2, 1,
    3, 5, 7, 9,
    11, 13,
    15, 17, 19, 21,
    // (this spreads across 3 bars)
    // (this spreads across 3 bars)
    23, 25,
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
