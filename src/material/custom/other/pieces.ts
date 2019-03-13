import { PitchDuration, Rendering } from '@musical-patterns/pattern'
import { ContourPiece } from '@musical-patterns/utilities'
import { computeRenderings, RenderingName, Renderings } from '../../rendering'
import { computeOtherBlocks } from './blocks'
import { OtherBlocks, OtherContourPieces } from './types'

const computeOtherContourPieces: () => OtherContourPieces =
    (): OtherContourPieces => {
        const blocks: OtherBlocks = computeOtherBlocks()

        const renderings: Renderings = computeRenderings()

        const glis: Rendering<PitchDuration> = renderings[ RenderingName.GLIS ]
        const flatline: Rendering<PitchDuration> = renderings[ RenderingName.FLATLINE ]

        const backboneFifteen: ContourPiece<PitchDuration> = glis(blocks.backboneFifteen)
        const backboneTwentyfour: ContourPiece<PitchDuration> = glis(blocks.backboneTwentyfour)
        const shiftyFifteen: ContourPiece<PitchDuration> = glis(blocks.shiftyFifteen)
        const shiftyTwentyfour: ContourPiece<PitchDuration> = glis(blocks.shiftyTwentyfour)
        const shiftyTwentyfourVariant: ContourPiece<PitchDuration> = glis(blocks.shiftyTwentyfourVariant)
        const shifty: ContourPiece<PitchDuration> = glis(blocks.shifty)

        const secretLongChord: ContourPiece<PitchDuration> = flatline(blocks.secretLongChord)

        return {
            backboneFifteen,
            backboneTwentyfour,
            secretLongChord,
            shifty,
            shiftyFifteen,
            shiftyTwentyfour,
            shiftyTwentyfourVariant,
        }
    }

export {
    computeOtherContourPieces,
}
