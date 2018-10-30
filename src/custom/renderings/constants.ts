// tslint:disable:no-magic-numbers

import { Block, Count, Index, Offset, Scalar, to } from '../../../../../src'

const SUMMERY_SPRING_OFFSET: Offset = to.Offset(-1.5)
const SUMMERY_SPRING_SCALAR: Scalar = to.Scalar(2)
const SPRINGY_SUMMER_OFFSET: Offset = to.Offset(3)
const SPRINGY_SUMMER_SCALAR: Scalar = to.Scalar(0.5)

const SINGLE_DURATION: Index = to.Index(1)

const FIFTEEN_BONY_BLOCKS: Block = to.Block([ 1, 2 ])
const TWENTYFOUR_BONY_BLOCKS: Block = to.Block([ 1, 3 ])
const FIFTEEN_BONY_BLOCK_COUNT_PER_BAR: Count = to.Count(5)
const TWENTYFOUR_BONY_BLOCK_COUNT_PER_BAR: Count = to.Count(6)

export {
    FIFTEEN_BONY_BLOCKS,
    TWENTYFOUR_BONY_BLOCKS,
    SUMMERY_SPRING_OFFSET,
    SUMMERY_SPRING_SCALAR,
    SPRINGY_SUMMER_OFFSET,
    SPRINGY_SUMMER_SCALAR,
    SINGLE_DURATION,
    FIFTEEN_BONY_BLOCK_COUNT_PER_BAR,
    TWENTYFOUR_BONY_BLOCK_COUNT_PER_BAR,
}
