// tslint:disable:variable-name no-any

import { Blocks, Contour, ManualContour, ManualContourElement } from '../types'
import { Block, ContourElement } from './nominalTypes'

const Blocks: (_: Array<number | Block>) => Blocks =
    (blocks: Array<number | Block>): Blocks =>
        blocks.map((block: Block | number): Block => block as any)

const Contour: (_: Array<number | ContourElement>) => Contour =
    (contour: Array<number | ContourElement>): Contour =>
        contour.map((contourElement: ContourElement | number): ContourElement => contourElement as any)

const ManualContour: (_: number[][]) => ManualContour =
    (manualContour: number[][]): ManualContour =>
        manualContour.map((manualContourElement: number[]): ManualContourElement => manualContourElement as any)

const ContourElement: (contourElement: number) => ContourElement =
    (contourElement: number): ContourElement => contourElement as any

export {
    Blocks,
    Contour,
    ManualContour,
    ContourElement,
}
