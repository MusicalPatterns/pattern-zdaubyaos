import repeat from '../../../../src/utilities/repeat'
import * as to from '../../../../src/utilities/to'
import { BarTarget, Blocks, BlockStyle } from '../types'
import * as zdaubyaosTo from '../utilities/to'

const zdaubyaosBlocksByBarTargetThenBlockStyle: { [x in BarTarget]: { [y in BlockStyle]: Blocks } } = {
    [BarTarget.FIFTEEN]: {
        [BlockStyle.CHUWOW]: zdaubyaosTo.Blocks([ 3, 4, 3, 5 ]),
        [BlockStyle.DJIYAI]: zdaubyaosTo.Blocks([ 3, 5, 7 ]),
        [BlockStyle.IEST]: zdaubyaosTo.Blocks(repeat([ 5 ], to.Count(3))),
        [BlockStyle.INAI]: zdaubyaosTo.Blocks([ 4, 4, 4, 3 ]),
        [BlockStyle.OUZD]: zdaubyaosTo.Blocks([ 8, 7 ]),
        [BlockStyle.UMOW]: zdaubyaosTo.Blocks(repeat([ 3 ], to.Count(5))),
        [BlockStyle.NODLE]: zdaubyaosTo.Blocks([
            3, 4, 3, 2, 1, 2,
        ]),
        [BlockStyle.LIMIN]: zdaubyaosTo.Blocks([
            3, 4, 3, 2, 3,
        ]),
        [BlockStyle.SCEND]: zdaubyaosTo.Blocks([
            4, 5, 6,
            7, 8,
            9, 10, 11,
            // Lasts 2 bars
        ]),
    },
    [BarTarget.TWENTYFOUR]: {
        [BlockStyle.CHUWOW]: zdaubyaosTo.Blocks([ 3, 4, 5, 3, 5, 4 ]),
        [BlockStyle.DJIYAI]: zdaubyaosTo.Blocks([ 3, 3, 5, 3, 3, 7 ]),
        [BlockStyle.IEST]: zdaubyaosTo.Blocks(repeat([ 6 ], to.Count(4))),
        [BlockStyle.INAI]: zdaubyaosTo.Blocks(repeat([ 3 ], to.Count(8))),
        [BlockStyle.OUZD]: zdaubyaosTo.Blocks(repeat([ 8 ], to.Count(3))),
        [BlockStyle.UMOW]: zdaubyaosTo.Blocks(repeat([ 4 ], to.Count(6))),
        [BlockStyle.NODLE]: zdaubyaosTo.Blocks([
            1, 3, 5, 7, 5, 3,
        ]),
        [BlockStyle.LIMIN]: zdaubyaosTo.Blocks([
            9, 7, 5, 3,
        ]),
        [BlockStyle.SCEND]: zdaubyaosTo.Blocks([
            13, 11,
            // Lasts 2 bars
        ]),
    },
}

const zdaubGlisVariantBlocks: Blocks = zdaubyaosTo.Blocks([
    4, 5, 6,
    7, 8,
    9, 8,
    6, 4, 2, 4, 6,
    8, 6, 4, 2, 4,
    6, 4, 2, 4, 6,
    8, 6, 4, 2, 4, 2,
])

export {
    zdaubGlisVariantBlocks,
    zdaubyaosBlocksByBarTargetThenBlockStyle,
}
