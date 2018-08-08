import repeat from '../../../../src/utilities/repeat'
import { BarDuration, Blocks, BlockStyle } from '../types'

const yaosBlocksByBarDurationThenBlockStyle: { [x in BarDuration]: { [y in BlockStyle]: Blocks } } = {
    [BarDuration.FIFTEEN]: {
        [BlockStyle.CHUWOW]: [3, 4, 3, 5],
        [BlockStyle.DJIYAI]: [3, 5, 7],
        [BlockStyle.IEST]: repeat([5], 3),
        [BlockStyle.INAI]: [4, 4, 4, 3],
        [BlockStyle.OUZD]: [8, 7],
        [BlockStyle.UMOW]: repeat([3], 5),
    },
    [BarDuration.TWENTYFOUR]: {
        [BlockStyle.CHUWOW]: [3, 4, 5, 3, 5, 4],
        [BlockStyle.DJIYAI]: [3, 3, 5, 3, 3, 7],
        [BlockStyle.IEST]: repeat([6], 4),
        [BlockStyle.INAI]: repeat([3], 8),
        [BlockStyle.OUZD]: repeat([8], 3),
        [BlockStyle.UMOW]: repeat([4], 6),
    },
}

export {
    yaosBlocksByBarDurationThenBlockStyle,
}
