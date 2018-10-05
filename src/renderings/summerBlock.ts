import numbers from '../../../../src/utilities/numbers'
import * as to from '../../../../src/utilities/to'
import { Contour, ContourElement } from '../types'
import * as zdaubyaosFrom from '../utilities/from'
import { Block } from '../utilities/nominalTypes'
import * as zdaubyaosTo from '../utilities/to'

const EVEN: number = 2

const summerBlock: (block: Block) => Contour = (block: Block): Contour =>
    zdaubyaosTo.Contour(numbers.slice(0, zdaubyaosFrom.Block(block))
        .map((n: number): ContourElement =>
            n % EVEN === 0 ? [to.Index(0), to.Time(1)] : [to.Index(n), to.Time(1)]))

export default summerBlock
