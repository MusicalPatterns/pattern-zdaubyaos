import { DictionaryOf } from '../../../../../src'
import { to } from '../../nominal'
import { buildRenderings, Renderings } from '../../renderings'
import { Contour, Rendering, RenderingFunction } from '../../types'
import { buildOtherBlocks } from './blocks'

const buildOtherContours: () => DictionaryOf<Contour> =
    (): DictionaryOf<Contour> => {
        const {
            backboneFifteenBlocks,
            backboneTwentyfourBlocks,
            shiftyBlocks,
            shiftyFifteenBlocks,
            shiftyTwentyfourBlocks,
            shiftyTwentyfourVariantBlocks,
        } = buildOtherBlocks()

        const renderings: Renderings = buildRenderings()

        // tslint:disable-next-line:no-magic-numbers
        const secretLongChordContour: Contour = to.Contour([ [ 1, 24 ] ])

        const glis: RenderingFunction = renderings[ Rendering.GLIS ]

        const backboneFifteenContour: Contour = glis(backboneFifteenBlocks)
        const backboneTwentyfourContour: Contour = glis(backboneTwentyfourBlocks)
        const shiftyFifteenContour: Contour = glis(shiftyFifteenBlocks)
        const shiftyTwentyfourContour: Contour = glis(shiftyTwentyfourBlocks)
        const shiftyTwentyfourVariantContour: Contour = glis(shiftyTwentyfourVariantBlocks)
        const shiftyContour: Contour = glis(shiftyBlocks)

        return {
            backboneFifteenContour,
            backboneTwentyfourContour,
            secretLongChordContour,
            shiftyContour,
            shiftyFifteenContour,
            shiftyTwentyfourContour,
            shiftyTwentyfourVariantContour,
        }
    }

export {
    buildOtherContours,
}
