import { Contour, ManualContour } from '../types'
import * as to from '../utilities/to'

const inscapeTwentyfourGlis: Contour = to.Contour([
    9, 7, 5, 3,
])

const noodlingTwentyfourGlis: Contour = to.Contour([
    1, 3, 5, 7, 5, 3,
])

const inscapeTwentyfourTrem: Contour = to.Contour([
    9, 9, 9, 9, 9, 9, 9, 9, 9, 7, 7, 7, 7, 7, 7, 7, 5, 5, 5, 5, 5, 3, 3, 3,
])

const noodlingTwentyfourTrem: Contour = to.Contour([
    1, 3, 3, 3, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7, 7, 5, 5, 5, 5, 5, 3, 3, 3,
])

const inscapeTwentyfourBony: ManualContour = to.ManualContour([
    [9, 1], [9, 3], [9, 1], [9, 3], [9, 1], [7, 3], [7, 1], [7, 3], [5, 1], [5, 3], [5, 1], [3, 3],
])

const noodlingTwentyfourBony: ManualContour = to.ManualContour([
    [1, 1], [3, 3], [5, 1], [5, 3], [5, 1], [7, 3], [7, 1], [7, 3], [5, 1], [5, 3], [5, 1], [3, 3],
])

const superinscapeTwentyfourBony: ManualContour = to.ManualContour([
    [13, 1], [13, 3], [13, 1], [13, 3], [13, 1], [13, 3], [13, 1], [11, 3], [11, 1], [11, 3], [11, 1], [11, 3],
])

export {
    inscapeTwentyfourGlis,
    noodlingTwentyfourGlis,
    inscapeTwentyfourTrem,
    noodlingTwentyfourTrem,
    inscapeTwentyfourBony,
    noodlingTwentyfourBony,
    superinscapeTwentyfourBony,
}
