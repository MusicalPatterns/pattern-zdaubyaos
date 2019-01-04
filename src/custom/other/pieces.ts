import { Rendering } from '@musical-patterns/pattern'
import { ContourPiece, DictionaryOf } from '@musical-patterns/utilities'
import { buildRenderings, RenderingName, Renderings } from '../../materials'
import { ZdaubyaosContour } from '../../types'
import { buildOtherBlocks } from './blocks'

const buildOtherContourPieces: () => DictionaryOf<ContourPiece<ZdaubyaosContour>> =
    (): DictionaryOf<ContourPiece<ZdaubyaosContour>> => {
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

        const glis: Rendering<ZdaubyaosContour> = renderings[ RenderingName.GLIS ]
        const flatline: Rendering<ZdaubyaosContour> = renderings[ RenderingName.FLATLINE ]

        const backboneFifteenContourPiece: ContourPiece<ZdaubyaosContour> = glis(backboneFifteenBlock)
        const backboneTwentyfourContourPiece: ContourPiece<ZdaubyaosContour> = glis(backboneTwentyfourBlock)
        const shiftyFifteenContourPiece: ContourPiece<ZdaubyaosContour> = glis(shiftyFifteenBlock)
        const shiftyTwentyfourContourPiece: ContourPiece<ZdaubyaosContour> = glis(shiftyTwentyfourBlock)
        const shiftyTwentyfourVariantContourPiece: ContourPiece<ZdaubyaosContour> = glis(shiftyTwentyfourVariantBlock)
        const shiftyContourPiece: ContourPiece<ZdaubyaosContour> = glis(shiftyBlock)

        const secretLongChordContourPiece: ContourPiece<ZdaubyaosContour> = flatline(secretLongChordBlock)

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
