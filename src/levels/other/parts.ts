import { repeat, repeatCall, sequence, to } from '../../../../../src'
import { BarTarget, BlockStyle, Part, Rendering } from '../../types'
import { getZdaubyaosContours } from '../true'
import {
    secretLongChordContour,
    shiftyContour,
    shiftyFifteenContour,
    shiftyTwentyfourContour,
    shiftyTwentyfourVariantContour,
} from './contours'

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
