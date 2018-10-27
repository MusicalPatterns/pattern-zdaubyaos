import { DictionaryOf, repeat, sequence, to } from '../../../../../src'
import { Block, to as zdaubyaosTo } from '../../nominal'

const buildThirtyfiveBlocks: () => DictionaryOf<Block[]> =
    (): DictionaryOf<Block[]> => {
        const thirtyfiveYaosBassBlocks: Block[] = zdaubyaosTo.Blocks([
            1, 5,
            1, 5,
            1, 3,
            1, 5,
            1, 5,
            1, 3,
            1, 2,
        ])

        const thirtyfiveYaosAccidentInspiredBlocks: Block[] = zdaubyaosTo.Blocks([
            1, 2, 3,
            1, 2, 3, 4,
            1, 2, 3,
            1, 2, 3, 4,
            1, 2,
        ])

        const thirtyfiveZdaubOnlyWiggleBlocks: Block[] = zdaubyaosTo.Blocks(repeat([ 4, 1 ], to.Count(7)))

        const thirtyfiveZdaubBlocks: Block[] = zdaubyaosTo.Blocks(sequence([
            thirtyfiveZdaubOnlyWiggleBlocks,
            thirtyfiveZdaubOnlyWiggleBlocks,
            zdaubyaosTo.Blocks([ 13, 10, 7, 4, 1 ]),
            thirtyfiveZdaubOnlyWiggleBlocks,
            zdaubyaosTo.Blocks([ 19, 16 ]),
            zdaubyaosTo.Blocks([ 13, 10, 7, 4, 1 ]),
        ]))

        return {
            thirtyfiveYaosAccidentInspiredBlocks,
            thirtyfiveYaosBassBlocks,
            thirtyfiveZdaubBlocks,
            thirtyfiveZdaubOnlyWiggleBlocks,
        }
    }

export {
    buildThirtyfiveBlocks,
}
