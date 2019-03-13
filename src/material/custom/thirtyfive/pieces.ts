import { PitchDuration, Rendering } from '@musical-patterns/pattern'
import { ContourPiece } from '@musical-patterns/utilities'
import { computeRenderings, RenderingName, Renderings } from '../../rendering'
import { computeThirtyfiveBlocks } from './blocks'
import { ThirtyfiveBlocks, ThirtyfiveContourPieces } from './types'

const computeThirtyfiveContourPieces: () => ThirtyfiveContourPieces =
    (): ThirtyfiveContourPieces => {
        const blocks: ThirtyfiveBlocks = computeThirtyfiveBlocks()

        const renderings: Renderings = computeRenderings()
        const glis: Rendering<PitchDuration> = renderings[ RenderingName.GLIS ]

        const yaosBass: ContourPiece<PitchDuration> = glis(blocks.yaosBass)
        const yaosAccidentInspired: ContourPiece<PitchDuration> = glis(blocks.yaosAccidentInspired)
        const zdaub: ContourPiece<PitchDuration> = glis(blocks.zdaub)
        const zdaubOnlyWiggle: ContourPiece<PitchDuration> = glis(blocks.zdaubOnlyWiggle)

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
