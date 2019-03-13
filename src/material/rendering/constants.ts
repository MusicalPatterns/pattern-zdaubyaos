// tslint:disable no-magic-numbers

import { Block, Cardinal, negative, Scalar, to, Translation } from '@musical-patterns/utilities'

const SUMMERY_SPRING_TRANSLATION: Translation = to.Translation(negative(1.5))
const SPRINGY_SUMMER_TRANSLATION: Translation = to.Translation(3)

const SINGLE_DURATION: number = 1

const FIFTEEN_BONY_BLOCKS: Block = to.Block([ 1, 2 ])
const TWENTYFOUR_BONY_BLOCKS: Block = to.Block([ 1, 3 ])
const FIFTEEN_BONY_BLOCK_COUNT_PER_BAR: Cardinal = to.Cardinal(5)
const TWENTYFOUR_BONY_BLOCK_COUNT_PER_BAR: Cardinal = to.Cardinal(6)

export {
    FIFTEEN_BONY_BLOCKS,
    TWENTYFOUR_BONY_BLOCKS,
    SUMMERY_SPRING_TRANSLATION,
    SPRINGY_SUMMER_TRANSLATION,
    SINGLE_DURATION,
    FIFTEEN_BONY_BLOCK_COUNT_PER_BAR,
    TWENTYFOUR_BONY_BLOCK_COUNT_PER_BAR,
}
