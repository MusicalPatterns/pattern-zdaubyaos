import { repeat, to } from '../../../../src'
import { Block, from as zdaubyaosFrom, to as zdaubyaosTo } from '../nominal'
import { Contour } from '../types'

const tremBlock: (block: Block) => Contour = (block: Block): Contour =>
    zdaubyaosTo.Contour(repeat([ [ zdaubyaosFrom.Block(block), 1 ] ], to.Count(zdaubyaosFrom.Block(block))))

export {
    tremBlock,
}
