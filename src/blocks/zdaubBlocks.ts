import { Blocks } from '../types'
import * as to from '../utilities/to'
import { BarDuration, ZdaubBlockStyle } from '../zdaubyaosTypes'

const zdaubBlocksByBarDurationThenBlockStyle: { [x in BarDuration]: { [y in ZdaubBlockStyle]: Blocks } } = {
    [BarDuration.FIFTEEN]: {
        [ZdaubBlockStyle.NODLE]: to.Blocks([
            3, 4, 3, 2, 1, 2,
        ]),
        [ZdaubBlockStyle.LIMIN]: to.Blocks([
            3, 4, 3, 2, 3,
        ]),
        [ZdaubBlockStyle.SCEND]: to.Blocks([
            4, 5, 6,
            7, 8,
            9, 10, 11,
            // Lasts 2 bars
        ]),
    },
    [BarDuration.TWENTYFOUR]: {
        [ZdaubBlockStyle.NODLE]: to.Blocks([
            1, 3, 5, 7, 5, 3,
        ]),
        [ZdaubBlockStyle.LIMIN]: to.Blocks([
            9, 7, 5, 3,
        ]),
        [ZdaubBlockStyle.SCEND]: to.Blocks([
            13, 11,
            // Lasts 2 bars
        ]),
    },
}

export {
    zdaubBlocksByBarDurationThenBlockStyle,
}
