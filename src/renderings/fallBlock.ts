import { Contour } from '../types'
import * as zdaubyaosFrom from '../utilities/from'
import { Block } from '../utilities/nominalTypes'
import * as zdaubyaosTo from '../utilities/to'

const ONE: number = 1

const fallBlock: (block: Block) => Contour = (block: Block): Contour =>
    zdaubyaosTo.Contour([[ONE, ONE], [zdaubyaosFrom.Block(block) - ONE, zdaubyaosFrom.Block(block) - ONE]])

export default fallBlock
