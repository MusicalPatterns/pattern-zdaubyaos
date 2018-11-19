import { Index } from '@musical-patterns/utilities'
import { Block, ContourPiece } from '../../../../../src'

type Rendering = (block: Block) => ContourPiece

type RenderingByBlockElement = (blockElement: Index) => ContourPiece

type Renderings = { [x in RenderingName]: Rendering }

enum RenderingName {
    SPRING = 'SPRING',
    SUMMER = 'SUMMER',
    FALL = 'FALL',
    SUMMERY_SPRING = 'SUMMERY_SPRING',
    SPRINGY_SUMMER = 'SPRINGY_SUMMER',
    GLIS = 'GLIS',
    BONY = 'BONY',
    TREM = 'TREM',
    FLATLINE = 'FLATLINE',
}

export {
    Renderings,
    Rendering,
    RenderingName,
    RenderingByBlockElement,
}
