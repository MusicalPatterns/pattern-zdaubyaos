import { sequence } from '../../../../src'
import { Block } from '../nominal'
import { Contour, Rendering, RenderingFunction } from '../types'
import { bony } from './bony'
import { fallBlock } from './fallBlock'
import { glisBlock } from './glisBlock'
import { springBlock } from './springBlock'
import { springySummerBlock } from './springySummerBlock'
import { summerBlock } from './summerBlock'
import { summerySpringBlock } from './summerySpringBlock'
import { tremBlock } from './tremBlock'

const renderings: { [x in Rendering]: RenderingFunction } = {
    [Rendering.GLIS]: (blocks: Block[]): Contour => sequence(blocks.map(glisBlock)),
    [Rendering.TREM]: (blocks: Block[]): Contour => sequence(blocks.map(tremBlock)),
    [Rendering.BONY]: bony,
    [Rendering.SPRING]: (blocks: Block[]): Contour => sequence(blocks.map(springBlock)),
    [Rendering.SUMMER]: (blocks: Block[]): Contour => sequence(blocks.map(summerBlock)),
    [Rendering.FALL]: (blocks: Block[]): Contour => sequence(blocks.map(fallBlock)),
    [Rendering.SUMMERY_SPRING]: (blocks: Block[]): Contour => sequence(blocks.map(summerySpringBlock)),
    [Rendering.SPRINGY_SUMMER]: (blocks: Block[]): Contour => sequence(blocks.map(springySummerBlock)),
}

export {
    renderings,
}
