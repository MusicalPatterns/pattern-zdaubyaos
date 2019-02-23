import { PitchDuration, Rendering } from '@musical-patterns/pattern'
import { ContourPiece, DictionaryOf } from '@musical-patterns/utilities'
import { buildRenderings, RenderingName, Renderings } from '../../renderings'
import { buildOtherBlocks } from './blocks'

const buildOtherContourPieces: () => DictionaryOf<ContourPiece<PitchDuration>> =
    (): DictionaryOf<ContourPiece<PitchDuration>> => {
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

        const glis: Rendering<PitchDuration> = renderings[ RenderingName.GLIS ]
        const flatline: Rendering<PitchDuration> = renderings[ RenderingName.FLATLINE ]

        const backboneFifteenContourPiece: ContourPiece<PitchDuration> = glis(backboneFifteenBlock)
        const backboneTwentyfourContourPiece: ContourPiece<PitchDuration> = glis(backboneTwentyfourBlock)
        const shiftyFifteenContourPiece: ContourPiece<PitchDuration> = glis(shiftyFifteenBlock)
        const shiftyTwentyfourContourPiece: ContourPiece<PitchDuration> = glis(shiftyTwentyfourBlock)
        const shiftyTwentyfourVariantContourPiece: ContourPiece<PitchDuration> = glis(shiftyTwentyfourVariantBlock)
        const shiftyContourPiece: ContourPiece<PitchDuration> = glis(shiftyBlock)

        const secretLongChordContourPiece: ContourPiece<PitchDuration> = flatline(secretLongChordBlock)

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
