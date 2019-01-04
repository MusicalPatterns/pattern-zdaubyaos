import { Rendering, RenderingByBlockElement } from '@musical-patterns/pattern'
import { Block, ContourPiece, sequence, to } from '@musical-patterns/utilities'
import { ZdaubyaosContour } from '../../types'
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
    (renderingByBlockElement: RenderingByBlockElement<ZdaubyaosContour>) => Rendering<ZdaubyaosContour> =
    (renderingByBlockElement: RenderingByBlockElement<ZdaubyaosContour>): Rendering<ZdaubyaosContour> =>
        (block: Block): ContourPiece<ZdaubyaosContour> => to.ContourPiece(sequence(block.map(renderingByBlockElement)))

const buildRenderings: () => Renderings =
    (): Renderings => ({
        [ RenderingName.GLIS ]: (block: Block): ContourPiece<ZdaubyaosContour> =>
            renderByBlockElement(glisRendering)(block),
        [ RenderingName.TREM ]: (block: Block): ContourPiece<ZdaubyaosContour> =>
            renderByBlockElement(tremRendering)(block),
        [ RenderingName.BONY ]: bonyRendering,
        [ RenderingName.SPRING ]: (block: Block): ContourPiece<ZdaubyaosContour> =>
            renderByBlockElement(springRendering)(block),
        [ RenderingName.SUMMER ]: (block: Block): ContourPiece<ZdaubyaosContour> =>
            renderByBlockElement(summerRendering)(block),
        [ RenderingName.FALL ]: (block: Block): ContourPiece<ZdaubyaosContour> =>
            renderByBlockElement(fallRendering)(block),
        [ RenderingName.SUMMERY_SPRING ]: (block: Block): ContourPiece<ZdaubyaosContour> =>
            renderByBlockElement(summerySpringRendering)(block),
        [ RenderingName.SPRINGY_SUMMER ]: (block: Block): ContourPiece<ZdaubyaosContour> =>
            renderByBlockElement(springySummerRendering)(block),
        [ RenderingName.FLATLINE ]: (block: Block): ContourPiece<ZdaubyaosContour> =>
            renderByBlockElement(flatlineRendering)(block),
    })

export {
    buildRenderings,
}
