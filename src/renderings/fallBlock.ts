import { Block, from, to } from '../nominal'
import { Contour } from '../types'

const fallBlock: (block: Block) => Contour = (block: Block): Contour =>
    to.Contour([ [ 1, 1 ], [ from.Block(block) - 1, from.Block(block) - 1 ] ])

export {
    fallBlock,
}
