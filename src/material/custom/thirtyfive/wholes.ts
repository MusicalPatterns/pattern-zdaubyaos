import { computeTotalPitchValueContourValue, PitchValue, pitchValueRest } from '@musical-patterns/material'
import { as, ContourPiece, ContourWhole, repeat, sequence } from '@musical-patterns/utilities'
import { computeThirtyfiveContourPieces } from './pieces'
import { ThirtyfiveContourPieces, ThirtyfiveContourWholes } from './types'

const computeThirtyfiveContourWholes: () => ThirtyfiveContourWholes =
    (): ThirtyfiveContourWholes => {
        const thirtyfiveContourPieces: ThirtyfiveContourPieces = computeThirtyfiveContourPieces()

        const thirtyfiveYaosBass: ContourWhole<PitchValue> = as.ContourWhole<PitchValue>(sequence(
            repeat(thirtyfiveContourPieces.yaosBass, as.Cardinal<ContourPiece<PitchValue>>(30)),
        ))

        const thirtyfiveYaosAccidentInspired: ContourWhole<PitchValue> = as.ContourWhole<PitchValue>(sequence(
            repeat(thirtyfiveContourPieces.yaosAccidentInspired, as.Cardinal<ContourPiece<PitchValue>>(30)),
        ))

        const thirtyfiveZdaub: ContourWhole<PitchValue> = as.ContourWhole<PitchValue>(sequence(
            pitchValueRest(computeTotalPitchValueContourValue(thirtyfiveContourPieces.zdaub)),
            repeat(thirtyfiveContourPieces.zdaub, as.Cardinal<ContourPiece<PitchValue>>(2)),
            repeat(thirtyfiveContourPieces.zdaubOnlyWiggle, as.Cardinal<ContourPiece<PitchValue>>(12)),
        ))

        return {
            thirtyfiveYaosAccidentInspired,
            thirtyfiveYaosBass,
            thirtyfiveZdaub,
        }
    }

export {
    computeThirtyfiveContourWholes,
}
