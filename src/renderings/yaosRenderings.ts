import { Offset, Scalar } from '../../../../src/utilities/nominalTypes'
import numbers from '../../../../src/utilities/numbers'
import offset from '../../../../src/utilities/offset'
import scale from '../../../../src/utilities/scale'
import sequence from '../../../../src/utilities/sequence'
import { Blocks, Contour, RenderingFunction } from '../types'
import * as from from '../utilities/from'
import { Block, ContourElement } from '../utilities/nominalTypes'
import * as to from '../utilities/to'
import { YaosRendering } from '../zdaubyaosTypes'

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

const springBlock: (block: Block) => Contour =
    (block: Block): Contour => {
        const contour: Contour = to.Contour(numbers.slice(0, from.Block(block)))
        contour[INITIAL] = to.ContourElement(ZERO)

        return contour
    }

const spring: RenderingFunction =
    (blocks: Blocks): Contour =>
        sequence(blocks.map(springBlock))

const summerBlock: (block: Block) => Contour  =
    (block: Block): Contour =>
        numbers
            .slice(INITIAL, from.Block(block))
            .map((n: number): ContourElement => to.ContourElement(n % EVEN === ZERO ? ZERO : n))

const summer: RenderingFunction =
    (blocks: Blocks): Contour =>
        sequence(blocks.map(summerBlock))

const fallBlock: (block: Block) => Contour =
    (block: Block): Contour =>
        to.Contour([ONE, from.Block(block) - ONE])

const fall: RenderingFunction =
    (blocks: Blocks): Contour =>
        sequence(blocks.map(fallBlock))

const summerySpringBlock: (block: Block) => Contour =
    (block: Block): Contour => {
        const contour: Contour = numbers
            .slice(0, from.Block(block))
            .map((n: number): ContourElement =>
                to.ContourElement(scale(offset(n, SUMMERY_SPRING_OFFSET), SUMMERY_SPRING_SCALAR)))

        contour[INITIAL] = to.ContourElement(ZERO)

        return contour
    }

const summerySpring: RenderingFunction =
    (blocks: Blocks): Contour =>
        sequence(blocks.map(summerySpringBlock))

const springySummerBlock: (block: Block) => Contour =
    (block: Block): Contour =>
        numbers
            .slice(0, from.Block(block))
            .map((n: number): ContourElement => {
                if (n % EVEN === ZERO) { return to.ContourElement(ZERO) }

                return to.ContourElement(scale(offset(n, SPRINGY_SUMMER_OFFSET), SPRINGY_SUMMER_SCALAR))
            })

const springySummer: RenderingFunction =
    (blocks: Blocks): Contour =>
        sequence(blocks.map(springySummerBlock))

const yaosRenderings: { [x in YaosRendering]: RenderingFunction } = {
    [YaosRendering.SPRING]: spring,
    [YaosRendering.SUMMER]: summer,
    [YaosRendering.FALL]: fall,
    [YaosRendering.SUMMERY_SPRING]: summerySpring,
    [YaosRendering.SPRINGY_SUMMER]: springySummer,
}

export default yaosRenderings
