import { PitchValue, Rendering } from '@musical-patterns/material'
import { ContourPiece } from '@musical-patterns/utilities'
import { computeRenderings, RenderingName, Renderings } from '../../rendering'
import { computeOtherBlocks } from './blocks'
import { OtherBlocks, OtherContourPieces } from './types'

const computeOtherContourPieces: () => OtherContourPieces =
    (): OtherContourPieces => {
        const blocks: OtherBlocks = computeOtherBlocks()

        const renderings: Renderings = computeRenderings()

        const glis: Rendering<PitchValue> = renderings[ RenderingName.GLIS ]
        const flatline: Rendering<PitchValue> = renderings[ RenderingName.FLATLINE ]

        const backboneFifteen: ContourPiece<PitchValue> = glis(blocks.backboneFifteen)
        const backboneTwentyfour: ContourPiece<PitchValue> = glis(blocks.backboneTwentyfour)
        const shiftyFifteen: ContourPiece<PitchValue> = glis(blocks.shiftyFifteen)
        const shiftyTwentyfour: ContourPiece<PitchValue> = glis(blocks.shiftyTwentyfour)
        const shiftyTwentyfourVariant: ContourPiece<PitchValue> = glis(blocks.shiftyTwentyfourVariant)
        const shifty: ContourPiece<PitchValue> = glis(blocks.shifty)

        const secretLongChord: ContourPiece<PitchValue> = flatline(blocks.secretLongChord)

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
