import repeat from '../../../../src/utilities/repeat'
import repeatCall from '../../../../src/utilities/repeatCall'
import sequence from '../../../../src/utilities/sequence'
import * as to from '../../../../src/utilities/to'
import {
    secretLongChordContour,
    shiftyContour,
    shiftyFifteenContour,
    shiftyTwentyfourContour,
    shiftyTwentyfourVariantContour,
} from '../contours/otherContours'
import { getZdaubyaosContours } from '../contours/zdaubyaosContours'
import { BarTarget, BlockStyle, Part, Rendering } from '../types'

const secretLongChordPart: Part = secretLongChordContour

const totallyOutTherePart: Part = repeat(
    getZdaubyaosContours(BlockStyle.DJIYAI, BarTarget.FIFTEEN, Rendering.SPRINGY_SUMMER).slice(0, 8),
    to.Count(3),
)

const shiftyAPart: Part = sequence([
    repeatCall(() => shiftyFifteenContour, to.Count(3)),
    repeatCall(() => shiftyTwentyfourContour, to.Count(4)),
    repeatCall(() => shiftyTwentyfourVariantContour, to.Count(3)),
])

const shiftyBPart: Part = shiftyContour

export {
    secretLongChordPart,
    totallyOutTherePart,
    shiftyAPart,
    shiftyBPart,
}
