import { numbers, to } from '../../../../src'
import { Block, from as zdaubyaosFrom, to as zdaubyaosTo } from '../nominal'
import { Contour, ContourElement } from '../types'

const EVEN: number = 2

const summerBlock: (block: Block) => Contour = (block: Block): Contour =>
    zdaubyaosTo.Contour(numbers.slice(0, zdaubyaosFrom.Block(block))
        .map((n: number): ContourElement =>
            n % EVEN === 0 ? [ to.Index(0), to.Index(1) ] : [ to.Index(n), to.Index(1) ]))

export {
    summerBlock,
}
