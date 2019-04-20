import { PitchDuration, Rendering, RenderingByBlockElement } from '@musical-patterns/material'
import { as, Block, ContourPiece, sequence } from '@musical-patterns/utilities'
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
    (renderingByBlockElement: RenderingByBlockElement<PitchDuration>) => Rendering<PitchDuration> =
    (renderingByBlockElement: RenderingByBlockElement<PitchDuration>): Rendering<PitchDuration> =>
        (block: Block): ContourPiece<PitchDuration> => as.ContourPiece(sequence(...block.map(renderingByBlockElement)))

const computeRenderings: () => Renderings =
    (): Renderings => ({
        [ RenderingName.GLIS ]: (block: Block): ContourPiece<PitchDuration> =>
            renderByBlockElement(glisRendering)(block),
        [ RenderingName.TREM ]: (block: Block): ContourPiece<PitchDuration> =>
            renderByBlockElement(tremRendering)(block),
        [ RenderingName.BONY ]: bonyRendering,
        [ RenderingName.SPRING ]: (block: Block): ContourPiece<PitchDuration> =>
            renderByBlockElement(springRendering)(block),
        [ RenderingName.SUMMER ]: (block: Block): ContourPiece<PitchDuration> =>
            renderByBlockElement(summerRendering)(block),
        [ RenderingName.FALL ]: (block: Block): ContourPiece<PitchDuration> =>
            renderByBlockElement(fallRendering)(block),
        [ RenderingName.SUMMERY_SPRING ]: (block: Block): ContourPiece<PitchDuration> =>
            renderByBlockElement(summerySpringRendering)(block),
        [ RenderingName.SPRINGY_SUMMER ]: (block: Block): ContourPiece<PitchDuration> =>
            renderByBlockElement(springySummerRendering)(block),
        [ RenderingName.FLATLINE ]: (block: Block): ContourPiece<PitchDuration> =>
            renderByBlockElement(flatlineRendering)(block),
    })

export {
    computeRenderings,
}
