import {
    backboneFifteenBlocks,
    backboneTwentyfourBlocks,
    shiftyBlocks,
    shiftyFifteenBlocks,
    shiftyTwentyfourBlocks,
    shiftyTwentyfourVariantBlocks,
} from '../blocks/otherBlocks'
import zdaubRenderings from '../renderings/zdaubRenderings'
import { Contour, RenderingFunction } from '../types'
import * as to from '../utilities/to'
import { ZdaubRendering } from '../zdaubyaosTypes'

// tslint:disable-next-line:no-magic-numbers
const secretLongChordContour: Contour = to.Contour([[1, 24]])

const glis: RenderingFunction = zdaubRenderings[ZdaubRendering.GLIS]

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
