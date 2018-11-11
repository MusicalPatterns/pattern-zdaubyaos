import { Block, ContourPiece, Index } from '../../../../../src'

type Rendering = (block: Block) => ContourPiece

type RenderingByBlockElement = (blockElement: Index) => ContourPiece

type Renderings = { [x in RenderingName]: Rendering }

enum RenderingName {
    SPRING = 'spring',
    SUMMER = 'summer',
    FALL = 'fall',
    SUMMERY_SPRING = 'summerySpring',
    SPRINGY_SUMMER = 'springySummer',
    GLIS = 'glis',
    BONY = 'bony',
    TREM = 'trem',
    FLATLINE = 'flatline',
}

export {
    Renderings,
    Rendering,
    RenderingName,
    RenderingByBlockElement,
}
