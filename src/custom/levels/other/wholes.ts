import { DictionaryOf, from, INITIAL, repeat, repeatCall, sequence, to } from '../../../../../../src'
import { ContourWhole, to as zdaubyaosTo } from '../../../nominal'
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

        const secretLongChordContourWhole: ContourWhole = zdaubyaosTo.ContourWhole(secretLongChordContourPiece)

        const totallyOutThereContourWhole: ContourWhole = zdaubyaosTo.ContourWhole(repeat(
            getTrueContours(BlockStyle.DJIYAI, BarTarget.FIFTEEN, RenderingName.SPRINGY_SUMMER)
                .slice(from.Index(INITIAL), 8),
            to.Count(3),
        ))

        const shiftyAContourWhole: ContourWhole = zdaubyaosTo.ContourWhole(sequence([
            repeatCall(() => shiftyFifteenContourPiece, to.Count(3)),
            repeatCall(() => shiftyTwentyfourContourPiece, to.Count(4)),
            repeatCall(() => shiftyTwentyfourVariantContourPiece, to.Count(3)),
        ]))

        const shiftyBContourWhole: ContourWhole = zdaubyaosTo.ContourWhole(shiftyContourPiece)

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
