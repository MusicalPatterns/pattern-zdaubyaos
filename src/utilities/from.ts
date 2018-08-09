// tslint:disable:variable-name no-any

import { Blocks } from '../types'
import { Block } from './nominalTypes'

const Block: (block: Block) => number =
    (block: Block): number => block as any

const Blocks: (_: Array<Block | number> | Blocks) => number[] =
    (blocks: Array<Block | number> | Blocks): number[] => blocks as any

export {
    Block,
    Blocks,
}
