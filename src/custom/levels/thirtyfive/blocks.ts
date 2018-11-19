import { to } from '@musical-patterns/utilities'
import { Block, DictionaryOf, repeat, sequence, to as labTo } from '../../../../../../src'

const buildThirtyfiveBlocks: () => DictionaryOf<Block> =
    (): DictionaryOf<Block> => {
        const thirtyfiveYaosBassBlock: Block = labTo.Block([
            1, 5,
            1, 5,
            1, 3,
            1, 5,
            1, 5,
            1, 3,
            1, 2,
        ])

        const thirtyfiveYaosAccidentInspiredBlock: Block = labTo.Block([
            1, 2, 3,
            1, 2, 3, 4,
            1, 2, 3,
            1, 2, 3, 4,
            1, 2,
        ])

        const thirtyfiveZdaubOnlyWiggleBlock: Block = labTo.Block(repeat([ 4, 1 ], to.Count(7)))

        const thirtyfiveZdaubBlock: Block = labTo.Block(sequence([
            thirtyfiveZdaubOnlyWiggleBlock,
            thirtyfiveZdaubOnlyWiggleBlock,
            labTo.Block([ 13, 10, 7, 4, 1 ]),
            thirtyfiveZdaubOnlyWiggleBlock,
            labTo.Block([ 19, 16 ]),
            labTo.Block([ 13, 10, 7, 4, 1 ]),
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
