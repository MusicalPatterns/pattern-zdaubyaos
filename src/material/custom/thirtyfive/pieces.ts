import { PitchValue, Rendering } from '@musical-patterns/material'
import { ContourPiece } from '@musical-patterns/utilities'
import { computeRenderings, RenderingName, Renderings } from '../../rendering'
import { computeThirtyfiveBlocks } from './blocks'
import { ThirtyfiveBlocks, ThirtyfiveContourPieces } from './types'

const computeThirtyfiveContourPieces: () => ThirtyfiveContourPieces =
    (): ThirtyfiveContourPieces => {
        const blocks: ThirtyfiveBlocks = computeThirtyfiveBlocks()

        const renderings: Renderings = computeRenderings()
        const glis: Rendering<PitchValue> = renderings[ RenderingName.GLIS ]

        const yaosBass: ContourPiece<PitchValue> = glis(blocks.yaosBass)
        const yaosAccidentInspired: ContourPiece<PitchValue> = glis(blocks.yaosAccidentInspired)
        const zdaub: ContourPiece<PitchValue> = glis(blocks.zdaub)
        const zdaubOnlyWiggle: ContourPiece<PitchValue> = glis(blocks.zdaubOnlyWiggle)

        return {
            yaosAccidentInspired,
            yaosBass,
            zdaub,
            zdaubOnlyWiggle,
        }
    }

export {
    computeThirtyfiveContourPieces,
}
