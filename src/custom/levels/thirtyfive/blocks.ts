import { Block, DictionaryOf, repeat, sequence, to } from '@musical-patterns/utilities'

const buildThirtyfiveBlocks: () => DictionaryOf<Block> =
    (): DictionaryOf<Block> => {
        const thirtyfiveYaosBassBlock: Block = to.Block([
            1, 5,
            1, 5,
            1, 3,
            1, 5,
            1, 5,
            1, 3,
            1, 2,
        ])

        const thirtyfiveYaosAccidentInspiredBlock: Block = to.Block([
            1, 2, 3,
            1, 2, 3, 4,
            1, 2, 3,
            1, 2, 3, 4,
            1, 2,
        ])

        const thirtyfiveZdaubOnlyWiggleBlock: Block = to.Block(repeat([ 4, 1 ], to.Count(7)))

        const thirtyfiveZdaubBlock: Block = to.Block(sequence([
            thirtyfiveZdaubOnlyWiggleBlock,
            thirtyfiveZdaubOnlyWiggleBlock,
            to.Block([ 13, 10, 7, 4, 1 ]),
            thirtyfiveZdaubOnlyWiggleBlock,
            to.Block([ 19, 16 ]),
            to.Block([ 13, 10, 7, 4, 1 ]),
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
