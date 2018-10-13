import { Offset, Scalar } from '../../../src/utilities/nominalTypes'
import numbers from '../../../src/utilities/numbers'
import offset from '../../../src/utilities/offset'
import * as to from '../../../src/utilities/to'

// tslint:disable-next-line:no-any no-magic-numbers
const SUPER: Offset = 1 as any
// tslint:disable-next-line:no-any no-magic-numbers
const DUPER: Offset = 2 as any

const subparticularSeriesScale: Scalar[] = numbers.map((n: number): Scalar =>
    to.Scalar(n / offset(n, SUPER)))

const superparticularSeriesScale: Scalar[] = numbers.map((n: number): Scalar =>
    to.Scalar(offset(n, SUPER) / (n)))

const dubparticularSeriesScale: Scalar[] = numbers.map((n: number): Scalar =>
    to.Scalar(n / offset(n, DUPER)))

const duperparticularSeriesScale: Scalar[] = numbers.map((n: number): Scalar =>
    to.Scalar(offset(n, DUPER) / (n)))

export {
    subparticularSeriesScale,
    superparticularSeriesScale,
    dubparticularSeriesScale,
    duperparticularSeriesScale,
}
