import repeat from '../../../../src/utilities/repeat'
import sequence from '../../../../src/utilities/sequence'
import { Blocks } from '../types'
import * as to from '../utilities/to'

const thirtyfiveYaosBassBlocks: Blocks = to.Blocks([
    1, 5,
    1, 5,
    1, 3,
    1, 5,
    1, 5,
    1, 3,
    1, 2,
])

const thirtyfiveYaosAccidentInspiredBlocks: Blocks = to.Blocks([
    1, 2, 3,
    1, 2, 3, 4,
    1, 2, 3,
    1, 2, 3, 4,
    1, 2,
])

const thirtyfiveZdaubOnlyWiggleBlocks: Blocks = to.Blocks(repeat([4, 1], 7))

const thirtyfiveZdaubBlocks: Blocks = to.Blocks(sequence([
    thirtyfiveZdaubOnlyWiggleBlocks,
    thirtyfiveZdaubOnlyWiggleBlocks,
    to.Blocks([13, 10, 7, 4, 1]),
    thirtyfiveZdaubOnlyWiggleBlocks,
    to.Blocks([19, 16]),
    to.Blocks([13, 10, 7, 4, 1]),
]))

export {
    thirtyfiveYaosBassBlocks,
    thirtyfiveYaosAccidentInspiredBlocks,
    thirtyfiveZdaubBlocks,
    thirtyfiveZdaubOnlyWiggleBlocks,
}
