import repeat from '../../../../src/utilities/repeat'
import { Contour } from '../types'
import * as zdaubyaosFrom from '../utilities/from'
import { Block } from '../utilities/nominalTypes'
import * as zdaubyaosTo from '../utilities/to'

const tremBlock: (block: Block) => Contour = (block: Block): Contour =>
    zdaubyaosTo.Contour(repeat([[zdaubyaosFrom.Block(block), 1]], zdaubyaosFrom.Block(block)))

export default tremBlock
