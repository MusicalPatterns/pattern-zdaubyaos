import { as, Block, repeat } from '@musical-patterns/utilities'
import { OtherBlocks } from './types'

const computeOtherBlocks: () => OtherBlocks =
    (): OtherBlocks => {
        const backboneFifteen: Block = as.Block(repeat([ 1, 2 ], as.Cardinal<number[]>(5)))

        const backboneTwentyfour: Block = as.Block(repeat([ 1, 3 ], as.Cardinal<number[]>(6)))

        const shiftyFifteen: Block = as.Block([
            2, 1,
            5, 1,
            2, 4,
        ])

        const shiftyTwentyfour: Block = as.Block([
            3, 1,
            3, 1,
            3, 4,
            5, 4,
        ])

        const shiftyTwentyfourVariant: Block = as.Block([
            4, 7, 4,
            1, 3, 1, 3, 1,
        ])

        const shifty: Block = as.Block([
            2, 1, 2, 1, 2, 1, 2, 1, 2, 1,
            2, 1, 2, 1, 2, 3, 4,
            3, 2, 1, 2, 1, 2, 1, 2, 1,
            3, 5, 7, 9,
            11, 13,
            15, 17, 19, 21,
            // (this spreads across 3 bars)
            // (this spreads across 3 bars)
            23, 25,
            // (this spreads across 2 bars)
        ])

        const secretLongChord: Block = as.Block([ 24 ])

        return {
            backboneFifteen,
            backboneTwentyfour,
            secretLongChord,
            shifty,
            shiftyFifteen,
            shiftyTwentyfour,
            shiftyTwentyfourVariant,
        }
    }

export {
    computeOtherBlocks,
}
