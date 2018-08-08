// tslint:disable:variable-name no-any

import { Block, ContourElement } from './nominalTypes'

const Block: (block: Block) => number =
    (block: Block): number => block as any

const ContourElement: (contourElement: ContourElement) => number =
    (contourElement: ContourElement): number => contourElement as any

export {
    Block,
    ContourElement,
}
