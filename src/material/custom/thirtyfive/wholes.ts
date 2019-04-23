import { computeTotalPitchDurationContourDuration, PitchDuration, pitchDurationRest } from '@musical-patterns/material'
import { as, ContourPiece, ContourWhole, repeat, sequence } from '@musical-patterns/utilities'
import { computeThirtyfiveContourPieces } from './pieces'
import { ThirtyfiveContourPieces, ThirtyfiveContourWholes } from './types'

const computeThirtyfiveContourWholes: () => ThirtyfiveContourWholes =
    (): ThirtyfiveContourWholes => {
        const thirtyfiveContourPieces: ThirtyfiveContourPieces = computeThirtyfiveContourPieces()

        const thirtyfiveYaosBass: ContourWhole<PitchDuration> = as.ContourWhole(sequence(
            repeat(thirtyfiveContourPieces.yaosBass, as.Cardinal<ContourPiece<PitchDuration>>(30)),
        ))

        const thirtyfiveYaosAccidentInspired: ContourWhole<PitchDuration> = as.ContourWhole(sequence(
            repeat(thirtyfiveContourPieces.yaosAccidentInspired, as.Cardinal<ContourPiece<PitchDuration>>(30)),
        ))

        const thirtyfiveZdaub: ContourWhole<PitchDuration> = as.ContourWhole(sequence(
            pitchDurationRest(computeTotalPitchDurationContourDuration(thirtyfiveContourPieces.zdaub)),
            repeat(thirtyfiveContourPieces.zdaub, as.Cardinal<ContourPiece<PitchDuration>>(2)),
            repeat(thirtyfiveContourPieces.zdaubOnlyWiggle, as.Cardinal<ContourPiece<PitchDuration>>(12)),
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
