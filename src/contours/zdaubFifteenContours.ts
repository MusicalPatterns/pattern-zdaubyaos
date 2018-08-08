import { Contour, ManualContour } from '../types'
import * as to from '../utilities/to'

const noodlingFifteenGlis: Contour = to.Contour([
    3, 4, 3, 2, 1, 2,
])

const escapeFifteenGlis: Contour = to.Contour([
    3, 4, 3, 2, 3,
])

const ascentFifteenGlis: Contour = to.Contour([
    4, 5, 6,
    7, 8,
    9, 10, 11,
    // Lasts 2 bars
])

const noodlingFifteenTrem: Contour = to.Contour([
    3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 2, 2, 1, 2, 2,
])

const escapeFifteenTrem: Contour = to.Contour([
    3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 2, 2, 3, 3, 3,
])

const ascentFifteenTrem: Contour = to.Contour([
    4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6,
    7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8,
    9, 9, 9, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10,
    10, 10, 10, 10, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11,
])

const noodlingFifteenBony: ManualContour = to.ManualContour([
    [3, 1], [3, 2], [4, 1], [4, 2], [4, 1], [3, 2], [3, 1], [2, 2], [1, 1], [2, 2],
])

const escapeFifteenBony: ManualContour = to.ManualContour([
    [3, 1], [3, 2], [4, 1], [4, 2], [4, 1], [3, 2], [3, 1], [2, 2], [3, 1], [3, 2],
])

const ascentFifteenBony: ManualContour = to.ManualContour([
    [4, 1], [4, 2], [4, 1], [5, 2], [5, 1], [5, 2], [6, 1], [6, 2], [6, 1], [6, 2],
    [7, 1], [7, 2], [7, 1], [7, 2], [7, 1], [8, 2], [8, 1], [8, 2], [8, 1], [8, 2],
    [9, 1], [9, 2], [9, 1], [9, 2], [9, 1], [9, 2], [10, 1], [10, 2], [10, 1], [10, 2],
    [10, 1], [10, 2], [10, 1], [11, 2], [11, 1], [11, 2], [11, 1], [11, 2], [11, 1], [11, 2],
])

export {
    noodlingFifteenGlis,
    escapeFifteenGlis,
    ascentFifteenGlis,
    noodlingFifteenTrem,
    escapeFifteenTrem,
    ascentFifteenTrem,
    noodlingFifteenBony,
    escapeFifteenBony,
    ascentFifteenBony,
}
