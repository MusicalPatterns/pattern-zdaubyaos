import repeat from '../../../../src/utilities/repeat'
import repeatCall from '../../../../src/utilities/repeatCall'
import sequence from '../../../../src/utilities/sequence'
import {
    secretLongChordContour,
    shiftyContour,
    shiftyFifteenContour,
    shiftyTwentyfourContour,
    shiftyTwentyfourVariantContour,
} from '../contours/otherContours'
import { getZdaubyaosContours } from '../contours/zdaubyaosContours'
import { Part } from '../types'
import { BarTarget, BlockStyle, Rendering } from '../zdaubyaosTypes'

const secretLongChordPart: Part = secretLongChordContour

const totallyOutTherePart: Part = repeat(
    getZdaubyaosContours(BlockStyle.DJIYAI, BarTarget.FIFTEEN, Rendering.SPRINGY_SUMMER).slice(0, 8),
    3,
)

const shiftyAPart: Part = sequence([
    repeatCall(() => shiftyFifteenContour, 3),
    repeatCall(() => shiftyTwentyfourContour, 4),
    repeatCall(() => shiftyTwentyfourVariantContour, 3),
])

const shiftyBPart: Part = shiftyContour

export {
    secretLongChordPart,
    totallyOutTherePart,
    shiftyAPart,
    shiftyBPart,
}
