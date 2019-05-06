import { PitchValue, Rendering, RenderingByBlockElement } from '@musical-patterns/material'
import { as, Block, ContourPiece, flatten } from '@musical-patterns/utilities'
import { bonyRendering } from './bony'
import { fallRendering } from './fall'
import { flatlineRendering } from './flatline'
import { glisRendering } from './glis'
import { springRendering } from './spring'
import { springySummerRendering } from './springySummer'
import { summerRendering } from './summer'
import { summerySpringRendering } from './summerySpring'
import { tremRendering } from './trem'
import { RenderingName, Renderings } from './types'

const renderByBlockElement:
    (renderingByBlockElement: RenderingByBlockElement<PitchValue>) => Rendering<PitchValue> =
    (renderingByBlockElement: RenderingByBlockElement<PitchValue>): Rendering<PitchValue> =>
        (block: Block): ContourPiece<PitchValue> =>
            as.ContourPiece<PitchValue>(flatten(block.map(renderingByBlockElement)))

const computeRenderings: () => Renderings =
    (): Renderings => ({
        [ RenderingName.GLIS ]: (block: Block): ContourPiece<PitchValue> =>
            renderByBlockElement(glisRendering)(block),
        [ RenderingName.TREM ]: (block: Block): ContourPiece<PitchValue> =>
            renderByBlockElement(tremRendering)(block),
        [ RenderingName.BONY ]: bonyRendering,
        [ RenderingName.SPRING ]: (block: Block): ContourPiece<PitchValue> =>
            renderByBlockElement(springRendering)(block),
        [ RenderingName.SUMMER ]: (block: Block): ContourPiece<PitchValue> =>
            renderByBlockElement(summerRendering)(block),
        [ RenderingName.FALL ]: (block: Block): ContourPiece<PitchValue> =>
            renderByBlockElement(fallRendering)(block),
        [ RenderingName.SUMMERY_SPRING ]: (block: Block): ContourPiece<PitchValue> =>
            renderByBlockElement(summerySpringRendering)(block),
        [ RenderingName.SPRINGY_SUMMER ]: (block: Block): ContourPiece<PitchValue> =>
            renderByBlockElement(springySummerRendering)(block),
        [ RenderingName.FLATLINE ]: (block: Block): ContourPiece<PitchValue> =>
            renderByBlockElement(flatlineRendering)(block),
    })

export {
    computeRenderings,
}
