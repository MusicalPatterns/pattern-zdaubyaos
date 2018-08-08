// tslint:disable:variable-name no-any

import { Block, Blocks } from '../types'

const Blocks: (_: Array<number | Block>) => Blocks =
    (blocks: Array<number | Block>): Blocks =>
        blocks.map((block: Block | number): Block => block as any)

export {
    Blocks,
}
