import { from, INITIAL, numbers, to } from '../../../../src'
import { INDEX_OF_PITCH_INDEX_WITHIN_CONTOUR_ELEMENT } from '../constants'
import { Block, from as zdaubyaosFrom } from '../nominal'
import { Contour, ContourElement } from '../types'
import { SINGLE_DURATION } from './constants'

const springBlock: (block: Block) => Contour = (block: Block): Contour => {
    const numbersWeNeed: number[] = numbers.slice(from.Index(INITIAL), zdaubyaosFrom.Block(block))
    const contour: Contour = numbersWeNeed.map((n: number): ContourElement => [ to.Index(n), SINGLE_DURATION ])
    contour[from.Index(INITIAL)][from.Index(INDEX_OF_PITCH_INDEX_WITHIN_CONTOUR_ELEMENT)] = to.Index(0)

    return contour
}

export {
    springBlock,
}
