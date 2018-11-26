import { DictionaryOf } from '@musical-patterns/shared'
import { Block, to } from '../../../../../../nominal'

const buildAlmostTrueBlocks: () => DictionaryOf<Block> =
    (): DictionaryOf<Block> => {
        const trueGlisVariantBlock: Block = to.Block([
            4, 5, 6,
            7, 8,
            9, 8,
            6, 4, 2, 4, 6,
            8, 6, 4, 2, 4,
            6, 4, 2, 4, 6,
            8, 6, 4, 2, 4, 2,
        ])

        return {
            trueGlisVariantBlock,
        }
    }

export {
    buildAlmostTrueBlocks,
}
