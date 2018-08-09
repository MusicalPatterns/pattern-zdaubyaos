import { Offset, Scalar } from '../../../../src/utilities/nominalTypes'
import numbers from '../../../../src/utilities/numbers'
import offset from '../../../../src/utilities/offset'
import scale from '../../../../src/utilities/scale'
import sequence from '../../../../src/utilities/sequence'
import * as to from '../../../../src/utilities/to'
import { Blocks, Contour, ContourElement, RenderingFunction } from '../types'
import * as from from '../utilities/from'
import { Block } from '../utilities/nominalTypes'
import * as zdaubyaosTo from '../utilities/to'
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

const INDEX_OF_PITCH_INDEX: number = 0

const springBlock: (block: Block) => Contour =
    (block: Block): Contour => {
        const numbersWeNeed: number[] = numbers.slice(0, from.Block(block))
        const contour: Contour = numbersWeNeed.map((n: number): ContourElement => [to.Index(n), to.Time(1)])
        contour[INITIAL][INDEX_OF_PITCH_INDEX] = to.Index(ZERO)

        return contour
    }

const summerBlock: (block: Block) => Contour =
    (block: Block): Contour =>
        zdaubyaosTo.Contour(numbers
            .slice(INITIAL, from.Block(block))
            .map((n: number): ContourElement =>
                n % EVEN === ZERO ? [to.Index(ZERO), to.Time(1)] : [to.Index(n), to.Time(1)]))

const fallBlock: (block: Block) => Contour =
    (block: Block): Contour =>
        zdaubyaosTo.Contour([[1, 1], [from.Block(block) - ONE, from.Block(block) - ONE]])

const summerySpringBlock: (block: Block) => Contour =
    (block: Block): Contour => {
        const contour: Contour = numbers
            .slice(0, from.Block(block))
            .map((n: number): ContourElement =>
                [
                    to.Index(scale(offset(n, SUMMERY_SPRING_OFFSET), SUMMERY_SPRING_SCALAR)),
                    to.Time(1),
                ])
        contour[INITIAL][INDEX_OF_PITCH_INDEX] = to.Index(ZERO)

        return contour
    }

const springySummerBlock: (block: Block) => Contour =
    (block: Block): Contour =>
        numbers
            .slice(0, from.Block(block))
            .map((n: number): ContourElement => {
                if (n % EVEN === ZERO) { return [to.Index(ZERO), to.Time(1)] }

                return [
                    to.Index(scale(offset(n, SPRINGY_SUMMER_OFFSET), SPRINGY_SUMMER_SCALAR)),
                    to.Time(1),
                ]
            })

const yaosRenderings: { [x in YaosRendering]: RenderingFunction } = {
    [YaosRendering.SPRING]: (blocks: Blocks): Contour => sequence(blocks.map(springBlock)),
    [YaosRendering.SUMMER]: (blocks: Blocks): Contour => sequence(blocks.map(summerBlock)),
    [YaosRendering.FALL]: (blocks: Blocks): Contour => sequence(blocks.map(fallBlock)),
    [YaosRendering.SUMMERY_SPRING]: (blocks: Blocks): Contour => sequence(blocks.map(summerySpringBlock)),
    [YaosRendering.SPRINGY_SUMMER]: (blocks: Blocks): Contour => sequence(blocks.map(springySummerBlock)),
}

export default yaosRenderings
