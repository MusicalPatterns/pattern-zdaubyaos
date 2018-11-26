import { sequence } from '@musical-patterns/shared'
import { Block, ContourPiece, to } from '../../../../../nominal'
import { bonyRendering } from './bony'
import { fallRendering } from './fall'
import { flatlineRendering } from './flatline'
import { glisRendering } from './glis'
import { springRendering } from './spring'
import { springySummerRendering } from './springySummer'
import { summerRendering } from './summer'
import { summerySpringRendering } from './summerySpring'
import { tremRendering } from './trem'
import { Rendering, RenderingByBlockElement, RenderingName, Renderings } from './types'

const renderByBlockElement: (renderingByBlockElement: RenderingByBlockElement) => Rendering =
    (renderingByBlockElement: RenderingByBlockElement): Rendering =>
        (block: Block): ContourPiece => to.ContourPiece(sequence(block.map(renderingByBlockElement)))

const buildRenderings: () => Renderings =
    (): Renderings => ({
        [ RenderingName.GLIS ]: (block: Block): ContourPiece =>
            renderByBlockElement(glisRendering)(block),
        [ RenderingName.TREM ]: (block: Block): ContourPiece =>
            renderByBlockElement(tremRendering)(block),
        [ RenderingName.BONY ]: bonyRendering,
        [ RenderingName.SPRING ]: (block: Block): ContourPiece =>
            renderByBlockElement(springRendering)(block),
        [ RenderingName.SUMMER ]: (block: Block): ContourPiece =>
            renderByBlockElement(summerRendering)(block),
        [ RenderingName.FALL ]: (block: Block): ContourPiece =>
            renderByBlockElement(fallRendering)(block),
        [ RenderingName.SUMMERY_SPRING ]: (block: Block): ContourPiece =>
            renderByBlockElement(summerySpringRendering)(block),
        [ RenderingName.SPRINGY_SUMMER ]: (block: Block): ContourPiece =>
            renderByBlockElement(springySummerRendering)(block),
        [ RenderingName.FLATLINE ]: (block: Block): ContourPiece =>
            renderByBlockElement(flatlineRendering)(block),
    })

export {
    buildRenderings,
}
