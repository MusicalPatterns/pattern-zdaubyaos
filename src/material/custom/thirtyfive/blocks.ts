import { as, Block, repeat, sequence } from '@musical-patterns/utilities'
import { ThirtyfiveBlocks } from './types'

const computeThirtyfiveBlocks: () => ThirtyfiveBlocks =
    (): ThirtyfiveBlocks => {
        const yaosBass: Block = as.Block([
            1, 5,
            1, 5,
            1, 3,
            1, 5,
            1, 5,
            1, 3,
            1, 2,
        ])

        const yaosAccidentInspired: Block = as.Block([
            1, 2, 3,
            1, 2, 3, 4,
            1, 2, 3,
            1, 2, 3, 4,
            1, 2,
        ])

        const zdaubOnlyWiggle: Block = as.Block(repeat([ 4, 1 ], as.Cardinal(7)))

        const zdaub: Block = as.Block(sequence(
            zdaubOnlyWiggle,
            zdaubOnlyWiggle,
            as.Block([ 13, 10, 7, 4, 1 ]),
            zdaubOnlyWiggle,
            as.Block([ 19, 16 ]),
            as.Block([ 13, 10, 7, 4, 1 ]),
        ))

        return {
            yaosAccidentInspired,
            yaosBass,
            zdaub,
            zdaubOnlyWiggle,
        }
    }

export {
    computeThirtyfiveBlocks,
}
