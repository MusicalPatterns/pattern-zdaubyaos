import { from, Index } from '../../../../../src'
import { to } from '../../nominal'
import { ContourPiece } from '../../types'
import { RenderingByBlockElement } from './types'

const fallRendering: RenderingByBlockElement =
    (blockElement: Index): ContourPiece =>
        to.ContourPiece([ [ 1, 1 ], [ from.Index(blockElement) - 1, from.Index(blockElement) - 1 ] ])

export {
    fallRendering,
}
