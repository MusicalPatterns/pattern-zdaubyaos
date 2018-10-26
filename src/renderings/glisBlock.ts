import { to } from '../../../../src'
import { Block, from } from '../nominal'
import { Contour } from '../types'

const glisBlock: (block: Block) => Contour = (block: Block): Contour => ([ [
    to.Index(from.Block(block)),
    to.Index(from.Block(block)),
] ])

export {
    glisBlock,
}
