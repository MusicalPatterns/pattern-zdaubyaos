import { repeat, to } from '@musical-patterns/utilities'
import { BarTarget, BlockStyle } from '../../types'
import { TrueBlocksByBarTargetThenBlockStyle } from './types'

const buildTrueBlocks: () => TrueBlocksByBarTargetThenBlockStyle =
    (): TrueBlocksByBarTargetThenBlockStyle =>
        ({
            [ BarTarget.FIFTEEN ]: {
                [ BlockStyle.CHUWOW ]: to.Block([ 3, 4, 3, 5 ]),
                [ BlockStyle.DJIYAI ]: to.Block([ 3, 5, 7 ]),
                [ BlockStyle.IEST ]: to.Block(repeat([ 5 ], to.Cardinal(3))),
                [ BlockStyle.INAI ]: to.Block([ 4, 4, 4, 3 ]),
                [ BlockStyle.OUZD ]: to.Block([ 8, 7 ]),
                [ BlockStyle.UMOW ]: to.Block(repeat([ 3 ], to.Cardinal(5))),
                [ BlockStyle.NODLE ]: to.Block([
                    3, 4, 3, 2, 1, 2,
                ]),
                [ BlockStyle.LIMIN ]: to.Block([
                    3, 4, 3, 2, 3,
                ]),
                [ BlockStyle.SCEND ]: to.Block([
                    4, 5, 6,
                    7, 8,
                    9, 10, 11,
                    // Lasts 2 bars
                ]),
            },
            [ BarTarget.TWENTYFOUR ]: {
                [ BlockStyle.CHUWOW ]: to.Block([ 3, 4, 5, 3, 5, 4 ]),
                [ BlockStyle.DJIYAI ]: to.Block([ 3, 3, 5, 3, 3, 7 ]),
                [ BlockStyle.IEST ]: to.Block(repeat([ 6 ], to.Cardinal(4))),
                [ BlockStyle.INAI ]: to.Block(repeat([ 3 ], to.Cardinal(8))),
                [ BlockStyle.OUZD ]: to.Block(repeat([ 8 ], to.Cardinal(3))),
                [ BlockStyle.UMOW ]: to.Block(repeat([ 4 ], to.Cardinal(6))),
                [ BlockStyle.NODLE ]: to.Block([
                    1, 3, 5, 7, 5, 3,
                ]),
                [ BlockStyle.LIMIN ]: to.Block([
                    9, 7, 5, 3,
                ]),
                [ BlockStyle.SCEND ]: to.Block([
                    13, 11,
                    // Lasts 2 bars
                ]),
            },
        })

export {
    buildTrueBlocks,
}
