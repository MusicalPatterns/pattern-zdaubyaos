import { applyOffset, applyScale, EVEN, from, INITIAL, numbers, to } from '../../../../src'
import { Block, from as zdaubyaosFrom } from '../nominal'
import { Contour, ContourElement } from '../types'
import { SPRINGY_SUMMER_OFFSET, SPRINGY_SUMMER_SCALAR } from './constants'

const springySummerBlock: (block: Block) => Contour = (block: Block): Contour =>
    numbers.slice(from.Index(INITIAL), zdaubyaosFrom.Block(block))
        .map((n: number): ContourElement => {
            if (n % EVEN === 0) {
                return [ to.Index(0), to.Index(1) ]
            }

            return [ to.Index(applyScale(applyOffset(n, SPRINGY_SUMMER_OFFSET), SPRINGY_SUMMER_SCALAR)), to.Index(1) ]
        })

export {
    springySummerBlock,
}
