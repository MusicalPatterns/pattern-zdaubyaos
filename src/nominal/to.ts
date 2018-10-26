// tslint:disable:variable-name no-any

import { Contour, ContourElement } from '../types'
import { Block } from './types'

const Block: (block: number) => Block =
    (block: number): Block => block as any

const Blocks: (_: Array<number | Block>) => Block[] =
    (blocks: Array<number | Block>): Block[] =>
        blocks.map((block: Block | number): Block => block as any)

const Contour: (_: Array<number[] | ContourElement>) => Contour =
    (contour: Array<number[] | ContourElement>): Contour =>
        contour.map((contourElement: number[] | ContourElement): ContourElement => contourElement as any)

export {
    Block,
    Blocks,
    Contour,
}
