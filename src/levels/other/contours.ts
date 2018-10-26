import { to } from '../../nominal'
import { renderings } from '../../renderings'
import { Contour, Rendering, RenderingFunction } from '../../types'
import {
    backboneFifteenBlocks,
    backboneTwentyfourBlocks,
    shiftyBlocks,
    shiftyFifteenBlocks,
    shiftyTwentyfourBlocks,
    shiftyTwentyfourVariantBlocks,
} from './blocks'

// tslint:disable-next-line:no-magic-numbers
const secretLongChordContour: Contour = to.Contour([ [ 1, 24 ] ])

const glis: RenderingFunction = renderings[Rendering.GLIS]

const backboneFifteenContour: Contour = glis(backboneFifteenBlocks)
const backboneTwentyfourContour: Contour = glis(backboneTwentyfourBlocks)
const shiftyFifteenContour: Contour = glis(shiftyFifteenBlocks)
const shiftyTwentyfourContour: Contour = glis(shiftyTwentyfourBlocks)
const shiftyTwentyfourVariantContour: Contour = glis(shiftyTwentyfourVariantBlocks)
const shiftyContour: Contour = glis(shiftyBlocks)

export {
    secretLongChordContour,
    backboneFifteenContour,
    backboneTwentyfourContour,
    shiftyFifteenContour,
    shiftyTwentyfourContour,
    shiftyTwentyfourVariantContour,
    shiftyContour,
}
