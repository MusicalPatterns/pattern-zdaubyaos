import * as from from '../../../../src/utilities/from'
import { Index, Time } from '../../../../src/utilities/nominalTypes'
import numbers from '../../../../src/utilities/numbers'
import * as to from '../../../../src/utilities/to'
import { Contour, ContourElement } from '../types'
import * as zdaubyaosFrom from '../utilities/from'
import { Block } from '../utilities/nominalTypes'

// tslint:disable-next-line:no-any no-magic-numbers
const INDEX_OF_PITCH_INDEX: Index = 0 as any
// tslint:disable-next-line:no-any no-magic-numbers
const INITIAL: Index = 0 as any
// tslint:disable-next-line:no-any no-magic-numbers
const SINGLE_DURATION: Time = 1 as any

const springBlock: (block: Block) => Contour = (block: Block): Contour => {
    const numbersWeNeed: number[] = numbers.slice(0, zdaubyaosFrom.Block(block))
    const contour: Contour = numbersWeNeed.map((n: number): ContourElement => [to.Index(n), SINGLE_DURATION])
    contour[from.Index(INITIAL)][from.Index(INDEX_OF_PITCH_INDEX)] = to.Index(0)

    return contour
}

export default springBlock
