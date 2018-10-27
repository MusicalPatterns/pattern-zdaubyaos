import { DictionaryOf } from '../../../../../src'
import { Block, to as zdaubyaosTo } from '../../nominal'

const buildAlmostTrueBlocks: () => DictionaryOf<Block[]> =
    (): DictionaryOf<Block[]> => {
        const trueGlisVariantBlocks: Block[] = zdaubyaosTo.Blocks([
            4, 5, 6,
            7, 8,
            9, 8,
            6, 4, 2, 4, 6,
            8, 6, 4, 2, 4,
            6, 4, 2, 4, 6,
            8, 6, 4, 2, 4, 2,
        ])

        return {
            trueGlisVariantBlocks,
        }
    }

export {
    buildAlmostTrueBlocks,
}
