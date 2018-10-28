import { applyOffset, applyScale, from, INITIAL, numbers, to } from '../../../../src'
import { INDEX_OF_PITCH_INDEX_WITHIN_CONTOUR_ELEMENT } from '../constants'
import { Block, from as zdaubyaosFrom } from '../nominal'
import { Contour, ContourElement } from '../types'
import { SUMMERY_SPRING_OFFSET, SUMMERY_SPRING_SCALAR } from './constants'

const summerySpringBlock: (block: Block) => Contour =
    (block: Block): Contour => {
        const contour: Contour = numbers
            .slice(from.Index(INITIAL), zdaubyaosFrom.Block(block))
            .map((n: number): ContourElement => ([
                to.Index(applyScale(applyOffset(n, SUMMERY_SPRING_OFFSET), SUMMERY_SPRING_SCALAR)),
                to.Index(1),
            ]))
        contour[from.Index(INITIAL)][from.Index(INDEX_OF_PITCH_INDEX_WITHIN_CONTOUR_ELEMENT)] = to.Index(0)

        return contour
    }

export {
    summerySpringBlock,
}
