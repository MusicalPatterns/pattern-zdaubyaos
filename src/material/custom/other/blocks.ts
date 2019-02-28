import { Block, repeat, to } from '@musical-patterns/utilities'
import { OtherBlocks } from './types'

const buildOtherBlocks: () => OtherBlocks =
    (): OtherBlocks => {
        const backboneFifteen: Block = to.Block(repeat([ 1, 2 ], to.Cardinal(5)))

        const backboneTwentyfour: Block = to.Block(repeat([ 1, 3 ], to.Cardinal(6)))

        const shiftyFifteen: Block = to.Block([
            2, 1,
            5, 1,
            2, 4,
        ])

        const shiftyTwentyfour: Block = to.Block([
            3, 1,
            3, 1,
            3, 4,
            5, 4,
        ])

        const shiftyTwentyfourVariant: Block = to.Block([
            4, 7, 4,
            1, 3, 1, 3, 1,
        ])

        const shifty: Block = to.Block([
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

        const secretLongChord: Block = to.Block([ 24 ])

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
    buildOtherBlocks,
}
