import { Block, to as patternTo } from '@musical-patterns/pattern'
import { DictionaryOf, repeat, sequence, to } from '@musical-patterns/utilities'

const buildThirtyfiveBlocks: () => DictionaryOf<Block> =
    (): DictionaryOf<Block> => {
        const thirtyfiveYaosBassBlock: Block = patternTo.Block([
            1, 5,
            1, 5,
            1, 3,
            1, 5,
            1, 5,
            1, 3,
            1, 2,
        ])

        const thirtyfiveYaosAccidentInspiredBlock: Block = patternTo.Block([
            1, 2, 3,
            1, 2, 3, 4,
            1, 2, 3,
            1, 2, 3, 4,
            1, 2,
        ])

        const thirtyfiveZdaubOnlyWiggleBlock: Block = patternTo.Block(repeat([ 4, 1 ], to.Count(7)))

        const thirtyfiveZdaubBlock: Block = patternTo.Block(sequence([
            thirtyfiveZdaubOnlyWiggleBlock,
            thirtyfiveZdaubOnlyWiggleBlock,
            patternTo.Block([ 13, 10, 7, 4, 1 ]),
            thirtyfiveZdaubOnlyWiggleBlock,
            patternTo.Block([ 19, 16 ]),
            patternTo.Block([ 13, 10, 7, 4, 1 ]),
        ]))

        return {
            thirtyfiveYaosAccidentInspiredBlock,
            thirtyfiveYaosBassBlock,
            thirtyfiveZdaubBlock,
            thirtyfiveZdaubOnlyWiggleBlock,
        }
    }

export {
    buildThirtyfiveBlocks,
}
