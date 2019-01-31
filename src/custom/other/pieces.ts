import { Rendering, StandardContour } from '@musical-patterns/pattern'
import { ContourPiece, DictionaryOf } from '@musical-patterns/utilities'
import { buildRenderings, RenderingName, Renderings } from '../../material'
import { buildOtherBlocks } from './blocks'

const buildOtherContourPieces: () => DictionaryOf<ContourPiece<StandardContour>> =
    (): DictionaryOf<ContourPiece<StandardContour>> => {
        const {
            backboneFifteenBlock,
            backboneTwentyfourBlock,
            secretLongChordBlock,
            shiftyBlock,
            shiftyFifteenBlock,
            shiftyTwentyfourBlock,
            shiftyTwentyfourVariantBlock,
        } = buildOtherBlocks()

        const renderings: Renderings = buildRenderings()

        const glis: Rendering<StandardContour> = renderings[ RenderingName.GLIS ]
        const flatline: Rendering<StandardContour> = renderings[ RenderingName.FLATLINE ]

        const backboneFifteenContourPiece: ContourPiece<StandardContour> = glis(backboneFifteenBlock)
        const backboneTwentyfourContourPiece: ContourPiece<StandardContour> = glis(backboneTwentyfourBlock)
        const shiftyFifteenContourPiece: ContourPiece<StandardContour> = glis(shiftyFifteenBlock)
        const shiftyTwentyfourContourPiece: ContourPiece<StandardContour> = glis(shiftyTwentyfourBlock)
        const shiftyTwentyfourVariantContourPiece: ContourPiece<StandardContour> = glis(shiftyTwentyfourVariantBlock)
        const shiftyContourPiece: ContourPiece<StandardContour> = glis(shiftyBlock)

        const secretLongChordContourPiece: ContourPiece<StandardContour> = flatline(secretLongChordBlock)

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
