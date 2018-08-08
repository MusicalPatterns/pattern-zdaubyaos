import { Contour, ManualContour } from '../types'
import * as to from '../utilities/to'

const polyrhythmicAscentA: Contour = to.Contour([
    21, 19, 17, 15,
    // Lasts three
    // Lasts three
    13, 11,
    9, 7, 5, 3,
])

const polyrhythmicAscentB: Contour = to.Contour([
    14, 13, 12, 11, 10,
    // Lasts four
    // Lasts four
    // Lasts four
    11, 10, 9,
    // Lasts two
    8, 7,
    6, 5, 4,
])

const polyrhythmicAscentC: Contour = to.Contour([
    25, 23,
    // Lasts two
    21, 19, 17, 15,
    // Lasts three
    // Lasts three
])

const secretLongChord: ManualContour = to.ManualContour([
    [1, 24],
])

const funBetweenFifteenAndTwentyfourMoment: ManualContour = to.ManualContour([
    [0, 2], [5, 1], [6, 4],
])

export {
    polyrhythmicAscentA,
    polyrhythmicAscentB,
    polyrhythmicAscentC,
    secretLongChord,
    funBetweenFifteenAndTwentyfourMoment,
}
