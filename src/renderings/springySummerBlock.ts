import { Offset, Scalar } from '../../../../src/utilities/nominalTypes'
import numbers from '../../../../src/utilities/numbers'
import offset from '../../../../src/utilities/offset'
import scale from '../../../../src/utilities/scale'
import * as to from '../../../../src/utilities/to'
import { Contour, ContourElement } from '../types'
import * as zdaubyaosFrom from '../utilities/from'
import { Block } from '../utilities/nominalTypes'

// tslint:disable-next-line:no-any no-magic-numbers
const SPRINGY_SUMMER_OFFSET: Offset = 3 as any
// tslint:disable-next-line:no-any no-magic-numbers
const SPRINGY_SUMMER_SCALAR: Scalar = 0.5 as any
const EVEN: number = 2

const springySummerBlock: (block: Block) => Contour = (block: Block): Contour =>
    numbers.slice(0, zdaubyaosFrom.Block(block))
        .map((n: number): ContourElement => {
            if (n % EVEN === 0) {
                return [ to.Index(0), to.Time(1) ]
            }

            return [ to.Index(scale(offset(n, SPRINGY_SUMMER_OFFSET), SPRINGY_SUMMER_SCALAR)), to.Time(1) ]
        })

export default springySummerBlock
