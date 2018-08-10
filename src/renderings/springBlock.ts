import { Time } from '../../../../src/utilities/nominalTypes'
import numbers from '../../../../src/utilities/numbers'
import * as to from '../../../../src/utilities/to'
import { Contour, ContourElement } from '../types'
import * as zdaubyaosFrom from '../utilities/from'
import { Block } from '../utilities/nominalTypes'

const INDEX_OF_PITCH_INDEX: number = 0
const INITIAL: number = 0
// tslint:disable-next-line:no-any no-magic-numbers
const SINGLE_DURATION: Time = 1 as any

const springBlock: (block: Block) => Contour = (block: Block): Contour => {
    const numbersWeNeed: number[] = numbers.slice(0, zdaubyaosFrom.Block(block))
    const contour: Contour = numbersWeNeed.map((n: number): ContourElement => [to.Index(n), SINGLE_DURATION])
    contour[INITIAL][INDEX_OF_PITCH_INDEX] = to.Index(0)

    return contour
}

export default springBlock
