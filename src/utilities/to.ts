// tslint:disable:variable-name no-any

import { Blocks, Contour, ContourElement } from '../types'
import { Block } from './nominalTypes'

const Block: (block: number) => Block =
    (block: number): Block => block as any

const Blocks: (_: Array<number | Block>) => Blocks =
    (blocks: Array<number | Block>): Blocks =>
        blocks.map((block: Block | number): Block => block as any)

const Contour: (_: Array<number[] | ContourElement>) => Contour =
    (contour: Array<number[] | ContourElement>): Contour =>
        contour.map((contourElement: number[] | ContourElement): ContourElement => contourElement as any)

export {
    Block,
    Blocks,
    Contour,
}
