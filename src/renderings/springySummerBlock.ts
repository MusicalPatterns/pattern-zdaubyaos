import { applyOffset, applyScale, numbers, Offset, Scalar, to } from '../../../../src'
import { Block, from } from '../nominal'
import { Contour, ContourElement } from '../types'

// tslint:disable-next-line:no-any no-magic-numbers
const SPRINGY_SUMMER_OFFSET: Offset = 3 as any
// tslint:disable-next-line:no-any no-magic-numbers
const SPRINGY_SUMMER_SCALAR: Scalar = 0.5 as any
const EVEN: number = 2

const springySummerBlock: (block: Block) => Contour = (block: Block): Contour =>
    numbers.slice(0, from.Block(block))
        .map((n: number): ContourElement => {
            if (n % EVEN === 0) {
                return [ to.Index(0), to.Index(1) ]
            }

            return [ to.Index(applyScale(applyOffset(n, SPRINGY_SUMMER_OFFSET), SPRINGY_SUMMER_SCALAR)), to.Index(1) ]
        })

export {
    springySummerBlock,
}
