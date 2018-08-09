// tslint:disable:no-magic-numbers

import repeat from '../../../../src/utilities/repeat'
import { BarDuration, Blocks, BlockStyle } from '../types'
import * as to from '../utilities/to'

const yaosBlocksByBarDurationThenBlockStyle: { [x in BarDuration]: { [y in BlockStyle]: Blocks } } = {
    [BarDuration.FIFTEEN]: {
        [BlockStyle.CHUWOW]: to.Blocks([3, 4, 3, 5]),
        [BlockStyle.DJIYAI]: to.Blocks([3, 5, 7]),
        [BlockStyle.IEST]: to.Blocks(repeat([5], 3)),
        [BlockStyle.INAI]: to.Blocks([4, 4, 4, 3]),
        [BlockStyle.OUZD]: to.Blocks([8, 7]),
        [BlockStyle.UMOW]: to.Blocks(repeat([3], 5)),
    },
    [BarDuration.TWENTYFOUR]: {
        [BlockStyle.CHUWOW]: to.Blocks([3, 4, 5, 3, 5, 4]),
        [BlockStyle.DJIYAI]: to.Blocks([3, 3, 5, 3, 3, 7]),
        [BlockStyle.IEST]: to.Blocks(repeat([6], 4)),
        [BlockStyle.INAI]: to.Blocks(repeat([3], 8)),
        [BlockStyle.OUZD]: to.Blocks(repeat([8], 3)),
        [BlockStyle.UMOW]: to.Blocks(repeat([4], 6)),
    },
}

export {
    yaosBlocksByBarDurationThenBlockStyle,
}
