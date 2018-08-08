// tslint:disable:variable-name no-any

import { Block } from '../types'

const Block: (block: Block) => number =
    (block: Block): number => block as any

export {
    Block,
}
