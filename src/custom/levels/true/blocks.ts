import { to as patternTo } from '@musical-patterns/pattern'
import { repeat, to } from '@musical-patterns/utilities'
import { BarTarget, BlockStyle } from '../../../types'
import { TrueBlocks } from './types'

const buildTrueBlocks: () => TrueBlocks =
    (): TrueBlocks =>
        ({
            [ BarTarget.FIFTEEN ]: {
                [ BlockStyle.CHUWOW ]: patternTo.Block([ 3, 4, 3, 5 ]),
                [ BlockStyle.DJIYAI ]: patternTo.Block([ 3, 5, 7 ]),
                [ BlockStyle.IEST ]: patternTo.Block(repeat([ 5 ], to.Count(3))),
                [ BlockStyle.INAI ]: patternTo.Block([ 4, 4, 4, 3 ]),
                [ BlockStyle.OUZD ]: patternTo.Block([ 8, 7 ]),
                [ BlockStyle.UMOW ]: patternTo.Block(repeat([ 3 ], to.Count(5))),
                [ BlockStyle.NODLE ]: patternTo.Block([
                    3, 4, 3, 2, 1, 2,
                ]),
                [ BlockStyle.LIMIN ]: patternTo.Block([
                    3, 4, 3, 2, 3,
                ]),
                [ BlockStyle.SCEND ]: patternTo.Block([
                    4, 5, 6,
                    7, 8,
                    9, 10, 11,
                    // Lasts 2 bars
                ]),
            },
            [ BarTarget.TWENTYFOUR ]: {
                [ BlockStyle.CHUWOW ]: patternTo.Block([ 3, 4, 5, 3, 5, 4 ]),
                [ BlockStyle.DJIYAI ]: patternTo.Block([ 3, 3, 5, 3, 3, 7 ]),
                [ BlockStyle.IEST ]: patternTo.Block(repeat([ 6 ], to.Count(4))),
                [ BlockStyle.INAI ]: patternTo.Block(repeat([ 3 ], to.Count(8))),
                [ BlockStyle.OUZD ]: patternTo.Block(repeat([ 8 ], to.Count(3))),
                [ BlockStyle.UMOW ]: patternTo.Block(repeat([ 4 ], to.Count(6))),
                [ BlockStyle.NODLE ]: patternTo.Block([
                    1, 3, 5, 7, 5, 3,
                ]),
                [ BlockStyle.LIMIN ]: patternTo.Block([
                    9, 7, 5, 3,
                ]),
                [ BlockStyle.SCEND ]: patternTo.Block([
                    13, 11,
                    // Lasts 2 bars
                ]),
            },
        })

export {
    buildTrueBlocks,
}
