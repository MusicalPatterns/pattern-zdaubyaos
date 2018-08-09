// tslint:disable:variable-name no-any

import { Blocks } from '../types'
import { Block, ContourElement } from './nominalTypes'

const Block: (block: Block) => number =
    (block: Block): number => block as any

const ContourElement: (contourElement: ContourElement) => number =
    (contourElement: ContourElement): number => contourElement as any

const Blocks: (_: Array<Block | number> | Blocks) => number[] =
    (blocks: Array<Block | number> | Blocks): number[] => blocks as any

export {
    Block,
    ContourElement,
    Blocks,
}
