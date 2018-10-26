import { ONE } from '../../../../src'
import { Block, from, to } from '../nominal'
import { Contour } from '../types'

const fallBlock: (block: Block) => Contour = (block: Block): Contour =>
    to.Contour([ [ ONE, ONE ], [ from.Block(block) - ONE, from.Block(block) - ONE ] ])

export {
    fallBlock,
}
