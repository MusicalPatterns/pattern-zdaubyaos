// tslint:disable:variable-name no-any

import { ContourElement } from '../types'
import { ContourPiece, ContourWhole } from './types'

const ContourPiece: (contour: Array<number[] | ContourElement>) => ContourPiece =
    (contour: Array<number[] | ContourElement>): ContourPiece =>
        contour.map((contourElement: number[] | ContourElement): ContourElement => contourElement as any) as any

const ContourWhole: (contour: Array<number[] | ContourElement>) => ContourWhole =
    (contour: Array<number[] | ContourElement>): ContourWhole =>
        contour.map((contourElement: number[] | ContourElement): ContourElement => contourElement as any) as any

export {
    ContourPiece,
    ContourWhole,
}
