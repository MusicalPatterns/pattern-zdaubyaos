import { as, repeat } from '@musical-patterns/utilities'
import { BarTarget, BlockStyle } from '../../types'
import { TrueBlocksByBarTargetThenBlockStyle } from './types'

const computeTrueBlocks: () => TrueBlocksByBarTargetThenBlockStyle =
    (): TrueBlocksByBarTargetThenBlockStyle =>
        ({
            [ BarTarget.FIFTEEN ]: {
                [ BlockStyle.CHUWOW ]: as.Block([ 3, 4, 3, 5 ]),
                [ BlockStyle.DJIYAI ]: as.Block([ 3, 5, 7 ]),
                [ BlockStyle.IEST ]: as.Block(repeat([ 5 ], as.Cardinal(3))),
                [ BlockStyle.INAI ]: as.Block([ 4, 4, 4, 3 ]),
                [ BlockStyle.OUZD ]: as.Block([ 8, 7 ]),
                [ BlockStyle.UMOW ]: as.Block(repeat([ 3 ], as.Cardinal(5))),
                [ BlockStyle.NODLE ]: as.Block([
                    3, 4, 3, 2, 1, 2,
                ]),
                [ BlockStyle.LIMIN ]: as.Block([
                    3, 4, 3, 2, 3,
                ]),
                [ BlockStyle.SCEND ]: as.Block([
                    4, 5, 6,
                    7, 8,
                    9, 10, 11,
                    // Takes 2 bars
                ]),
            },
            [ BarTarget.TWENTYFOUR ]: {
                [ BlockStyle.CHUWOW ]: as.Block([ 3, 4, 5, 3, 5, 4 ]),
                [ BlockStyle.DJIYAI ]: as.Block([ 3, 3, 5, 3, 3, 7 ]),
                [ BlockStyle.IEST ]: as.Block(repeat([ 6 ], as.Cardinal(4))),
                [ BlockStyle.INAI ]: as.Block(repeat([ 3 ], as.Cardinal(8))),
                [ BlockStyle.OUZD ]: as.Block(repeat([ 8 ], as.Cardinal(3))),
                [ BlockStyle.UMOW ]: as.Block(repeat([ 4 ], as.Cardinal(6))),
                [ BlockStyle.NODLE ]: as.Block([
                    1, 3, 5, 7, 5, 3,
                ]),
                [ BlockStyle.LIMIN ]: as.Block([
                    9, 7, 5, 3,
                ]),
                [ BlockStyle.SCEND ]: as.Block([
                    13, 11,
                    // Takes 2 bars
                ]),
            },
        })

export {
    computeTrueBlocks,
}
