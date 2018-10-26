import { from, Index, numbers, to } from '../../../../src'
import { Block, from as zdaubyaosFrom } from '../nominal'
import { Contour, ContourElement } from '../types'

// tslint:disable-next-line:no-any no-magic-numbers
const INDEX_OF_PITCH_INDEX: Index = 0 as any
// tslint:disable-next-line:no-any no-magic-numbers
const INITIAL: Index = 0 as any
// tslint:disable-next-line:no-any no-magic-numbers
const SINGLE_DURATION: Index = 1 as any

const springBlock: (block: Block) => Contour = (block: Block): Contour => {
    const numbersWeNeed: number[] = numbers.slice(0, zdaubyaosFrom.Block(block))
    const contour: Contour = numbersWeNeed.map((n: number): ContourElement => [ to.Index(n), SINGLE_DURATION ])
    contour[from.Index(INITIAL)][from.Index(INDEX_OF_PITCH_INDEX)] = to.Index(0)

    return contour
}

export {
    springBlock,
}
