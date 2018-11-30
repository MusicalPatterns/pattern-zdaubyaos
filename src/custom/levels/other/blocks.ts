import { Block, to as patternTo } from '@musical-patterns/pattern'
import { DictionaryOf, repeat, to } from '@musical-patterns/utilities'

const buildOtherBlocks: () => DictionaryOf<Block> =
    (): DictionaryOf<Block> => {
        const backboneFifteenBlock: Block = patternTo.Block(repeat([ 1, 2 ], to.Count(5)))

        const backboneTwentyfourBlock: Block = patternTo.Block(repeat([ 1, 3 ], to.Count(6)))

        const shiftyFifteenBlock: Block = patternTo.Block([
            2, 1,
            5, 1,
            2, 4,
        ])

        const shiftyTwentyfourBlock: Block = patternTo.Block([
            3, 1,
            3, 1,
            3, 4,
            5, 4,
        ])

        const shiftyTwentyfourVariantBlock: Block = patternTo.Block([
            4, 7, 4,
            1, 3, 1, 3, 1,
        ])

        const shiftyBlock: Block = patternTo.Block([
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

        const secretLongChordBlock: Block = patternTo.Block([ 24 ])

        return {
            backboneFifteenBlock,
            backboneTwentyfourBlock,
            secretLongChordBlock,
            shiftyBlock,
            shiftyFifteenBlock,
            shiftyTwentyfourBlock,
            shiftyTwentyfourVariantBlock,
        }
    }

export {
    buildOtherBlocks,
}
