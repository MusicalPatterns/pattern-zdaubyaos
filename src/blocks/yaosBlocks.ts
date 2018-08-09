// tslint:disable:no-magic-numbers

import repeat from '../../../../src/utilities/repeat'
import { BarDuration, Blocks, YaosBlockStyle } from '../types'
import * as to from '../utilities/to'

const yaosBlocksByBarDurationThenBlockStyle: { [x in BarDuration]: { [y in YaosBlockStyle]: Blocks } } = {
    [BarDuration.FIFTEEN]: {
        [YaosBlockStyle.CHUWOW]: to.Blocks([3, 4, 3, 5]),
        [YaosBlockStyle.DJIYAI]: to.Blocks([3, 5, 7]),
        [YaosBlockStyle.IEST]: to.Blocks(repeat([5], 3)),
        [YaosBlockStyle.INAI]: to.Blocks([4, 4, 4, 3]),
        [YaosBlockStyle.OUZD]: to.Blocks([8, 7]),
        [YaosBlockStyle.UMOW]: to.Blocks(repeat([3], 5)),
    },
    [BarDuration.TWENTYFOUR]: {
        [YaosBlockStyle.CHUWOW]: to.Blocks([3, 4, 5, 3, 5, 4]),
        [YaosBlockStyle.DJIYAI]: to.Blocks([3, 3, 5, 3, 3, 7]),
        [YaosBlockStyle.IEST]: to.Blocks(repeat([6], 4)),
        [YaosBlockStyle.INAI]: to.Blocks(repeat([3], 8)),
        [YaosBlockStyle.OUZD]: to.Blocks(repeat([8], 3)),
        [YaosBlockStyle.UMOW]: to.Blocks(repeat([4], 6)),
    },
}

export {
    yaosBlocksByBarDurationThenBlockStyle,
}
