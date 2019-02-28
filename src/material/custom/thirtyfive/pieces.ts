import { PitchDuration, Rendering } from '@musical-patterns/pattern'
import { ContourPiece } from '@musical-patterns/utilities'
import { buildRenderings, RenderingName, Renderings } from '../../renderings'
import { buildThirtyfiveBlocks } from './blocks'
import { ThirtyfiveBlocks, ThirtyfiveContourPieces } from './types'

const buildThirtyfiveContourPieces: () => ThirtyfiveContourPieces =
    (): ThirtyfiveContourPieces => {
        const blocks: ThirtyfiveBlocks = buildThirtyfiveBlocks()

        const renderings: Renderings = buildRenderings()
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
    buildThirtyfiveContourPieces,
}
