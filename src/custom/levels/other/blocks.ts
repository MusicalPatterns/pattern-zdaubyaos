import { DictionaryOf, to } from '@musical-patterns/utilities'
import { Block, repeat, to as labTo } from '../../../../../../src'

const buildOtherBlocks: () => DictionaryOf<Block> =
    (): DictionaryOf<Block> => {
        const backboneFifteenBlock: Block = labTo.Block(repeat([ 1, 2 ], to.Count(5)))

        const backboneTwentyfourBlock: Block = labTo.Block(repeat([ 1, 3 ], to.Count(6)))

        const shiftyFifteenBlock: Block = labTo.Block([
            2, 1,
            5, 1,
            2, 4,
        ])

        const shiftyTwentyfourBlock: Block = labTo.Block([
            3, 1,
            3, 1,
            3, 4,
            5, 4,
        ])

        const shiftyTwentyfourVariantBlock: Block = labTo.Block([
            4, 7, 4,
            1, 3, 1, 3, 1,
        ])

        const shiftyBlock: Block = labTo.Block([
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

        const secretLongChordBlock: Block = labTo.Block([ 24 ])

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
