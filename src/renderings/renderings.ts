import sequence from '../../../../src/utilities/sequence'
import { Blocks, Contour, Rendering, RenderingFunction } from '../types'
import bony from './bony'
import fallBlock from './fallBlock'
import glisBlock from './glisBlock'
import springBlock from './springBlock'
import springySummerBlock from './springySummerBlock'
import summerBlock from './summerBlock'
import summerySpringBlock from './summerySpringBlock'
import tremBlock from './tremBlock'

const renderings: { [x in Rendering]: RenderingFunction } = {
    [Rendering.GLIS]: (blocks: Blocks): Contour => sequence(blocks.map(glisBlock)),
    [Rendering.TREM]: (blocks: Blocks): Contour => sequence(blocks.map(tremBlock)),
    [Rendering.BONY]: bony,
    [Rendering.SPRING]: (blocks: Blocks): Contour => sequence(blocks.map(springBlock)),
    [Rendering.SUMMER]: (blocks: Blocks): Contour => sequence(blocks.map(summerBlock)),
    [Rendering.FALL]: (blocks: Blocks): Contour => sequence(blocks.map(fallBlock)),
    [Rendering.SUMMERY_SPRING]: (blocks: Blocks): Contour => sequence(blocks.map(summerySpringBlock)),
    [Rendering.SPRINGY_SUMMER]: (blocks: Blocks): Contour => sequence(blocks.map(springySummerBlock)),
}

export default renderings
