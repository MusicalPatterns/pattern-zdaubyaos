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
import { BarTarget, BlockStyle, ZdaubyaosContour } from '../../types'
import { getTrueContours } from '../true'
import { buildOtherContourPieces } from './pieces'

const buildOtherContourWholes: () => DictionaryOf<ContourWhole<ZdaubyaosContour>> =
    (): DictionaryOf<ContourWhole<ZdaubyaosContour>> => {
        const {
            secretLongChordContourPiece,
            shiftyContourPiece,
            shiftyFifteenContourPiece,
            shiftyTwentyfourContourPiece,
            shiftyTwentyfourVariantContourPiece,
        } = buildOtherContourPieces()

        const secretLongChordContourWhole: ContourWhole<ZdaubyaosContour> =
            to.ContourWhole<ZdaubyaosContour>(secretLongChordContourPiece)

        const totallyOutThereContourWhole: ContourWhole<ZdaubyaosContour> = to.ContourWhole<ZdaubyaosContour>(repeat(
            getTrueContours(BlockStyle.DJIYAI, BarTarget.FIFTEEN, RenderingName.SPRINGY_SUMMER)
                .slice(from.Index(INITIAL), 8),
            to.Count(3),
        ))

        const shiftyAContourWhole: ContourWhole<ZdaubyaosContour> = to.ContourWhole<ZdaubyaosContour>(sequence([
            repeatCall(() => shiftyFifteenContourPiece, to.Count(3)),
            repeatCall(() => shiftyTwentyfourContourPiece, to.Count(4)),
            repeatCall(() => shiftyTwentyfourVariantContourPiece, to.Count(3)),
        ]))

        const shiftyBContourWhole: ContourWhole<ZdaubyaosContour> =
            to.ContourWhole<ZdaubyaosContour>(shiftyContourPiece)

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
