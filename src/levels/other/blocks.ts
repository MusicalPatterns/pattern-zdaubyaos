import { DictionaryOf, repeat, to } from '../../../../../src'
import { Block, to as zdaubyaosTo } from '../../nominal'

const buildOtherBlocks: () => DictionaryOf<Block[]> =
    (): DictionaryOf<Block[]> => {
        const backboneFifteenBlocks: Block[] = zdaubyaosTo.Blocks(repeat([ 1, 2 ], to.Count(5)))

        const backboneTwentyfourBlocks: Block[] = zdaubyaosTo.Blocks(repeat([ 1, 3 ], to.Count(6)))

        const shiftyFifteenBlocks: Block[] = zdaubyaosTo.Blocks([
            2, 1,
            5, 1,
            2, 4,
        ])

        const shiftyTwentyfourBlocks: Block[] = zdaubyaosTo.Blocks([
            3, 1,
            3, 1,
            3, 4,
            5, 4,
        ])

        const shiftyTwentyfourVariantBlocks: Block[] = zdaubyaosTo.Blocks([
            4, 7, 4,
            1, 3, 1, 3, 1,
        ])

        const shiftyBlocks: Block[] = zdaubyaosTo.Blocks([
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

        return {
            backboneFifteenBlocks,
            backboneTwentyfourBlocks,
            shiftyBlocks,
            shiftyFifteenBlocks,
            shiftyTwentyfourBlocks,
            shiftyTwentyfourVariantBlocks,
        }
    }

export {
    buildOtherBlocks,
}
