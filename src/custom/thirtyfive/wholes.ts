import { calculateTotalPitchDurationContourDuration, PitchDuration, pitchDurationRest } from '@musical-patterns/pattern'
import { ContourWhole, DictionaryOf, repeat, sequence, to } from '@musical-patterns/utilities'
import { buildThirtyfiveContourPieces } from './pieces'

const buildThirtyfiveContourWholes: () => DictionaryOf<ContourWhole<PitchDuration>> =
    (): DictionaryOf<ContourWhole<PitchDuration>> => {
        const {
            thirtyfiveYaosBassContourPiece,
            thirtyfiveYaosAccidentInspiredContourPiece,
            thirtyfiveZdaubContourPiece,
            thirtyfiveZdaubOnlyWiggleContourPiece,
        } = buildThirtyfiveContourPieces()

        const thirtyfiveYaosBassContourWhole: ContourWhole<PitchDuration> = to.ContourWhole(sequence([
            repeat(thirtyfiveYaosBassContourPiece, to.Cardinal(30)),
        ]))

        const thirtyfiveYaosAccidentInspiredContourWhole: ContourWhole<PitchDuration> = to.ContourWhole(sequence([
            repeat(thirtyfiveYaosAccidentInspiredContourPiece, to.Cardinal(30)),
        ]))

        const thirtyfiveZdaubContourWhole: ContourWhole<PitchDuration> = to.ContourWhole(sequence([
            pitchDurationRest(calculateTotalPitchDurationContourDuration(thirtyfiveZdaubContourPiece)),
            repeat(thirtyfiveZdaubContourPiece, to.Cardinal(2)),
            repeat(thirtyfiveZdaubOnlyWiggleContourPiece, to.Cardinal(12)),
        ]))

        return {
            thirtyfiveYaosAccidentInspiredContourWhole,
            thirtyfiveYaosBassContourWhole,
            thirtyfiveZdaubContourWhole,
        }
    }

export {
    buildThirtyfiveContourWholes,
}
