import { applyOffset, applyScale, from, Index, numbers, Offset, Scalar, to } from '../../../../src'
import { Block, from as zdaubyaosFrom } from '../nominal'
import { Contour, ContourElement } from '../types'

// tslint:disable-next-line:no-any no-magic-numbers
const SUMMERY_SPRING_OFFSET: Offset = -1.5 as any
// tslint:disable-next-line:no-any no-magic-numbers
const SUMMERY_SPRING_SCALAR: Scalar = 2 as any
// tslint:disable-next-line:no-any no-magic-numbers
const INDEX_OF_PITCH_INDEX: Index = 0 as any
// tslint:disable-next-line:no-any no-magic-numbers
const INITIAL: Index = 0 as any

const summerySpringBlock: (block: Block) => Contour =
    (block: Block): Contour => {
        const contour: Contour = numbers
            .slice(0, zdaubyaosFrom.Block(block))
            .map((n: number): ContourElement => ([
                to.Index(applyScale(applyOffset(n, SUMMERY_SPRING_OFFSET), SUMMERY_SPRING_SCALAR)),
                to.Index(1),
            ]))
        contour[from.Index(INITIAL)][from.Index(INDEX_OF_PITCH_INDEX)] = to.Index(0)

        return contour
    }

export {
    summerySpringBlock,
}
