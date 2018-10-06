import repeat from '../../../../src/utilities/repeat'
import sequence from '../../../../src/utilities/sequence'
import * as to from '../../../../src/utilities/to'
import { Blocks } from '../types'
import * as zdaubyaosTo from '../utilities/to'

const thirtyfiveYaosBassBlocks: Blocks = zdaubyaosTo.Blocks([
    1, 5,
    1, 5,
    1, 3,
    1, 5,
    1, 5,
    1, 3,
    1, 2,
])

const thirtyfiveYaosAccidentInspiredBlocks: Blocks = zdaubyaosTo.Blocks([
    1, 2, 3,
    1, 2, 3, 4,
    1, 2, 3,
    1, 2, 3, 4,
    1, 2,
])

const thirtyfiveZdaubOnlyWiggleBlocks: Blocks = zdaubyaosTo.Blocks(repeat([ 4, 1 ], to.Count(7)))

const thirtyfiveZdaubBlocks: Blocks = zdaubyaosTo.Blocks(sequence([
    thirtyfiveZdaubOnlyWiggleBlocks,
    thirtyfiveZdaubOnlyWiggleBlocks,
    zdaubyaosTo.Blocks([ 13, 10, 7, 4, 1 ]),
    thirtyfiveZdaubOnlyWiggleBlocks,
    zdaubyaosTo.Blocks([ 19, 16 ]),
    zdaubyaosTo.Blocks([ 13, 10, 7, 4, 1 ]),
]))

export {
    thirtyfiveYaosBassBlocks,
    thirtyfiveYaosAccidentInspiredBlocks,
    thirtyfiveZdaubBlocks,
    thirtyfiveZdaubOnlyWiggleBlocks,
}
