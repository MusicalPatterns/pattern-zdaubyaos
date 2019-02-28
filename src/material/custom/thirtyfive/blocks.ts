import { Block, repeat, sequence, to } from '@musical-patterns/utilities'
import { ThirtyfiveBlocks } from './types'

const buildThirtyfiveBlocks: () => ThirtyfiveBlocks =
    (): ThirtyfiveBlocks => {
        const yaosBass: Block = to.Block([
            1, 5,
            1, 5,
            1, 3,
            1, 5,
            1, 5,
            1, 3,
            1, 2,
        ])

        const yaosAccidentInspired: Block = to.Block([
            1, 2, 3,
            1, 2, 3, 4,
            1, 2, 3,
            1, 2, 3, 4,
            1, 2,
        ])

        const zdaubOnlyWiggle: Block = to.Block(repeat([ 4, 1 ], to.Cardinal(7)))

        const zdaub: Block = to.Block(sequence([
            zdaubOnlyWiggle,
            zdaubOnlyWiggle,
            to.Block([ 13, 10, 7, 4, 1 ]),
            zdaubOnlyWiggle,
            to.Block([ 19, 16 ]),
            to.Block([ 13, 10, 7, 4, 1 ]),
        ]))

        return {
            yaosAccidentInspired,
            yaosBass,
            zdaub,
            zdaubOnlyWiggle,
        }
    }

export {
    buildThirtyfiveBlocks,
}
