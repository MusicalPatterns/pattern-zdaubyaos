import repeat from '../../../../src/utilities/repeat'
import { BarTarget, Blocks, BlockStyle } from '../types'
import * as to from '../utilities/to'

const zdaubyaosBlocksByBarTargetThenBlockStyle: { [x in BarTarget]: { [y in BlockStyle]: Blocks } } = {
    [BarTarget.FIFTEEN]: {
        [BlockStyle.CHUWOW]: to.Blocks([3, 4, 3, 5]),
        [BlockStyle.DJIYAI]: to.Blocks([3, 5, 7]),
        [BlockStyle.IEST]: to.Blocks(repeat([5], 3)),
        [BlockStyle.INAI]: to.Blocks([4, 4, 4, 3]),
        [BlockStyle.OUZD]: to.Blocks([8, 7]),
        [BlockStyle.UMOW]: to.Blocks(repeat([3], 5)),
        [BlockStyle.NODLE]: to.Blocks([
            3, 4, 3, 2, 1, 2,
        ]),
        [BlockStyle.LIMIN]: to.Blocks([
            3, 4, 3, 2, 3,
        ]),
        [BlockStyle.SCEND]: to.Blocks([
            4, 5, 6,
            7, 8,
            9, 10, 11,
            // Lasts 2 bars
        ]),
    },
    [BarTarget.TWENTYFOUR]: {
        [BlockStyle.CHUWOW]: to.Blocks([3, 4, 5, 3, 5, 4]),
        [BlockStyle.DJIYAI]: to.Blocks([3, 3, 5, 3, 3, 7]),
        [BlockStyle.IEST]: to.Blocks(repeat([6], 4)),
        [BlockStyle.INAI]: to.Blocks(repeat([3], 8)),
        [BlockStyle.OUZD]: to.Blocks(repeat([8], 3)),
        [BlockStyle.UMOW]: to.Blocks(repeat([4], 6)),
        [BlockStyle.NODLE]: to.Blocks([
            1, 3, 5, 7, 5, 3,
        ]),
        [BlockStyle.LIMIN]: to.Blocks([
            9, 7, 5, 3,
        ]),
        [BlockStyle.SCEND]: to.Blocks([
            13, 11,
            // Lasts 2 bars
        ]),
    },
}

const zdaubGlisVariantBlocks: Blocks = to.Blocks([
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
