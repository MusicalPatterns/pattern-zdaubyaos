import * as to from '../../../../src/utilities/to'
import { Contour } from '../types'
import * as zdaubyaosFrom from '../utilities/from'
import { Block } from '../utilities/nominalTypes'

const glisBlock: (block: Block) => Contour = (block: Block): Contour => ([ [
    to.Index(zdaubyaosFrom.Block(block)),
    to.Index(zdaubyaosFrom.Block(block)),
] ])

export default glisBlock
