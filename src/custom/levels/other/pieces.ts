import { DictionaryOf } from '../../../../../../src'
import { ContourPiece } from '../../../types'
import {
    buildZdaubyaosRenderings,
    Rendering,
    RenderingName,
    Renderings,
} from '../../renderings'
import { buildOtherBlocks } from './blocks'

const buildOtherContourPieces: () => DictionaryOf<ContourPiece> =
    (): DictionaryOf<ContourPiece> => {
        const {
            backboneFifteenBlock,
            backboneTwentyfourBlock,
            secretLongChordBlock,
            shiftyBlock,
            shiftyFifteenBlock,
            shiftyTwentyfourBlock,
            shiftyTwentyfourVariantBlock,
        } = buildOtherBlocks()

        const renderings: Renderings = buildZdaubyaosRenderings()

        const glis: Rendering = renderings[ RenderingName.GLIS ]
        const flatline: Rendering = renderings[ RenderingName.FLATLINE ]

        const backboneFifteenContourPiece: ContourPiece = glis(backboneFifteenBlock)
        const backboneTwentyfourContourPiece: ContourPiece = glis(backboneTwentyfourBlock)
        const shiftyFifteenContourPiece: ContourPiece = glis(shiftyFifteenBlock)
        const shiftyTwentyfourContourPiece: ContourPiece = glis(shiftyTwentyfourBlock)
        const shiftyTwentyfourVariantContourPiece: ContourPiece = glis(shiftyTwentyfourVariantBlock)
        const shiftyContourPiece: ContourPiece = glis(shiftyBlock)

        const secretLongChordContourPiece: ContourPiece = flatline(secretLongChordBlock)

        return {
            backboneFifteenContourPiece,
            backboneTwentyfourContourPiece,
            secretLongChordContourPiece,
            shiftyContourPiece,
            shiftyFifteenContourPiece,
            shiftyTwentyfourContourPiece,
            shiftyTwentyfourVariantContourPiece,
        }
    }

export {
    buildOtherContourPieces,
}
