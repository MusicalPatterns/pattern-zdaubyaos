import { DictionaryOf, repeat, repeatCall, sequence, to } from '../../../../../src'
import { BarTarget, BlockStyle, Part, Rendering } from '../../types'
import { getTrueContours } from '../true'
import { buildOtherContours } from './contours'

const buildOtherParts: () => DictionaryOf<Part> =
    (): DictionaryOf<Part> => {
        const {
            secretLongChordContour,
            shiftyContour,
            shiftyFifteenContour,
            shiftyTwentyfourContour,
            shiftyTwentyfourVariantContour,
        } = buildOtherContours()

        const secretLongChordPart: Part = secretLongChordContour

        const totallyOutTherePart: Part = repeat(
            getTrueContours(BlockStyle.DJIYAI, BarTarget.FIFTEEN, Rendering.SPRINGY_SUMMER)
                .slice(0, 8),
            to.Count(3),
        )

        const shiftyAPart: Part = sequence([
            repeatCall(() => shiftyFifteenContour, to.Count(3)),
            repeatCall(() => shiftyTwentyfourContour, to.Count(4)),
            repeatCall(() => shiftyTwentyfourVariantContour, to.Count(3)),
        ])

        const shiftyBPart: Part = shiftyContour

        return {
            secretLongChordPart,
            shiftyAPart,
            shiftyBPart,
            totallyOutTherePart,
        }
    }

export {
    buildOtherParts,
}
