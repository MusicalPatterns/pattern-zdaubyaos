import { StandardContour } from '@musical-patterns/pattern'
import {
    ContourWhole,
    DictionaryOf,
    from,
    INITIAL,
    repeat,
    repeatCall,
    sequence,
    to,
} from '@musical-patterns/utilities'
import { RenderingName } from '../../material'
import { BarTarget, BlockStyle } from '../../types'
import { getTrueContours } from '../true'
import { buildOtherContourPieces } from './pieces'

const buildOtherContourWholes: () => DictionaryOf<ContourWhole<StandardContour>> =
    (): DictionaryOf<ContourWhole<StandardContour>> => {
        const {
            secretLongChordContourPiece,
            shiftyContourPiece,
            shiftyFifteenContourPiece,
            shiftyTwentyfourContourPiece,
            shiftyTwentyfourVariantContourPiece,
        } = buildOtherContourPieces()

        const secretLongChordContourWhole: ContourWhole<StandardContour> =
            to.ContourWhole<StandardContour>(secretLongChordContourPiece)

        const totallyOutThereContourWhole: ContourWhole<StandardContour> = to.ContourWhole<StandardContour>(repeat(
            getTrueContours(BlockStyle.DJIYAI, BarTarget.FIFTEEN, RenderingName.SPRINGY_SUMMER)
                .slice(from.Index(INITIAL), 8),
            to.Count(3),
        ))

        const shiftyAContourWhole: ContourWhole<StandardContour> = to.ContourWhole<StandardContour>(sequence([
            repeatCall(() => shiftyFifteenContourPiece, to.Count(3)),
            repeatCall(() => shiftyTwentyfourContourPiece, to.Count(4)),
            repeatCall(() => shiftyTwentyfourVariantContourPiece, to.Count(3)),
        ]))

        const shiftyBContourWhole: ContourWhole<StandardContour> =
            to.ContourWhole<StandardContour>(shiftyContourPiece)

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
