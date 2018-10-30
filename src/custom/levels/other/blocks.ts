import { Block, DictionaryOf, repeat, to } from '../../../../../../src'

const buildOtherBlocks: () => DictionaryOf<Block> =
    (): DictionaryOf<Block> => {
        const backboneFifteenBlock: Block = to.Block(repeat([ 1, 2 ], to.Count(5)))

        const backboneTwentyfourBlock: Block = to.Block(repeat([ 1, 3 ], to.Count(6)))

        const shiftyFifteenBlock: Block = to.Block([
            2, 1,
            5, 1,
            2, 4,
        ])

        const shiftyTwentyfourBlock: Block = to.Block([
            3, 1,
            3, 1,
            3, 4,
            5, 4,
        ])

        const shiftyTwentyfourVariantBlock: Block = to.Block([
            4, 7, 4,
            1, 3, 1, 3, 1,
        ])

        const shiftyBlock: Block = to.Block([
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

        const secretLongChordBlock: Block = to.Block([ 24 ])

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
