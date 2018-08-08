import { Offset, Scalar } from '../../../src/utilities/nominalTypes'
import numbers from '../../../src/utilities/numbers'
import offset from '../../../src/utilities/offset'
import scale from '../../../src/utilities/scale'
import { Contour, Rendering, RenderingFunction } from './types'
import * as from from './utilities/from'
import { Block, ContourElement } from './utilities/nominalTypes'
import * as to from './utilities/to'

const INITIAL: number = 0
const EVEN: number = 2
const ZERO: number = 0
const ONE: number = 1
// tslint:disable-next-line:no-any no-magic-numbers
const SUMMERY_SPRING_OFFSET: Offset = -1.5 as any
// tslint:disable-next-line:no-any no-magic-numbers
const SUMMERY_SPRING_SCALAR: Scalar = 2 as any
// tslint:disable-next-line:no-any no-magic-numbers
const SPRINGY_SUMMER_OFFSET: Offset = 3 as any
// tslint:disable-next-line:no-any no-magic-numbers
const SPRINGY_SUMMER_SCALAR: Scalar = 0.5 as any

const spring: RenderingFunction =
    (block: Block): Contour => {
        const contour: Contour = to.Contour(numbers.slice(0, from.Block(block)))
        contour[INITIAL] = to.ContourElement(ZERO)

        return contour
    }

const summer: RenderingFunction =
    (block: Block): Contour =>
        numbers
            .slice(INITIAL, from.Block(block))
            .map((n: number): ContourElement => to.ContourElement(n % EVEN === ZERO ? ZERO : n))

const fall: RenderingFunction =
    (block: Block): Contour =>
        to.Contour([ONE, from.Block(block) - ONE])

const summerySpring: RenderingFunction =
    (block: Block): Contour => {
        const contour: Contour = numbers
            .slice(0, from.Block(block))
            .map((n: number): ContourElement =>
                to.ContourElement(scale(offset(n, SUMMERY_SPRING_OFFSET), SUMMERY_SPRING_SCALAR)))

        contour[INITIAL] = to.ContourElement(ZERO)

        return contour
    }

const springySummer: RenderingFunction =
    (block: Block): Contour =>
        numbers
            .slice(0, from.Block(block))
            .map((n: number): ContourElement => {
                if (n % EVEN === ZERO) { return to.ContourElement(ZERO) }

                return to.ContourElement(scale(offset(n, SPRINGY_SUMMER_OFFSET), SPRINGY_SUMMER_SCALAR))
            })

const renderings: { [x in Rendering]: RenderingFunction } = {
    [Rendering.SPRING]: spring,
    [Rendering.SUMMER]: summer,
    [Rendering.FALL]: fall,
    [Rendering.SUMMERY_SPRING]: summerySpring,
    [Rendering.SPRINGY_SUMMER]: springySummer,
}

export default renderings
