import { Contour } from '../types'

const shiftyFifteen: Contour = [
    2, 1,
    5, 1,
    2, 4,
]

const shiftyTwentyfour: Contour = [
    3, 1,
    3, 1,
    3, 4,
    5, 4,
]

const shiftyTwentyfourVariant: Contour = [
    4, 7, 4,
    1, 3, 1, 3, 1,
]

const shifty: Contour = [
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
]

export {
    shiftyFifteen,
    shiftyTwentyfour,
    shiftyTwentyfourVariant,
    shifty,
}
