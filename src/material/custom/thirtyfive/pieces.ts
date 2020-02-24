import { PitchValue, Rendering } from '@musical-patterns/material'
import { ContourPiece, Thunk } from '@musical-patterns/utilities'
import { RenderingName, Renderings, thunkRenderings } from '../../rendering'
import { thunkThirtyfiveBlocks } from './blocks'
import { ThirtyfiveBlocks, ThirtyfiveContourPieces } from './types'

const thunkThirtyfiveContourPieces: Thunk<ThirtyfiveContourPieces> =
    (): ThirtyfiveContourPieces => {
        const blocks: ThirtyfiveBlocks = thunkThirtyfiveBlocks()

        const renderings: Renderings = thunkRenderings()
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
    thunkThirtyfiveContourPieces,
}
