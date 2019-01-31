import { Rendering, RenderingByBlockElement, StandardContour } from '@musical-patterns/pattern'
import { Block, ContourPiece, sequence, to } from '@musical-patterns/utilities'
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
    (renderingByBlockElement: RenderingByBlockElement<StandardContour>) => Rendering<StandardContour> =
    (renderingByBlockElement: RenderingByBlockElement<StandardContour>): Rendering<StandardContour> =>
        (block: Block): ContourPiece<StandardContour> => to.ContourPiece(sequence(block.map(renderingByBlockElement)))

const buildRenderings: () => Renderings =
    (): Renderings => ({
        [ RenderingName.GLIS ]: (block: Block): ContourPiece<StandardContour> =>
            renderByBlockElement(glisRendering)(block),
        [ RenderingName.TREM ]: (block: Block): ContourPiece<StandardContour> =>
            renderByBlockElement(tremRendering)(block),
        [ RenderingName.BONY ]: bonyRendering,
        [ RenderingName.SPRING ]: (block: Block): ContourPiece<StandardContour> =>
            renderByBlockElement(springRendering)(block),
        [ RenderingName.SUMMER ]: (block: Block): ContourPiece<StandardContour> =>
            renderByBlockElement(summerRendering)(block),
        [ RenderingName.FALL ]: (block: Block): ContourPiece<StandardContour> =>
            renderByBlockElement(fallRendering)(block),
        [ RenderingName.SUMMERY_SPRING ]: (block: Block): ContourPiece<StandardContour> =>
            renderByBlockElement(summerySpringRendering)(block),
        [ RenderingName.SPRINGY_SUMMER ]: (block: Block): ContourPiece<StandardContour> =>
            renderByBlockElement(springySummerRendering)(block),
        [ RenderingName.FLATLINE ]: (block: Block): ContourPiece<StandardContour> =>
            renderByBlockElement(flatlineRendering)(block),
    })

export {
    buildRenderings,
}
