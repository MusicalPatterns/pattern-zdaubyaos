import numbers from '../../../src/utilities/numbers'
import { Block, Contour, Rendering, RenderingFunction } from './types'
import * as from from './utilities/from'

const INITIAL: number = 0
const EVEN: number = 2
const ZERO: number = 0
const ONE: number = 1
const SUMMERY_SPRING_OFFSET: number = 1.5
const SUMMERY_SPRING_SCALAR: number = 2
const SPRINGY_SUMMER_OFFSET: number = 3
const SPRINGY_SUMMER_SCALAR: number = 0.5

const spring: RenderingFunction =
    (block: Block): Contour => {
        const contour: Contour = numbers.slice(0, from.Block(block))
        contour[INITIAL] = 0

        return contour
    }

const summer: RenderingFunction =
    (block: Block): Contour =>
        numbers
            .slice(INITIAL, from.Block(block))
            .map((n: number): number => n % EVEN === ZERO ? ZERO : n)

const fall: RenderingFunction =
    (block: Block): Contour =>
        [ONE, from.Block(block) - ONE]

const summerySpring: RenderingFunction =
    (block: Block): Contour => {
        const contour: Contour = numbers
            .slice(0, from.Block(block))
            .map((n: number): number => (n - SUMMERY_SPRING_OFFSET) * SUMMERY_SPRING_SCALAR)

        contour[INITIAL] = 0

        return contour
    }

const springySummer: RenderingFunction =
    (block: Block): Contour =>
        numbers
            .slice(0, from.Block(block))
            .map((n: number): number => n % EVEN === ZERO ? ZERO : (n + SPRINGY_SUMMER_OFFSET) * SPRINGY_SUMMER_SCALAR)

const renderings: { [x in Rendering]: RenderingFunction } = {
    [Rendering.SPRING]: spring,
    [Rendering.SUMMER]: summer,
    [Rendering.FALL]: fall,
    [Rendering.SUMMERY_SPRING]: summerySpring,
    [Rendering.SPRINGY_SUMMER]: springySummer,
}

export default renderings
