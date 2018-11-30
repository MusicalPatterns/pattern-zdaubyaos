import { ContourWhole, to as patternTo } from '@musical-patterns/pattern'
import { DictionaryOf, from, INITIAL, repeat, repeatCall, sequence, to } from '@musical-patterns/utilities'
import { BarTarget, BlockStyle } from '../../../types'
import { RenderingName } from '../../renderings'
import { getTrueContours } from '../true'
import { buildOtherContourPieces } from './pieces'

const buildOtherContourWholes: () => DictionaryOf<ContourWhole> =
    (): DictionaryOf<ContourWhole> => {
        const {
            secretLongChordContourPiece,
            shiftyContourPiece,
            shiftyFifteenContourPiece,
            shiftyTwentyfourContourPiece,
            shiftyTwentyfourVariantContourPiece,
        } = buildOtherContourPieces()

        const secretLongChordContourWhole: ContourWhole = patternTo.ContourWhole(secretLongChordContourPiece)

        const totallyOutThereContourWhole: ContourWhole = patternTo.ContourWhole(repeat(
            getTrueContours(BlockStyle.DJIYAI, BarTarget.FIFTEEN, RenderingName.SPRINGY_SUMMER)
                .slice(from.Index(INITIAL), 8),
            to.Count(3),
        ))

        const shiftyAContourWhole: ContourWhole = patternTo.ContourWhole(sequence([
            repeatCall(() => shiftyFifteenContourPiece, to.Count(3)),
            repeatCall(() => shiftyTwentyfourContourPiece, to.Count(4)),
            repeatCall(() => shiftyTwentyfourVariantContourPiece, to.Count(3)),
        ]))

        const shiftyBContourWhole: ContourWhole = patternTo.ContourWhole(shiftyContourPiece)

        return {
            secretLongChordContourWhole,
            shiftyAContourWhole,
            shiftyBContourWhole,
            totallyOutThereContourWhole,
        }
    }

export {
    buildOtherContourWholes,
}
