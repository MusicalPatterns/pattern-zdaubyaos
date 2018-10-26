// tslint:disable:variable-name no-any

import { Block } from './types'

const Block: (block: Block) => number =
    (block: Block): number => block as any

const Blocks: (_: Array<Block | number> | Block[]) => number[] =
    (blocks: Array<Block | number> | Block[]): number[] => blocks as any

export {
    Block,
    Blocks,
}
